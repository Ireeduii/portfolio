export default function SkillsSection() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "GitHub",
    "Vercel",
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900/80 relative z-10"
    >
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-zinc-100">
        Tech Stack
      </h2>
      <p className="text-sm text-zinc-400 mb-10">
        Өдөр тутамдаа ашигладаг технологиуд:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-5 bg-zinc-900/30 backdrop-blur-md border border-zinc-800/80 rounded-2xl text-center font-medium text-sm text-zinc-300 hover:border-purple-500/50 hover:text-purple-300 transition-all shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
