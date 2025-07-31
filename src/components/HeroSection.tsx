import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-asbestos-inspection.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[724px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: '22% 55%'
        }}
        role="img"
        aria-label="Asbestos testing in Adelaide – Certified inspections for homes & businesses"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg md:text-xl py-4 px-8"
            asChild
          >
            <a href="#contact">
              Contact Us Today For A Free Quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;