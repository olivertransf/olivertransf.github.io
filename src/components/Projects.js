import React, { useEffect, useState } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetch more repos to ensure we get the most starred ones
        const response = await fetch(
          "https://api.github.com/users/olivertransf/repos?per_page=30"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();

        // Sort by stars in descending order (most stars first), then by name
        const sortedRepos = data
          .sort((a, b) => {
            // First sort by stars (descending)
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            // If stars are equal, sort by name (ascending)
            return a.name.localeCompare(b.name);
          })
          .slice(0, 9); // Take only the top 9

        setRepos(sortedRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      Java: "bg-orange-500",
      React: "bg-cyan-500",
      Vue: "bg-emerald-500",
      HTML: "bg-red-500",
      CSS: "bg-blue-400",
      PHP: "bg-purple-500",
      Ruby: "bg-red-600",
      Go: "bg-cyan-600",
      Rust: "bg-orange-600",
      "C++": "bg-blue-600",
      "C#": "bg-purple-600",
      Swift: "bg-orange-400",
      Kotlin: "bg-purple-400",
      Dart: "bg-blue-400",
      Shell: "bg-gray-500",
      Dockerfile: "bg-blue-500",
      Other: "bg-gray-400",
    };
    return colors[language] || colors["Other"];
  };

  const getProjectEmoji = (name, description) => {
    const nameLower = name.toLowerCase();

    if (nameLower.includes("portfolio") || nameLower.includes("website"))
      return "🌐";
    if (nameLower.includes("todo") || nameLower.includes("task")) return "📋";
    if (nameLower.includes("weather")) return "🌤️";
    if (nameLower.includes("ecommerce") || nameLower.includes("shop"))
      return "🛒";
    if (nameLower.includes("game")) return "🎮";
    if (nameLower.includes("chat") || nameLower.includes("messaging"))
      return "💬";
    if (nameLower.includes("blog")) return "📝";
    if (nameLower.includes("api")) return "🔌";
    if (nameLower.includes("mobile") || nameLower.includes("app")) return "📱";
    if (nameLower.includes("ai") || nameLower.includes("ml")) return "🤖";
    if (nameLower.includes("data") || nameLower.includes("analytics"))
      return "📊";
    if (nameLower.includes("crypto") || nameLower.includes("blockchain"))
      return "₿";
    if (nameLower.includes("music") || nameLower.includes("audio")) return "🎵";
    if (nameLower.includes("image") || nameLower.includes("photo")) return "📸";
    if (nameLower.includes("video") || nameLower.includes("stream"))
      return "🎥";
    if (nameLower.includes("social") || nameLower.includes("network"))
      return "👥";
    if (nameLower.includes("learning") || nameLower.includes("course"))
      return "📚";
    if (nameLower.includes("finance") || nameLower.includes("money"))
      return "💰";
    if (nameLower.includes("health") || nameLower.includes("fitness"))
      return "💪";
    if (nameLower.includes("travel") || nameLower.includes("map")) return "🗺️";

    return "💻";
  };

  if (loading) {
    return (
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-black to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
              MY PROJECTS
            </h2>
            <div className="w-24 h-px bg-white mx-auto"></div>
            <div className="w-24 h-px bg-white mx-auto"></div>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            <span className="ml-4 text-lg text-white/80">
              Loading projects...
            </span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-black to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
              MY PROJECTS
            </h2>
            <div className="w-24 h-px bg-white mx-auto"></div>
            <div className="w-24 h-px bg-white mx-auto"></div>
          </div>
          <div className="text-center py-20">
            <div className="text-red-500 text-lg mb-4">
              ❌ Error loading projects
            </div>
            <p className="text-white/80">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-black to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            MY PROJECTS
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Here are some of my recent projects from GitHub. Each one represents
            a learning journey and a step forward in my development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="group border border-white/20 rounded-2xl p-6 shadow-xl border border-slate-700/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">
                    {getProjectEmoji(repo.name, repo.description)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-600 transition-colors duration-300">
                      {repo.name
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </h3>
                    {repo.language && (
                      <div className="flex items-center space-x-2 mt-1">
                        <div
                          className={`w-3 h-3 rounded-full ${getLanguageColor(
                            repo.language
                          )}`}
                        ></div>
                        <span className="text-sm text-white/80">
                          {repo.language}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-white/60">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">{repo.stargazers_count}</span>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-white/80 mb-4 line-clamp-3">
                {repo.description ||
                  "No description available for this project."}
              </p>

              {/* Project Stats */}
              <div className="flex items-center justify-between text-sm text-white/60 mb-6">
                <div className="flex items-center space-x-4">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                </div>
                <span className="text-xs">
                  Updated {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>

              {/* Project Links */}
              <div className="flex space-x-3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-white text-white text-center py-2 px-4 font-light tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Code
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-white/30 text-white/70 text-center py-2 px-4 font-light tracking-wider hover:border-white hover:text-white transition-all duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/olivertransf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-black to-black text-white font-semibold rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
