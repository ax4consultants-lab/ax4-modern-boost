import { Phone, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h4 className="text-2xl font-bold text-foreground mb-6">
          Take the First Step Toward Compliance
        </h4>
        
        <p className="text-white mb-8 max-w-2xl mx-auto">
          Don't leave compliance to chance. Contact <strong>Ax4 Asbestos Consultants</strong> today to safeguard your property and investments.
        </p>
        
        <div className="space-y-4 text-left max-w-md mx-auto">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
            <span>
              <strong>Call us now:</strong> 08 8261 4094
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary flex-shrink-0" />
            <span>
              <strong>Email us:</strong>{" "}
              <a 
                href="mailto:admin@ax4.com.au"
                className="text-primary hover:text-primary-light transition-colors underline"
              >
                admin@ax4.com.au
              </a>
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Globe className="h-5 w-5 text-primary flex-shrink-0" />
            <span>
              <strong>Learn more:</strong>{" "}
              <a 
                href="#services"
                className="text-primary hover:text-primary-light transition-colors underline"
              >
                Asbestos Services in Adelaide
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;