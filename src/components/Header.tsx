import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
      <Link href="/" className="text-lg font-black tracking-[-0.04em] text-slate-950">
        Andreas Thune<span className="text-orange-500">.</span>
      </Link>
      <nav className="flex items-center gap-5 text-sm font-semibold text-slate-600 sm:gap-8">
        <Link className="transition-colors hover:text-slate-950" href="/#work">
          Work
        </Link>
        <Link className="transition-colors hover:text-slate-950" href="/#about">
          About
        </Link>
      </nav>
    </header>
  );
}
