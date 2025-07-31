const CallToAction = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-medium italic text-foreground mb-8">
          Peace of mind is just one inspection away—Reach out to{" "}
          <a 
            href="#contact" 
            className="font-bold text-primary hover:text-primary-light transition-colors underline"
          >
            Ax4
          </a>{" "}
          today.
        </h2>
        
        <div className="h-24" />
        
        <div className="text-left max-w-2xl mx-auto">
          <p className="font-bold mb-4">
            For more information related to asbestos legislation, regulations and guidelines visit:
          </p>
          
          <ul className="space-y-2">
            <li>
              <a 
                href="https://safework.sa.gov.au/news-and-alerts/news/news/2022/asbestos-management-a-state-wide-issue"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:text-primary-light transition-colors"
              >
                SafeWork SA
              </a>
            </li>
            <li>
              <a 
                href="https://www.asbestos.sa.gov.au/about-asbestos/asbestos-and-the-law"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:text-primary-light transition-colors"
              >
                Asbestos.sa.gov.au
              </a>
            </li>
            <li>
              <a 
                href="https://www.epa.sa.gov.au/files/47711_guide_asbestos.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:text-primary-light transition-colors"
              >
                EPA SA
              </a>
            </li>
            <li>
              <a 
                href="https://www.sahealth.sa.gov.au/wps/wcm/connect/01f3db004cce1a93931bf7452d5dae10/Guideline+-+Asbestos+Managemet+Safety+%28WHS%29+-+Apr2016.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-01f3db004cce1a93931bf7452d5dae10-oCUThQa"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:text-primary-light transition-colors"
              >
                SA Health WHS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;