import MediaImage from "next/image";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      <section id="about" className="scroll-mt-8 border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-24">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-4xl border border-white/70 shadow-sm">
            <MediaImage src="/images/portrait.webp" alt="Profile picture of Andreas Thune" fill className="object-cover" />
          </div>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">Hello, I&apos;m Andreas</p>
            <h1 className="mt-4 max-w-xl text-2xl font-black leading-[0.95] tracking-[-0.07em] text-slate-950 sm:text-4xl">Frontend development student.</h1>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>I&apos;m a frontend developer student who enjoys turning early ideas into thoughtful, useful digital experiences.</p>
              <p>I&apos;m like to learn through hands-on projects and exploring how thoughtful design and clean code can work together to create websites that are both useful and enjoyable to use.</p>
            </div>
            <a href="#work" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-500">
              See my work
              <span aria-hidden="true">
                <i className="fa fa-arrow-down"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
      <section id="work" className="mx-auto max-w-6xl scroll-mt-8 px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Selected work</p>
          <h2 className="text-3xl font-bold tracking-tighter text-slate-950">A few things I&apos;ve made</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
