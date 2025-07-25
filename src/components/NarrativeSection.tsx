import { Card, CardContent } from '@/components/ui/card';

interface NarrativeSectionProps {
  title: string;
  content: string;
  imageUrl: string;
}

const NarrativeSection = ({ title, content, imageUrl }: NarrativeSectionProps) => {
  return (
    <section className="rounded-b-lg py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-card shadow-elevated border-forest-green/20 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative">
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
              </div>
              
              {/* Content */}
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-sky-blue mb-6 animate-fade-in">
                  {title}
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
                  {content}
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;