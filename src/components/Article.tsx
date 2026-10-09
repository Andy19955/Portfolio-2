"use client";

import { useState } from "react";
import Link from "next/link";
import { Project } from "../types/project";
import Image from "next/image";

export function Article({ project }: { project: Project }) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <Link href="/" className="text-sm font-bold text-slate-500 transition-colors hover:text-orange-500">
        <i className="fa fa-arrow-left"></i> Back to all work
      </Link>
      <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-orange-500">{project.focusArea}</p>
          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-7xl">{project.title}</h1>
          <p className="mt-7 max-w-lg text-xl leading-8 text-slate-600">{project.description}</p>
          <button
            onClick={copyLink}
            className="mt-8 cursor-pointer inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-bold transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white"
            type="button">
            {copied ? "Link copied" : "Share project"}{" "}
            <span aria-hidden="true">
              <i className="fa fa-share"></i>
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className={`flex aspect-video items-center justify-center rounded-4xl bg-linear-to-br ${project.accent} p-3 shadow-sm`}>
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/70 bg-white/25">
              <Image src={project.imageUrl} alt={project.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-fit object-center" />
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">This is a screenshot of the {project.title} project.</p>
        </div>
      </div>

      <div className="mt-16 grid gap-12 border-t border-slate-200 pt-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col gap-4 text-sm font-bold">
          <a className="flex items-center justify-between border-b border-slate-200 pb-4 transition-colors hover:text-orange-500" href={project.liveUrl} target="_blank" rel="noreferrer">
            Visit live site{" "}
            <span aria-hidden="true">
              <i className="fa fa-external-link"></i>
            </span>
          </a>
          <a className="flex items-center justify-between border-b border-slate-200 pb-4 transition-colors hover:text-orange-500" href={project.githubReadmeUrl} target="_blank" rel="noreferrer">
            View GitHub README{" "}
            <span aria-hidden="true">
              <i className="fa fa-external-link"></i>
            </span>
          </a>
        </div>
        <article className="max-w-2xl space-y-6 text-lg leading-8 text-slate-600">
          <h2 className="text-3xl font-bold tracking-tighter text-slate-950">The story behind the project</h2>
          {project.story.split(/\n\s*\n/).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </div>
    </div>
  );
}
