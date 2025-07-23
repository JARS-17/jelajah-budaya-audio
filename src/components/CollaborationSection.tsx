import ui from "@/assets/partners/logokolab1.png";
import kemdikbud from "@/assets/partners/logokolab2.png";
import balar from "@/assets/partners/logokolab3.png";
import unesco from "@/assets/partners/logokolab4.png";
import maros from "@/assets/partners/logokolab5.png";
import komunitas from "@/assets/partners/logokolab6.png";
import dirjen from "@/assets/partners/logokolab7.png";



interface CollaborationSectionProps {
  title: string;
}

const CollaborationSection = ({ title }: CollaborationSectionProps) => {
  const partnerLogos = [ui, kemdikbud, balar, unesco, maros, komunitas, dirjen];

  return (
    <section className="py-10 bg-none">
      {/* Artefak interaktif looping */}
      <div className="overflow-hidden py-10 relative">
        <div className="animate-slide-left whitespace-nowrap flex gap-16">
          {partnerLogos.concat(partnerLogos).map((logo, index) => (
            <img key={index} src={logo} alt={`partner-${index}`} className="h-16 w-auto object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;