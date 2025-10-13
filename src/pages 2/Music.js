import React, { useState } from "react";

const Music = () => {
  const [showAllRepertoire, setShowAllRepertoire] = useState(false);

  const instruments = [
    { name: "Cello", years: "10+" },
    { name: "Ukulele", years: "5" },
    { name: "Piano", years: "2" },
    { name: "Guitar", years: "1" },
  ];

  const celloRepertoire = [
    "Bach - Cello Suite No. 1 - No. 3",
    "Elgar - Cello Concerto in E Minor",
    "Tchaikovsky - Variations on a Rococo Theme",
    "Shostakovich - Cello Concerto No. 1",
    "Crumb - Cello Sonata",
    "Faure - Elegie",
    "Bruch - Kol Nidrei",
    "Hadyn - Cello Concerto No. 1",
    "Beethoven - Cello Sonata No. 3",
    "Saint-Saens - The Swan",
    "Saint-Saens - Cello Concerto No. 1",
    "Brahms - Cello Sonata No. 1",
    "Kabalevsky - Cello Concerto No. 1",
    "Schumann - Fantasy Pieces",
    "Breval - Cello Concerto No. 1",
  ];

  const displayedRepertoire = showAllRepertoire
    ? [...celloRepertoire, "And more..."]
    : celloRepertoire.slice(0, 6);

  const youtubeVideos = [
    {
      title: "Placeholder",
      url: "https://youtube.com/watch?v=placeholder",
      description: "Placeholder",
    },
    {
      title: "Placeholder",
      url: "https://youtube.com/watch?v=placeholder",
      description: "Placeholder",
    },
  ];

  return (
    <section className="pt-32 pb-20 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            MUSIC
          </h1>
          <div className="w-24 h-px bg-white mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Years of Experience Section */}
          <div className="border border-white/20 p-8 hover:border-white transition-all duration-300">
            <h2 className="text-2xl font-light text-white mb-8 tracking-wider text-center">
              INSTRUMENTS & EXPERIENCE
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {instruments.map((instrument, index) => (
                <div key={index} className="text-center">
                  <div className="border border-white/20 p-6 hover:border-white transition-all duration-300">
                    <h3 className="text-xl font-light text-white mb-2 tracking-wider">
                      {instrument.name}
                    </h3>
                    <p className="text-3xl font-mono text-white/80">
                      {instrument.years}
                    </p>
                    <p className="text-sm text-white/60 tracking-wider mt-2">
                      YEARS
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cello Repertoire Section */}
          <div className="border border-white/20 p-8 hover:border-white transition-all duration-300">
            <h2 className="text-2xl font-light text-white mb-8 tracking-wider text-center">
              CELLO REPERTOIRE
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {displayedRepertoire.map((piece, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-4 hover:border-white/30 transition-all duration-300"
                >
                  <p className="text-white/80 tracking-wide">{piece}</p>
                </div>
              ))}
            </div>
            {celloRepertoire.length > 6 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllRepertoire(!showAllRepertoire)}
                  className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider"
                >
                  {showAllRepertoire ? "SHOW LESS" : "SHOW MORE"}
                </button>
              </div>
            )}
          </div>

          {/* YouTube Videos Section */}
          <div className="border border-white/20 p-8 hover:border-white transition-all duration-300">
            <h2 className="text-2xl font-light text-white mb-8 tracking-wider text-center">
              YOUTUBE VIDEOS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {youtubeVideos.map((video, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-6 hover:border-white/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-light text-white mb-3 tracking-wider">
                    {video.title}
                  </h3>
                  <p className="text-white/60 mb-4 tracking-wide text-sm">
                    {video.description}
                  </p>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-sm"
                  >
                    WATCH VIDEO
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Music Platforms Section */}
          <div className="border border-white/20 p-8 hover:border-white transition-all duration-300">
            <h2 className="text-2xl font-light text-white mb-8 tracking-wider text-center">
              MUSIC PLATFORMS
            </h2>
            <div className="text-center">
              <h3 className="text-lg font-light text-white mb-4 tracking-wider">
                YOUTUBE
              </h3>
              <p className="text-white/80 mb-6 tracking-wide text-sm">
                Watch my music videos and performances
              </p>
              <a
                href="https://www.youtube.com/@OliverTran-lk9uf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider"
              >
                WATCH ON YOUTUBE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
