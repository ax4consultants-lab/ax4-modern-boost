const Footer = () => {
  return (
    <footer className="bg-services-secondary text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Company Info */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Trusted Asbestos & Environmental Consultants in Adelaide
          </h2>
          <p className="text-xl font-semibold mb-4">
            Compliance. Clarity. Confidence.
          </p>
          <p className="mb-4 leading-relaxed">
            We deliver fast, compliant asbestos services for South Australian property professionals, developers, and businesses.
          </p>
          <p className="leading-relaxed">
            From asbestos registers to pre-demolition surveys and full WHS documentation — we help you stay compliant and safe.
          </p>
        </div>

        <div className="h-24 mb-12" />

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h6 className="font-semibold mb-2">ABN - 92 783 562 076</h6>
            <h6 className="font-semibold mb-2">Phone - 08 8261 4094</h6>
            <h6 className="font-semibold mb-2">
              Email -{" "}
              <a 
                href="mailto:admin@ax4.com.au"
                className="text-accent-blue hover:underline"
              >
                admin@ax4.com.au
              </a>
            </h6>
            <h6 className="font-semibold">Address - PO Box 400, Greenacres 5086 SA</h6>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
            <p className="mb-2">Monday - Friday: 9AM - 6PM</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/20 pt-8">
          <p>&copy; 2024 Ax4 Asbestos Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;