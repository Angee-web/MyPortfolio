import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import type { Project } from '../../content/types'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'

interface ProjectCardProps {
  project: Project
  delay?: number
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const { featured } = project

  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to={`/work/${project.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2 p-7 transition-[border-color,transform] duration-500 ease-out hover:-translate-y-1 hover:border-accent/40 md:p-10 motion-reduce:hover:translate-y-0"
      >
        {/* Warm glow that fades in on hover. Purely decorative. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 size-80 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        />

        <div className="relative flex items-start justify-between gap-6">
          <div>
            <span className="font-mono text-sm text-accent">{project.number}</span>
            {project.period && <span className="eyebrow ml-4">{project.period}</span>}
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="size-6 shrink-0 text-muted transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent motion-reduce:transform-none"
          />
        </div>

        <h3 className={`display relative mt-12 ${featured ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl'}`}>
          {project.title}
        </h3>

        <p className="relative mt-6 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>

        {featured && (
          <ul className="relative mt-8 grid gap-2.5 md:grid-cols-2">
            {project.caseStudy.deliverables.slice(0, 4).map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-paper/85">
                <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="relative mt-auto pt-10">
          <p className="font-mono text-xs uppercase tracking-widest text-faint">{project.ownership}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ul>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-paper">
            Read case study
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
              →
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
