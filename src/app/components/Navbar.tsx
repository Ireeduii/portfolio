import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-45 backdrop-blur-md bg-[#121214]/70 border-b border-zinc-800/40">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-zinc-800 border border-zinc-700/50 flex items-center justify-center font-bold text-purple-400 shadow-lg">
            B
          </span>
          <span className="font-bold tracking-wider text-sm uppercase text-zinc-300">
            Bat-Ireedui
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <a href="#about" className="hover:text-white transition-colors"></a>
          {/* <a href="#projects" className="hover:text-white transition-colors">
            төслүүд
          </a> */}
          {/* <a href="#skills" className="hover:text-white transition-colors">
            ур чадвар
          </a> */}
        </nav>

        <a
          href="mailto:ireedui@example.com"
          className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/60 rounded-full transition-all shadow-inner"
        >
          холбогдох
        </a>
      </div>
    </header>
  );
}
