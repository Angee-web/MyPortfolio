import { projects } from '../../content/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from '../ui/SectionHeading'

export function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-title" className="container-x py-24 md:py-36">
      <SectionHeading
        id="work-title"
        index="01"
        label="Work"
        title={
          <>
            Selected <span className="italic text-accent">work</span>
          </>
        }
      >
        Five case studies from professional work. Each covers the problem, my part in it, and the decisions behind it.
        The diagrams are conceptual illustrations, not product screenshots.
      </SectionHeading>

      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.slug} className={project.featured ? 'md:col-span-2' : undefined}>
            <ProjectCard project={project} delay={i * 0.06} />
          </li>
        ))}
      </ul>
    </section>
  )
}
