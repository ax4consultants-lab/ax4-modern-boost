import form1Image from "@/assets/form1-compliance.jpg";
import labImage from "@/assets/nata-laboratory.jpg";
import demolitionImage from "@/assets/demolition-survey.jpg";

const ServiceShowcase = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Form 1 Compliance Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <img 
              src={form1Image} 
              alt="Form 1 Compliance Services" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          <h4 className="text-2xl font-semibold text-center text-foreground mb-4">
            Streamlined Form 1 Compliance for Property Sales
          </h4>
          <p className="text-center text-text-body max-w-3xl mx-auto leading-relaxed">
            We recognise the urgency involved in selling your property. Contact us today for efficient and timely Form 1 compliance services, ensuring a smooth and hassle-free process. Handling property groups with large portfolios to manage, to the single property owner, Visit our{" "}
            <a 
              href="#contact" 
              className="text-primary hover:text-primary-light transition-colors underline"
            >
              Contact Page
            </a>{" "}
            to request a consultation.
          </p>
        </div>

        <div className="h-24 mb-16" />

        {/* Laboratory Section */}
        <div className="text-center mb-16">
          <img 
            src={labImage} 
            alt="NATA Certified Laboratory" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Three Column Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Property Sale Asbestos Inspections
            </h4>
            <p className="text-white leading-relaxed">
              Calling all conveyancers! looking for a reliable, honest and quick to respond asbestos surveyor for your clients form 1 compliance? Pre-Sale and Pre-Purchase surveys are often required but also, they are often requested by the potential buyers looking to better understand their soon to be acquired investment. Look no further, speak to us today
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Asbestos Management Planning, Risk Assessments, Resolution Processes
            </h4>
            <p className="text-white leading-relaxed">
              From creating and maintaining management plans, to the specialised management of the maintenance and planned removal of existing asbestos containing materials, we make asbestos compliance easy for you!
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Demolition Asbestos Survey Reports
            </h4>
            <p className="text-white leading-relaxed">
              Specialising in intrusive Pre-Demo surveys. whether you are rebuilding your own property, or you require coordination and management of multiple site, we accommodate our clients needs.
            </p>
          </div>
        </div>

        <div className="h-24 mb-16" />

        {/* Demolition Section */}
        <div className="text-center mb-16">
          <img 
            src={demolitionImage} 
            alt="Demolition Survey Services" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="h-24" />

        {/* Why Choose Ax4 */}
        <div className="text-center">
          <h4 className="text-2xl font-semibold text-foreground mb-8">
            Why Choose Ax4?
          </h4>
          
          <div className="max-w-3xl mx-auto">
            <ul className="text-left space-y-4 text-text-body">
              <li>
                <strong>Local Experts:</strong> We understand Adelaide's unique compliance requirements and regulations.
              </li>
              <li>
                <strong>NATA-Certified Analysis:</strong> Our asbestos sample analysis is backed by certified labs for accuracy and reliability.
              </li>
              <li>
                <strong>Tailored Solutions:</strong> From single properties to large portfolios, we adapt to your needs, ensuring quick and efficient service.
              </li>
              <li>
                <strong>Comprehensive Coverage:</strong> Our services include everything from Form 1 compliance to management plans and risk assessments.
                <br /><br />
                <a 
                  href="#about" 
                  className="font-bold text-primary hover:text-primary-light transition-colors underline"
                >
                  Learn More About Us!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;