import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import heroImage from '@/assets/background.png';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaButton: string;
  onStartJourney: () => void;
}

const HeroSection = ({ title, subtitle, ctaButton, onStartJourney }: HeroSectionProps) => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 animate-fade-in">{title}</h1>

        <p className="text-base md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in">{subtitle}</p>

        <Button
          onClick={onStartJourney}
          size="lg"
          className="bg-forest-green hover:bg-forest-green-dark text-white px-8 py-4 text-lg font-semibold rounded-full shadow-elevated hover:shadow-nature transition-all duration-300 hover:scale-105 animate-fade-in"
        >
          <Play className="mr-3 h-6 w-6" />
          {ctaButton}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;