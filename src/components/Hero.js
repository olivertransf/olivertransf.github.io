import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated grid pattern with movement */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Random appearing/disappearing shapes */}
      {/* Shapes positioned only in outer edges and corners */}
      <div
        className="absolute top-4 left-4 w-6 h-6 bg-white/25 rotate-45 animate-fadeInOut"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-4 right-4 w-4 h-4 bg-white/35 rounded-full animate-fadeInOut"
        style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
      ></div>
      <div
        className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white/30 rotate-45 animate-fadeInOut"
        style={{ animationDelay: "1.2s", animationDuration: "3.5s" }}
      ></div>
      <div
        className="absolute bottom-4 right-4 w-4 h-4 bg-white/30 rounded-full animate-fadeInOut"
        style={{ animationDelay: "0.3s", animationDuration: "2.8s" }}
      ></div>
      <div
        className="absolute top-8 left-1/4 w-6 h-6 bg-white/20 rotate-45 animate-fadeInOut"
        style={{ animationDelay: "0.8s", animationDuration: "3.2s" }}
      ></div>
      <div
        className="absolute top-8 right-1/4 w-3 h-3 bg-white/40 rounded-full animate-fadeInOut"
        style={{ animationDelay: "1.5s", animationDuration: "2.7s" }}
      ></div>
      <div
        className="absolute top-1/4 left-8 w-4 h-4 border border-white/25 rotate-45 animate-fadeInOut"
        style={{ animationDelay: "0.6s", animationDuration: "3.4s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-8 w-3 h-3 bg-white/35 rounded-full animate-fadeInOut"
        style={{ animationDelay: "1.1s", animationDuration: "2.6s" }}
      ></div>
      <div
        className="absolute top-12 right-8 w-6 h-6 bg-white/15 rotate-45 animate-fadeInOut"
        style={{ animationDelay: "0.2s", animationDuration: "3.8s" }}
      ></div>
      <div
        className="absolute bottom-12 left-8 w-4 h-4 bg-white/25 rounded-full animate-fadeInOut"
        style={{ animationDelay: "0.9s", animationDuration: "3.1s" }}
      ></div>
      <div
        className="absolute top-16 left-16 w-3 h-3 bg-white/30 rotate-45 animate-fadeInOut"
        style={{ animationDelay: "1.8s", animationDuration: "2.9s" }}
      ></div>
      <div
        className="absolute bottom-16 right-16 w-4 h-4 bg-white/20 rounded-full animate-fadeInOut"
        style={{ animationDelay: "0.7s", animationDuration: "3.6s" }}
      ></div>
      <div
        className="absolute top-20 right-1/3 w-6 h-6 border border-white/25 rotate-45 animate-fadeInOut"
        style={{ animationDelay: "1.3s", animationDuration: "2.4s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-3 h-3 bg-white/35 rounded-full animate-fadeInOut"
        style={{ animationDelay: "0.4s", animationDuration: "3.3s" }}
      ></div>
      <div
        className="absolute top-1/3 left-12 w-4 h-4 bg-white/15 rotate-45 animate-fadeInOut"
        style={{ animationDelay: "1.0s", animationDuration: "2.8s" }}
      ></div>

      {/* Dynamic accent lines with glow effect */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-lg shadow-white/20"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-lg shadow-white/20"></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/40 to-transparent shadow-lg shadow-white/20"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/40 to-transparent shadow-lg shadow-white/20"></div>

      {/* Animated corner brackets */}
      <div className="absolute top-16 left-16 w-8 h-8 border-l-2 border-t-2 border-white/30 animate-pulse"></div>
      <div className="absolute top-16 right-16 w-8 h-8 border-r-2 border-t-2 border-white/30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 left-16 w-8 h-8 border-l-2 border-b-2 border-white/30 animate-pulse delay-500"></div>
      <div className="absolute bottom-16 right-16 w-8 h-8 border-r-2 border-b-2 border-white/30 animate-pulse delay-1500"></div>

      {/* Subtle radial gradient overlay with animation */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 animate-pulse"></div>

      <div className="text-center z-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block px-3 sm:px-4 py-2 border border-white/30 mb-6 sm:mb-8">
            <span className="text-white/70 text-xs sm:text-sm tracking-wider">
              PORTFOLIO 2024
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 sm:mb-8 leading-none tracking-tight">
          <span className="block">OLIVER</span>
          <span className="block text-white/60">TRAN</span>
        </h1>

        <div className="w-16 sm:w-24 h-px bg-white mx-auto mb-6 sm:mb-8"></div>

        <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
          SOFTWARE ENGINEER
          <br />
          CELLIST
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-sm sm:text-base"
          >
            CONTACT ME
          </Link>

          <Link
            to="/projects"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-white/30 text-white/70 hover:border-white hover:text-white transition-all duration-300 tracking-wider text-sm sm:text-base"
          >
            VIEW WORK
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
          <div className="w-px h-12 bg-white/30 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
