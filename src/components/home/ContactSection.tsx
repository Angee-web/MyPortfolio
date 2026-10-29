import { profile } from '../../content/profile'
import { ButtonLink } from '../ui/ButtonLink'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function ContactSection() {
  const linkedIn = profile.links.find((link) => link.label === 'LinkedIn')
  const gitHub = profile.links.find((link) => link.label === 'GitHub')

  return (
    <section id="contact" aria-labelledby="contact-title" className="container-x pt-24 pb-32 md:pt-36 md:pb-44">
      <SectionHeading
        id="contact-title"
        index="04"
        label="Contact"
        title={
          <>
            Let’s talk about <span className="italic text-accent">frontend</span> work
          </>
        }
      />

      <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
        <p className="max-w-2xl text-xl leading-relaxed text-paper/90 md:col-span-7">
          If you are hiring for frontend engineering roles, or working on React architecture, micro-frontends, or
          reliable financial-product interfaces, I would like to hear from you.
        </p>

        <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
          {profile.email && <ButtonLink href={`mailto:${profile.email}`}>Email me</ButtonLink>}
          {linkedIn && (
            <ButtonLink href={linkedIn.href} variant={profile.email ? 'secondary' : 'primary'}>
              LinkedIn
            </ButtonLink>
          )}
          {gitHub && <ButtonLink href={gitHub.href} variant="secondary">GitHub</ButtonLink>}
        </div>
      </Reveal>
    </section>
  )
}
