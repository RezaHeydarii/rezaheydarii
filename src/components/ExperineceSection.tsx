const experiences = [
  {
    title: "Software Engineer",
    company: "OneCliq, Canada",
    period: "September 2022 - Present",
    description:
      "Led end-to-end front-end architecture for AI-driven products including Bite-Sizer and Customer Insight Engine. Built CIE tool that reduced marketing research time from 3-4 weeks to 1 hour. Promoted from contractor to full-time in December 2023.",
    technologies: ["React", "Next.js", "TypeScript", "AI Engineering"],
    highlights: [
      "Started as front-end contractor, promoted to full-time in December 2023",
      "Bite-Sizer featured on Google Startups and Product Hunt",
      "Built CIE tool that reduced marketing research time from 3-4 weeks to just 1 hour.",
    ],
  },
  {
    title: "Front-End Engineer",
    company: "RDSysCo, Iran",
    period: "September 2022 - December 2023",
    description:
      "Mentored 7 developers in React Native and TypeScript. Built custom CLI in Node.js for monorepo workflow selection across micro-frontend projects.",
    technologies: ["React Native", "TypeScript", "Node.js", "CLI Development"],
    highlights: ["Mentored 7 developers", "Built custom CLI tools"],
  },
  {
    title: "Front-End & React Native Developer",
    company: "Vitraco-IR, Iran",
    period: "October 2021 - December 2022",
    description:
      "Delivered two PWA logistics apps serving 20,000+ users. Developed both web and mobile applications ensuring responsiveness and cross-platform compatibility.",
    technologies: ["React", "React Native", "PWA", "Logistics"],
    highlights: ["20,000+ active users", "Cross-platform compatibility"],
  },
  {
    title: "React Native Developer",
    company: "FastPong Corp, South Korea",
    period: "March 2021 - September 2021",
    description:
      "Built mobile UI for smart ping-pong training app on Android & iOS with 500+ installs. Ensured seamless functionality across both platforms.",
    technologies: ["React Native", "Android", "iOS", "Mobile UI"],
    highlights: ["500+ app installs", "Cross-platform mobile development"],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-secondary/20"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="experience-heading"
            className="text-3xl md:text-4xl font-bold terminal-glow mb-4"
          >
            {">"} Experience
          </h2>
          <p className="text-muted-foreground">
            Professional journey in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="terminal-border rounded-lg p-6 bg-card/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary terminal-glow">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-foreground">{exp.company}</p>
                </div>
                <time className="text-sm text-muted-foreground terminal-border px-3 py-1 rounded w-fit">
                  {exp.period}
                </time>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              {exp.highlights && (
                <ul className="mb-4">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-primary"
                    >
                      <span aria-hidden="true">{">"}</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-primary/20 text-primary rounded terminal-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
