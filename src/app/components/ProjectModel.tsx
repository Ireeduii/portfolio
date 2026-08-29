"use client";

import { X, Layers, CheckCircle2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#18181b] border border-zinc-700/60 w-full max-w-2xl rounded-3xl p-6 sm:p-8 relative shadow-2xl text-zinc-100">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium">
            {project.category}
          </span>
          <span className="text-xs text-zinc-400">{project.tech}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
          {project.title}
        </h3>

        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 flex items-center gap-2">
            <Layers className="w-4 h-4" /> Гол онцлогууд
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {project.features.map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-zinc-300 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80"
              >
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-medium transition-colors"
          >
            Хаах
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium transition-colors flex items-center gap-2 border border-zinc-700"
          >
            <FaGithub className="w-4 h-4" /> Код харах
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors shadow-lg shadow-purple-600/30 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" /> Веб сайт үзэх
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
