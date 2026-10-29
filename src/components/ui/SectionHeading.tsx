import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  index: string
  label: string
  title: ReactNode
  id: string
  children?: ReactNode
}

export function SectionHeading({ index, label, title, id, children }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-3">
        <p className="eyebrow">
          <span className="text-accent">{index}</span> / {label}
        </p>
      </div>
      <div className="md:col-span-9">
        <h2 id={id} className="display text-[clamp(2.5rem,6vw,5rem)]">
          {title}
        </h2>
        {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{children}</div>}
      </div>
    </Reveal>
  )
}
