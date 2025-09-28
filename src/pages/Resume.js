import React from "react";

const Resume = () => {
  return (
    <section className="pt-32 pb-20 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            RESUME
          </h1>
          <div className="w-24 h-px bg-white mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="border border-white/20 p-4 hover:border-white transition-all duration-300">
            <iframe
              src="/resume.pdf"
              className="w-full h-screen"
              title="Resume PDF"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
