import { experience } from '../../content/experience'
import { profile } from '../../content/profile'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  const frontendRoles = experience.filter((role) => role.kind === 'frontend')
  const earlierRoles = experience.filter((role) => role.kind === 'earlier')

  return (
    <section id="about" aria-labelledby="about-title" className="container-x py-24 md:py-36">
      <SectionHeading
        id="about-title"
        index="02"
        label="About"
        title={
          <>
            Engineering that <span className="italic text-accent">holds up</span> in use
          </>
        }
      />

      <div className="grid gap-16 md:grid-cols-12 md:gap-10">
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted md:col-span-6 md:col-start-1">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </Reveal>

        <div className="md:col-span-5 md:col-start-8">
          <Reveal>
            <h3 className="eyebrow mb-8">Experience</h3>
            <ol className="space-y-10">
              {frontendRoles.map((role) => (
                <li key={`${role.organisation}-${role.role}`} className="border-t border-line pt-6">
                  <p className="font-display text-3xl leading-tight">{role.role}</p>
                  <p className="mt-2 text-paper/90">{role.organisation}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-faint">{role.period}</p>
                  {role.summary && <p className="mt-4 text-sm leading-relaxed text-muted">{role.summary}</p>}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <h3 className="eyebrow mb-4">Earlier experience</h3>
            <ul className="divide-y divide-line border-y border-line">
              {earlierRoles.map((role) => (
                <li key={`${role.organisation}-${role.role}`} className="flex flex-col gap-1 py-4 text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span>
                    <span className="text-paper">{role.role}</span>
                    <span className="text-muted"> · {role.organisation}</span>
                  </span>
                  <span className="shrink-0 font-mono text-xs text-faint">{role.period}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
