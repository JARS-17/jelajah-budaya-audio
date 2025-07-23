import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc: string;
  title: string;
  duration?: number;
  onProgressChange?: (progress: number) => void;
  initialProgress?: number;
}

const AudioPlayer = ({ audioSrc, title, duration = 0, onProgressChange, initialProgress = 0 }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(initialProgress);
  const [audioDuration, setAudioDuration] = useState(duration);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playbackSpeeds = [0.75, 1, 1.25, 1.5];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      onProgressChange?.(audio.currentTime);
    };

    const updateDuration = () => {
      setAudioDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [onProgressChange]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = initialProgress;
      setCurrentTime(initialProgress);
    }
  }, [initialProgress]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skip = (seconds: number) => {
    if (!audioRef.current) return;
    const newTime = Math.max(0, Math.min(audioDuration, audioRef.current.currentTime + seconds));
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleProgressChange = (value: number[]) => {
    if (!audioRef.current) return;
    const newTime = value[0];
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const changePlaybackRate = () => {
    const currentIndex = playbackSpeeds.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % playbackSpeeds.length;
    const newRate = playbackSpeeds[nextIndex];
    setPlaybackRate(newRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = newRate;
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-nature border-forest-green/20">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-forest-green-dark">{title}</h3>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <Slider
            value={[currentTime]}
            max={audioDuration}
            step={1}
            onValueChange={handleProgressChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(audioDuration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => skip(-10)}
              variant="outline"
              size="sm"
              className="border-forest-green/30 hover:bg-forest-green/10"
            >
              <SkipBack className="h-4 w-4" />
              10s
            </Button>
            
            <Button
              onClick={togglePlay}
              className="bg-forest-green hover:bg-forest-green-dark"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            
            <Button
              onClick={() => skip(10)}
              variant="outline"
              size="sm"
              className="border-forest-green/30 hover:bg-forest-green/10"
            >
              <SkipForward className="h-4 w-4" />
              10s
            </Button>
          </div>

          <div className="flex items-center gap-4">
            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider
                value={[volume]}
                max={1}
                step={0.1}
                onValueChange={handleVolumeChange}
                className="w-20"
              />
            </div>

            {/* Speed Control */}
            <Button
              onClick={changePlaybackRate}
              variant="outline"
              size="sm"
              className="border-forest-green/30 hover:bg-forest-green/10 min-w-[60px]"
            >
              {playbackRate}x
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AudioPlayer;