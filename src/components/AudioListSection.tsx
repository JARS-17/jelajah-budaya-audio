import AudioCard from './AudioCard';
import { AudioContent } from '@/data/content';

interface AudioListSectionProps {
  title: string;
  audioItems: AudioContent[];
  onPlayAudio: (audio: AudioContent) => void;
  activeAudioId?: string;
}

const AudioListSection = ({ title, audioItems, onPlayAudio, activeAudioId }: AudioListSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-nature-beige">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-forest-green-dark mb-16 animate-fade-in">{title}</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {audioItems.map((audio, index) => (
            <div key={audio.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <AudioCard title={audio.title} description={audio.description} imageUrl={audio.imageUrl} duration={audio.duration} onPlay={() => onPlayAudio(audio)} isActive={activeAudioId === audio.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudioListSection;