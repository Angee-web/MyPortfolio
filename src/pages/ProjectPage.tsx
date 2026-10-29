import { ArrowLeft, Check } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router'
import { FlowDiagram } from '../components/illustrations/FlowDiagram'
import { MfeDiagram } from '../components/illustrations/MfeDiagram'
import { Reveal } from '../components/ui/Reveal'
import { Tag } from '../components/ui/Tag'
import { getProjectBySlug, projects } from '../content/projects'
import { profile } from '../content/profile'
import type { Project } from '../content/types'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { NotFoundPage } from './NotFoundPage'

function CaseSection({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Reveal className="grid gap-6 md:grid-cols-12 md:gap-10">
      <h2 className="eyebrow md:col-span-3 md:pt-2">{label}</h2>
      <div className="text-lg leading-relaxed text-muted md:col-span-8 md:col-start-5">{children}</div>
    </Reveal>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Diagram({ project }: { project: Project }) {
  if (project.diagram.kind === 'mfe') return <MfeDiagram />
  return <FlowDiagram caption={project.diagram.caption} steps={project.diagram.steps} />
}

function CaseStudy({ project }: { project: Project }) {
  const { caseStudy } = project
  const related = project.related ? getProjectBySlug(project.related.slug) : undefined
  const index = projects.indexOf(project)
  const previous = projects[index - 1]
  const next = projects[index + 1]

  return (
    <article>
      <header className="container-x pt-32 pb-16 md:pt-44">
        <Link to="/#work" className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-paper">
          <ArrowLeft aria-hidden="true" className="size-3.5" />
          All work
        </Link>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <span className="font-mono text-sm text-accent">{project.number}</span>
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[0.68rem] uppercase tracking-widest text-muted">
            Professional work
          </span>
        </div>

        <h1 className="display mt-6 text-[clamp(3rem,8vw,7.5rem)]">{project.title}</h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted">{project.summary}</p>

        <dl className="mt-14 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
          <div>
            <dt className="eyebrow">My role</dt>
            <dd className="mt-3 text-paper">{project.ownership}</dd>
          </div>
          <div>
            <dt className="eyebrow">Context</dt>
            <dd className="mt-3 text-paper">{project.period ?? profile.name}</dd>
          </div>
          <div>
            <dt className="eyebrow">Stack</dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </header>

      <div className="container-x pb-24">
        <Reveal>
          <Diagram project={project} />
        </Reveal>

        <div className="mt-24 grid gap-20">
          <CaseSection label="Overview">
            <p>{caseStudy.overview}</p>
          </CaseSection>

          <CaseSection label="The challenge">
            <div className="space-y-5">
              {caseStudy.challenge.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </CaseSection>

          <CaseSection label="My role">
            <BulletList items={caseStudy.responsibilities} />
          </CaseSection>

          <CaseSection label="Technical approach">
            <BulletList items={caseStudy.approach} />
          </CaseSection>

          <CaseSection label="Key decisions">
            <ol className="space-y-10">
              {caseStudy.decisions.map((decision, i) => (
                <li key={decision.title} className="border-t border-line pt-6">
                  <p className="mb-3 font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="font-display text-3xl leading-tight text-paper">{decision.title}</h3>
                  <p className="mt-3">{decision.body}</p>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection label="Deliverables">
            <p className="mb-6 text-sm text-faint">
              Work I delivered on this project. I have not included measured impact figures.
            </p>
            <ul className="space-y-3">
              {caseStudy.deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection label="Technologies">
            <ul className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </ul>
          </CaseSection>

          <CaseSection label="What I learned">
            <p>{caseStudy.learned}</p>
          </CaseSection>
        </div>

        {related && project.related && (
          <Reveal className="mt-24 rounded-2xl border border-line bg-ink-2 p-8 md:p-10">
            <p className="eyebrow">Related case study</p>
            <p className="mt-4 max-w-2xl text-muted">{project.related.note}</p>
            <Link
              to={`/work/${related.slug}`}
              className="group mt-6 inline-flex items-center gap-3 font-display text-3xl transition-colors hover:text-accent"
            >
              {related.title}
              <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        )}
      </div>

      <nav aria-label="Case studies" className="border-t border-line">
        <ul className="container-x grid md:grid-cols-2">
          <li className="border-b border-line py-10 md:border-r md:border-b-0 md:pr-10">
            {previous && (
              <Link to={`/work/${previous.slug}`} className="group block">
                <span className="eyebrow">Previous</span>
                <span className="mt-3 block font-display text-3xl transition-colors group-hover:text-accent">
                  {previous.title}
                </span>
              </Link>
            )}
          </li>
          <li className="py-10 md:pl-10 md:text-right">
            {next && (
              <Link to={`/work/${next.slug}`} className="group block">
                <span className="eyebrow">Next</span>
                <span className="mt-3 block font-display text-3xl transition-colors group-hover:text-accent">
                  {next.title}
                </span>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </article>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  useDocumentTitle(project ? `${project.title} · Case study · ${profile.shortName}` : profile.name)

  if (!project) return <NotFoundPage />
  return <CaseStudy project={project} />
}
