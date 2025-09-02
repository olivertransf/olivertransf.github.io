import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      image: "🛒",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that displays current conditions and forecasts using OpenWeatherMap API with a clean, responsive design.",
      image: "🌤️",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span style={{ fontSize: "3rem" }}>{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.liveLink}>Live Demo</a>
                  <a href={project.githubLink}>GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
