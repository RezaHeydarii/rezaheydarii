const TerminalHeader = () => {
  const text = "> Software Engineer";

  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-r border-primary/20"></div>
          ))}
        </div>
      </div>

      <div className="terminal-border rounded-lg p-8 md:p-12 bg-card/50 backdrop-blur-sm max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <div className="text-sm text-muted-foreground mb-2">
            Last login: {new Date().toLocaleDateString()}
          </div>
        </div>

        <div className="space-y-4 min-w-auto lg:min-w-4xl">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold terminal-glow animate-typing w-max whitespace-nowrap overflow-hidden">
            {text}
            <span className="typing-cursor" aria-hidden="true"></span>
          </h1>

          <div className="text-sm sm:text-lg md:text-xl text-muted-foreground animate-fade-in">
            <p className="mb-2">{">"} 6+ years of experience</p>
            <p className="mb-2">{">"} React • Next.js • React Native</p>
            <p className="mb-2">{">"} Node.js • NestJS • AI Engineering</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#skills"
              className="terminal-border px-6 py-3 bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="View skills and projects"
            >
              View Projects
            </a>
            <a
              href="https://t.me/ReZaHeydari_dev"
              className="terminal-border px-6 py-3 hover:bg-card transition-colors"
              aria-label="Contact information"
              target="_black"
              rel="no-opener noreferrer"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TerminalHeader;
