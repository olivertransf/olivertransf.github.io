import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/music", label: "Music" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full h-16 flex items-center justify-center">
        {/* Desktop Navigation */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 tracking-wider ${
                location.pathname === item.href
                  ? "text-white"
                  : isScrolled
                  ? "text-white/70 hover:text-white"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                  location.pathname === item.href
                    ? "w-full"
                    : "w-0 hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
