import React from "react";

const Skills = () => {
  const skills = ["React", "JavaScript", "Python"];

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            SKILLS
          </h2>
          <div className="w-24 h-px bg-white mx-auto"></div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-white px-4 py-2 hover:bg-white hover:text-black transition-all duration-300 tracking-wider"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
