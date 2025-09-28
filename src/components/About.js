import React from "react";

const About = () => {
  const skills = [
    "Cello",
    "Python",
    "Playwright",
    "Postgres",
    "Swift",
    "C#",
    "Unity",
    "Pytorch",
    "MuseScore",
    "Logic Pro X",
    "Soccer",
    "React",
    "TypeScript",
    "Ukulele",
    "Guitar",
    "Piano",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-black text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            ABOUT ME
          </h2>
          <div className="w-24 h-px bg-white mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="border border-white/20 p-8 hover:border-white transition-all duration-300">
              <p className="text-lg text-white/80 leading-relaxed mb-6 tracking-wide">
                Hi, I'm Oliver! I'm someone who loves exploring different ways
                to learn, create, and grow. I spend a lot of time coding—whether
                it's building projects in Unity, experimenting with Python, or
                just messing around with ideas until something cool takes shape.
                I enjoy challenges, but I also like keeping things fun and
                finding creative ways to solve problems.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-6 tracking-wide">
                Outside of tech, music is a big part of my life. I've been
                playing the cello for over ten years, and it's taught me a lot
                about patience, practice, and expression. Between music and
                coding, I've found a balance between logic and creativity, and
                that mix really shapes who I am. No matter what I'm working on,
                I try to bring curiosity, energy, and a little bit of myself
                into it.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border-2 border-white flex items-center justify-center text-white text-xl font-light">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 font-mono">
                    [DEV]
                  </div>
                  <div className="text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider">
                    PROFILE PHOTO
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border border-white bg-black flex items-center justify-center text-white text-xs font-mono">
                *
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border border-white bg-black flex items-center justify-center text-white text-xs font-mono">
                &lt;/&gt;
              </div>
            </div>
          </div>
        </div>

        {/* Skills section moved below everything */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-white mb-2 tracking-wider">
              SKILLS
            </h3>
            <div className="w-16 h-px bg-white mx-auto"></div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border border-white px-3 py-2 hover:bg-white hover:text-black transition-all duration-300 tracking-wider"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
