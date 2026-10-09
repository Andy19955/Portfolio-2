import Link from "next/link";
import { Project } from "../types/project";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.slug}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
      <div className={`flex aspect-video items-center justify-center bg-linear-to-br ${project.accent} p-3`}>
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/70 bg-white/25">
          <Image src={project.imageUrl} alt={project.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-fit object-center" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-orange-500">{project.focusArea}</p>
        <h2 className="text-2xl font-bold tracking-tighter text-slate-950">{project.title}</h2>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{project.description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
          Read more
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            <i className="fa fa-arrow-right"></i>
          </span>
        </span>
      </div>
    </Link>
  );
}
