import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software developer with a love for creating
              elegant solutions to complex problems. With expertise in modern
              web technologies, I enjoy building applications that make a
              difference in people's lives.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <p>
              I believe in writing clean, maintainable code and continuously
              learning to stay ahead of industry trends.
            </p>
          </div>
          <div className="about-image">
            <div
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "#e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9ca3af",
                fontSize: "1.5rem",
              }}
            >
              Profile Photo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
