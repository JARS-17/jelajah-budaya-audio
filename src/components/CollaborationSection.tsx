interface CollaborationSectionProps {
  title: string;
}

const CollaborationSection = ({ title }: CollaborationSectionProps) => {
  const partners = [
    { name: "Universitas Indonesia", logo: "🏛️" },
    { name: "Kementerian Pendidikan", logo: "📚" },
    { name: "Balai Arkeologi", logo: "🗿" },
    { name: "UNESCO", logo: "🌍" },
    { name: "Pemkab Maros", logo: "🏢" },
    { name: "Komunitas Budaya", logo: "👥" },
    { name: "Museum Nasional", logo: "🏛️" },
    { name: "Dirjen Kebudayaan", logo: "🎭" }
  ];

  return (
    <section className="py-20 bg-nature-beige">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-forest-green-dark mb-16 animate-fade-in">
          {title}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex flex-col items-center text-center animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl shadow-nature mb-3 border border-forest-green/10">
                {partner.logo}
              </div>
              <p className="text-sm text-muted-foreground font-medium">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;