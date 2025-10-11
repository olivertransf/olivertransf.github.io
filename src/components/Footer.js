import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links - Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-3 sm:gap-4 lg:gap-6 w-full max-w-2xl lg:max-w-none justify-center">
            <a
              href="https://github.com/olivertransf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 border border-white/30 text-white/70 hover:border-white hover:text-white transition-all duration-300 tracking-wider text-center text-xs sm:text-sm"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/oliver-tran-713844370/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 border border-white/30 text-white/70 hover:border-white hover:text-white transition-all duration-300 tracking-wider text-center text-xs sm:text-sm"
            >
              LINKEDIN
            </a>
            <a
              href="https://www.instagram.com/olivertransf/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 border border-white/30 text-white/70 hover:border-white hover:text-white transition-all duration-300 tracking-wider text-center text-xs sm:text-sm"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.youtube.com/@OliverTran-lk9uf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 border border-white/30 text-white/70 hover:border-white hover:text-white transition-all duration-300 tracking-wider text-center text-xs sm:text-sm"
            >
              YOUTUBE
            </a>
            <a
              href="mailto:olivertransf@gmail.com"
              className="px-3 sm:px-4 py-2 border border-white/30 text-white/70 hover:border-white hover:text-white transition-all duration-300 tracking-wider text-center text-xs sm:text-sm col-span-2 sm:col-span-1"
            >
              EMAIL
            </a>
          </div>
          <div className="w-24 h-px bg-white/20"></div>
          <p className="text-white/60 text-xs sm:text-sm tracking-wider text-center">
            © 2024 OLIVER TRAN. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
