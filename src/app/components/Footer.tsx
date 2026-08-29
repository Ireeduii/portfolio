export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 relative z-10">
      <p>© {new Date().getFullYear()} Bat-Ireedui. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/Ireeduii"
          target="_blank"
          rel="noreferrer"
          className="hover:text-zinc-200 transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:ireedui@example.com"
          className="hover:text-zinc-200 transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
