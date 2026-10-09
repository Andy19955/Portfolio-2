export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-3 border-t border-slate-200 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <p>Built with React &amp; Next.js.</p>
      <p>&copy; {new Date().getFullYear()} Andreas Thune</p>
    </footer>
  );
}
