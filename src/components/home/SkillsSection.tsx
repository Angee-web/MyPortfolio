import { skillGroups } from '../../content/experience'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="container-x py-24 md:py-36">
      <SectionHeading
        id="skills-title"
        index="03"
        label="Skills"
        title={
          <>
            Tools and <span className="italic text-accent">techniques</span>
          </>
        }
      >
        Grouped by what they are used for. This is a list of tools, not a proficiency scale.
      </SectionHeading>

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <li key={group.title}>
            <Reveal delay={i * 0.05} className="h-full rounded-2xl border border-line bg-ink-2 p-7 transition-colors duration-300 hover:border-muted">
              <h3 className="eyebrow mb-6">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
