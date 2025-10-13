import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            GET IN TOUCH
          </h2>
          <div className="w-16 sm:w-24 h-px bg-white mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="border border-white/20 p-6 sm:p-8 md:p-12 hover:border-white transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-light text-white mb-4 sm:mb-6 tracking-wider">
              LET'S CONNECT
            </h3>
            <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 tracking-wide leading-relaxed">
              placeholder
            </p>
            <a
              href="mailto:olivertransf@gmail.com?subject=Hello from your portfolio&body=Hi Oliver,%0D%0A%0D%0AI saw your portfolio and wanted to get in touch.%0D%0A%0D%0A"
              className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-base sm:text-lg"
            >
              SEND EMAIL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
