import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2, X } from "lucide-react";

interface AudioPlayerProps {
  audioSrc: string;
  title: string;
  duration?: number;
  onProgressChange?: (progress: number) => void;
  initialProgress?: number;
  onClose?: () => void;
}

const AudioPlayer = ({ audioSrc, title, duration = 0, onProgressChange, initialProgress = 0, onClose }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(initialProgress);
  const [audioDuration, setAudioDuration] = useState(duration);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);

  const playbackSpeeds = [0.75, 1, 1.25, 1.5];

  // Close volume when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (volumeRef.current && !volumeRef.current.contains(event.target as Node)) {
        setIsVolumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Setup audio event listeners and sync progress
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      setProgress(progress || 0);
    };

    const updateDuration = () => {
      setAudioDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    if (initialProgress > 0) {
      audio.currentTime = initialProgress;
      setCurrentTime(initialProgress);
    }

    // Apply volume & playback rate
    audio.volume = volume;
    audio.playbackRate = playbackRate;

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata",updateDuration);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [initialProgress, volume, playbackRate, onProgressChange]);

  // Update volume on state change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Audio play failed:", err);
      }
    }
  };

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = Math.max(0, Math.min(audio.duration, audio.currentTime + seconds));
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // const handleProgressChange = (value: number[]) => {
  //   const audio = audioRef.current;
  //   if (!audio) return;

  //   const newTime = value[0];
  //   audio.currentTime = newTime;
  //   setCurrentTime(newTime);
  // };

  const changePlaybackRate = () => {
    const currentIndex = playbackSpeeds.indexOf(playbackRate);
    const nextRate = playbackSpeeds[(currentIndex + 1) % playbackSpeeds.length];
    setPlaybackRate(nextRate);

    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handlePlayerClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setCurrentTime(0);
    onClose?.();
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-nature border-forest-green/20 relative">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <div className="absolute top-4 right-4">
        <Button variant="ghost" size="icon" onClick={handlePlayerClose}>
          <X className="h-4 w-4 text-forest-green" />
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-forest-green-dark">{title}</h3>

        {/* Progress Bar */}
        {/* <div className="space-y-2">
          <Slider value={[currentTime]} max={audioDuration} step={0.1} onValueChange={handleProgressChange} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(audioDuration)}</span>
          </div>      
        </div> */}

        {/* Controls */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Button onClick={() => skip(-10)} variant="outline" size="sm" className="border-forest-green/30 hover:bg-forest-green/10">
              <SkipBack className="h-4 w-4" />
              10s
            </Button>

            <Button onClick={togglePlay} className="bg-forest-green hover:bg-forest-green-dark">
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>

            <Button onClick={() => skip(10)} variant="outline" size="sm" className="border-forest-green/30 hover:bg-forest-green/10">
              <SkipForward className="h-4 w-4" />
              10s
            </Button>
          </div>

          <div className="flex items-center gap-4 relative">
            {/* Volume Control */}
            <div ref={volumeRef} className="relative">
              <Button variant="ghost" size="icon" onClick={() => setIsVolumeOpen((prev) => !prev)}>
                <Volume2 className="h-4 w-4 text-muted-foreground" />
              </Button>

              {isVolumeOpen && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white p-3 rounded shadow-lg z-50 flex flex-col items-center space-y-1">
                  <div
                    className="h-24 w-4 bg-gray-200 rounded-full relative cursor-pointer"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickY = e.clientY - rect.top;
                      const height = rect.height;
                      const newVolume = Math.max(0, Math.min(1, 1 - clickY / height));
                      setVolume(newVolume);
                    }}
                  >
                    <div className="absolute bottom-0 left-0 w-full bg-forest-green rounded-full transition-all duration-150" style={{ height: `${volume * 100}%` }} />
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border border-forest-green rounded-full shadow transition-all duration-150" style={{ bottom: `calc(${volume * 100}% - 0.5rem)` }} />
                  </div>
                  <span className="text-xs text-muted-foreground">{Math.round(volume * 100)}%</span>
                </div>
              )}
            </div>

            {/* Speed Control */}
            <Button onClick={changePlaybackRate} variant="outline" size="sm" className="border-forest-green/30 hover:bg-forest-green/10 min-w-[60px]">
              {playbackRate}x
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AudioPlayer;
