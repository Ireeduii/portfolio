"use client";

import { ArrowUpRight } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  tech: string;
  summary: string;
  description: string;
  features: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({
  projects,
  onSelectProject,
}: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900/80 relative z-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 text-zinc-100">
            СОНГОМОЛ ТӨСЛҮҮД
          </h2>
        </div>
        <span className="text-zinc-500 text-sm">
          Дэлгэрэнгүй үзэхийн тулд төсөл дээр дарна уу
        </span>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group p-8 bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-purple-500/50 rounded-3xl transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 backdrop-blur-sm cursor-pointer shadow-lg"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-medium">
                  {project.category}
                </span>
                <span className="text-xs text-zinc-500">{project.tech}</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.summary}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-500 transition-all shadow-md">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
