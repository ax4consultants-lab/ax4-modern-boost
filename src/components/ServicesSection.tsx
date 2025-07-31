import warningIcon from "@/assets/asbestos-warning-icon.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "1. Pre-Sale Compliance (Form 1 Reports):",
      description: "Avoid settlement delays with our detailed asbestos surveys and Form 1 compliance reports. Perfect for sellers and conveyancers.",
      bgColor: "bg-services-secondary"
    },
    {
      title: "2. Pre-Purchase Inspections:",
      description: "Make informed decisions with our pre-purchase asbestos survey reports, designed to identify risks and safeguard your investments.",
      bgColor: "bg-services-primary"
    },
    {
      title: "3. Pre-Demolition Surveys:",
      description: "Ensure safety and compliance with our intrusive surveys for properties slated for demolition. Protect workers, contractors, and the environment with our expert support. Our thorough surveys ensure no asbestos surprises during demolition, avoiding costly delays and health risks.",
      bgColor: "bg-services-secondary"
    },
    {
      title: "4. Workplace Compliance:",
      description: "Keep your team safe and your workplace legally compliant with customized asbestos registers and management plans.",
      bgColor: "bg-services-primary"
    },
    {
      title: "5. Maintenance and Removal:",
      description: "We facilitate seamless asbestos removal and ongoing maintenance to align with your operations and minimize downtime.",
      bgColor: "bg-services-secondary"
    },
    {
      title: "6. NATA-Certified Sample Analysis:",
      description: "Trust in precision and reliability with our accredited sample analysis services.",
      bgColor: "bg-services-primary"
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="mb-8">
          <img 
            src={warningIcon} 
            alt="Asbestos Warning Icon" 
            className="w-[105px] h-auto mb-4"
          />
          <h4 className="text-xl font-semibold text-primary">
            <a href="#services" className="hover:text-primary-light transition-colors">
              Our Services Include
            </a>:
          </h4>
        </div>

        {/* Services List */}
        <div className="space-y-1">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-6 ${service.bgColor === 'bg-services-secondary' ? 'bg-services-secondary text-white' : 'bg-services-primary text-foreground'}`}
            >
              <p className="font-bold text-base mb-2">
                {service.title}
              </p>
              <p className={`text-base leading-relaxed ${service.bgColor === 'bg-services-secondary' ? 'text-gray-200' : 'text-text-body'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;