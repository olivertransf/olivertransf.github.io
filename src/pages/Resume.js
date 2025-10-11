import React from "react";

const Resume = () => {
  return (
    <section className="pt-32 pb-20 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            RESUME
          </h1>
          <div className="w-24 h-px bg-white mx-auto mb-4"></div>
          {/* Download button for mobile */}
          <a
            href="/Resume.pdf"
            download
            className="inline-block sm:hidden px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-sm"
          >
            DOWNLOAD PDF
          </a>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile: Show download link and smaller preview */}
          <div className="sm:hidden space-y-4">
            <div className="border border-white/20 p-4 hover:border-white transition-all duration-300">
              <iframe
                src="/Resume.pdf"
                className="w-full h-96"
                title="Resume PDF Preview"
              />
            </div>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-6 py-3 border border-white/30 text-white/70 hover:border-white hover:text-white transition-all duration-300 tracking-wider text-sm"
            >
              OPEN IN NEW TAB
            </a>
          </div>

          {/* Desktop: Full height iframe */}
          <div className="hidden sm:block border border-white/20 p-4 hover:border-white transition-all duration-300">
            <iframe
              src="/Resume.pdf"
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
