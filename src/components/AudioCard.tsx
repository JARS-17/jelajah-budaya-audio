import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Headphones } from 'lucide-react';

interface AudioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  onPlay: () => void;
  isActive?: boolean;
}

const AudioCard = ({ title, description, imageUrl, duration, onPlay, isActive = false }: AudioCardProps) => {
  return (
    <Card
      className={`flex flex-col h-full group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
        isActive ? "ring-2 ring-forest-green shadow-elevated" : "shadow-nature"
      } border-forest-green/20 bg-gradient-card`}
    >
      <div className="rounded-lg overflow-hidden bg-transparent shadow-md group">
        {/* Gambar dan tombol play di atas */}
        <div className="relative">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button onClick={onPlay} className="bg-forest-green hover:bg-forest-green-dark text-white rounded-full p-4 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <Play className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-forest-green">
          <Headphones className="inline h-4 w-4 mr-1" />
          {duration}
        </div>
      </div>
      
      <CardContent className="bg-white p-6 rounded-b-lg flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-l md:text-xl font-semibold text-forest-green-dark mb-2 group-hover:text-forest-green transition-colors">{title}</h3>
          <p className="text-xs md:text-base text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <Button onClick={onPlay} variant="outline" className="w-full mt-4 border-forest-green/30 hover:bg-forest-green/10 text-forest-green">
          <Play className="h-4 w-4 mr-2" />
          <p className="text-xs md:text-base">Putar Audio</p>
        </Button>
      </CardContent>
    </Card>
  );
};

export default AudioCard;