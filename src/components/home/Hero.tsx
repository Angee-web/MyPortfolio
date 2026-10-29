import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { profile } from '../../content/profile'
import { ease } from '../../lib/motion'
import { ButtonLink } from '../ui/ButtonLink'
import { sectionNav } from '../layout/navigation'

/** Each line slides up from behind a mask. Reduced motion skips the slide and keeps the content visible. */
function MaskLine({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/** Abstract mark: nested boundaries, a quiet nod to micro-frontends. Decorative only. */
function BoundaryMark() {
  return (
    <motion.svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className="w-full max-w-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.35, ease }}
    >
      <rect x="40" y="40" width="320" height="320" rx="28" stroke="#2b2925" strokeWidth="1.25" />
      <rect x="80" y="80" width="240" height="240" rx="20" stroke="#3d3a33" strokeWidth="1.25" />
      <rect x="120" y="120" width="160" height="160" rx="14" stroke="#e6b87d" strokeOpacity="0.55" strokeDasharray="4 6" strokeWidth="1.25" />
      <path d="M40 200H360M200 40V360" stroke="#2b2925" strokeWidth="1" />
      <circle cx="200" cy="200" r="5" fill="#e6b87d" />
    </motion.svg>
  )
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="container-x">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          {profile.title}
        </motion.p>

        <h1 id="hero-title" className="display mt-6 text-[clamp(3.4rem,10.5vw,9.5rem)]">
          <MaskLine delay={0.05}>Adaeze Angelica</MaskLine>
          <MaskLine delay={0.16}>
            <span className="italic text-accent">Ugwumba</span>
          </MaskLine>
        </h1>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:items-end">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
          >
            <p className="max-w-xl text-xl leading-snug text-paper md:text-2xl">{profile.headline}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">{profile.intro}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#work">View selected work</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Get in touch
              </ButtonLink>
            </div>
          </motion.div>

          <div className="hidden md:col-span-4 md:col-start-9 md:block">
            <BoundaryMark />
          </div>
        </div>

        <motion.nav
          aria-label="On this page"
          className="mt-20 grid grid-cols-2 border-y border-line md:grid-cols-4 md:divide-x md:divide-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          {sectionNav.map((item, i) => (
            <Link
              key={item.id}
              to={`#${item.id}`}
              className="group flex items-center justify-between gap-4 py-5 pr-4 text-sm transition-colors duration-200 hover:text-paper md:px-6 md:first:pl-0"
            >
              <span className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-muted transition-colors group-hover:text-paper">{item.label}</span>
              </span>
              <span aria-hidden="true" className="text-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
                →
              </span>
            </Link>
          ))}
        </motion.nav>
      </div>
    </section>
  )
}
