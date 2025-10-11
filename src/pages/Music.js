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
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            MUSIC
          </h1>
          <div className="w-16 sm:w-24 h-px bg-white mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
          {/* Years of Experience Section */}
          <div className="border border-white/20 p-6 sm:p-8 hover:border-white transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 tracking-wider text-center">
              INSTRUMENTS & EXPERIENCE
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {instruments.map((instrument, index) => (
                <div key={index} className="text-center">
                  <div className="border border-white/20 p-4 sm:p-6 hover:border-white transition-all duration-300">
                    <h3 className="text-base sm:text-xl font-light text-white mb-2 tracking-wider">
                      {instrument.name}
                    </h3>
                    <p className="text-2xl sm:text-3xl font-mono text-white/80">
                      {instrument.years}
                    </p>
                    <p className="text-xs sm:text-sm text-white/60 tracking-wider mt-2">
                      YEARS
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cello Repertoire Section */}
          <div className="border border-white/20 p-6 sm:p-8 hover:border-white transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 tracking-wider text-center">
              CELLO REPERTOIRE
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {displayedRepertoire.map((piece, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-3 sm:p-4 hover:border-white/30 transition-all duration-300"
                >
                  <p className="text-white/80 tracking-wide text-sm sm:text-base">
                    {piece}
                  </p>
                </div>
              ))}
            </div>
            {celloRepertoire.length > 6 && (
              <div className="text-center mt-6 sm:mt-8">
                <button
                  onClick={() => setShowAllRepertoire(!showAllRepertoire)}
                  className="px-6 sm:px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-sm sm:text-base"
                >
                  {showAllRepertoire ? "SHOW LESS" : "SHOW MORE"}
                </button>
              </div>
            )}
          </div>

          {/* YouTube Videos Section */}
          <div className="border border-white/20 p-6 sm:p-8 hover:border-white transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 tracking-wider text-center">
              YOUTUBE VIDEOS
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {youtubeVideos.map((video, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-5 sm:p-6 hover:border-white/30 transition-all duration-300"
                >
                  <h3 className="text-base sm:text-lg font-light text-white mb-3 tracking-wider">
                    {video.title}
                  </h3>
                  <p className="text-white/60 mb-4 tracking-wide text-xs sm:text-sm">
                    {video.description}
                  </p>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 sm:px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-xs sm:text-sm"
                  >
                    WATCH VIDEO
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Music Platforms Section */}
          <div className="border border-white/20 p-6 sm:p-8 hover:border-white transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 tracking-wider text-center">
              MUSIC PLATFORMS
            </h2>
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-light text-white mb-4 tracking-wider">
                YOUTUBE
              </h3>
              <p className="text-white/80 mb-6 tracking-wide text-xs sm:text-sm px-4">
                Watch my music videos and performances
              </p>
              <a
                href="https://www.youtube.com/@OliverTran-lk9uf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 sm:px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-sm sm:text-base"
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
