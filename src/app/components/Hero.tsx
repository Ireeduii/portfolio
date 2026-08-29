"use client";

import { Sparkles, MapPin, Code2, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
      <div className="lg:col-span-7 flex flex-col items-start text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-purple-400 text-xs font-medium mb-6 shadow-xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" /> Full-Stack Developer
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 uppercase text-zinc-100 leading-[1.15]">
          Сайн байна уу? Би <br />
          <span className="bg-gradient-to-r from-purple-400 via-zinc-200 to-purple-300 bg-clip-text text-transparent">
            Бат-Ирээдүй
          </span>
        </h1>

        <p className="text-sm sm:text-base text-zinc-400 max-w-lg mb-8 font-light leading-relaxed">
          Орчин үеийн вэб технологиуд, Next.js, TypeScript болон 3D хөдөлгөөнт
          шийдлүүдийг ашиглан хэрэглэгчдийн хэрэгцээнд нийцсэн өвөрмөц туршлагыг
          бүтээдэг.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-xl hover:scale-105"
          >
            төслүүдийг үзэх →
          </a>
          <a
            href="#skills"
            className="px-7 py-3.5 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-medium text-xs uppercase tracking-wider rounded-full transition-all backdrop-blur-md"
          >
            ур чадвар
          </a>
        </div>
      </div>

      <div className="lg:col-span-5 w-full">
        <div className="p-6 sm:p-8 bg-zinc-950/60 backdrop-blur-xl border border-zinc-800/80 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                Статус
              </span>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Шинэ төсөлд нээлттэй
            </span>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 text-zinc-300">
              <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-purple-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Байршил</p>
                <p className="font-medium text-zinc-200">Улаанбаатар, Монгол</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-zinc-300">
              <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-purple-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Үндсэн стек</p>
                <p className="font-medium text-zinc-200">
                  Next.js • TypeScript • Tailwind
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-zinc-300">
              <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-purple-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Сонирхол</p>
                <p className="font-medium text-zinc-200">
                  3D Web UI & Full-Stack Apps
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
            <span>Холбогдох имэйл:</span>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              className="text-purple-400 hover:underline font-medium"
            >
              batireeduierkhemzaya7@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
