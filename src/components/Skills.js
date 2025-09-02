import React from "react";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "HTML/CSS", icon: "🌐" },
    { name: "Git", icon: "📚" },
    { name: "SQL", icon: "🗄️" },
    { name: "AWS", icon: "☁️" },
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
