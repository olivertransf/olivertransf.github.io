import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-px bg-white mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="border border-white/20 p-12 hover:border-white transition-all duration-300">
            <h3 className="text-2xl font-light text-white mb-6 tracking-wider">
              LET'S CONNECT
            </h3>
            <p className="text-white/80 mb-8 tracking-wide leading-relaxed">
              Ready to work together or just want to say hello? Click the button
              below to send me an email directly.
            </p>
            <a
              href="mailto:olivertransf@gmail.com?subject=Hello from your portfolio&body=Hi Oliver,%0D%0A%0D%0AI saw your portfolio and wanted to get in touch.%0D%0A%0D%0A"
              className="inline-block px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-lg"
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
