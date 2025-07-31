import HeroSection from "@/components/HeroSection";
import CompanyInfo from "@/components/CompanyInfo";
import ServicesSection from "@/components/ServicesSection";
import CallToAction from "@/components/CallToAction";
import ServiceShowcase from "@/components/ServiceShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Separators */}
      <hr className="border-border opacity-50" />
      <hr className="border-border opacity-25" />
      
      <CompanyInfo />
      
      <hr className="border-border opacity-25" />
      
      <ServicesSection />
      
      <hr className="border-border opacity-25" />
      
      <CallToAction />
      
      <ServiceShowcase />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
