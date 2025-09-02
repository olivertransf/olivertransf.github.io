import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐦
          </a>
          <a href="mailto:oliver@example.com">✉️</a>
        </div>
        <p>&copy; 2024 Oliver Tran. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
