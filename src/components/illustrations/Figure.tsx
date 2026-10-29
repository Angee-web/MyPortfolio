import type { ReactNode } from 'react'

interface FigureProps {
  caption: string
  children: ReactNode
}

/** Wraps every illustration so it is always labelled as conceptual, never as a product screenshot. */
export function Figure({ caption, children }: FigureProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-ink-2">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="eyebrow">Illustration</span>
        <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-widest text-faint">
          Conceptual
        </span>
      </div>
      <div className="p-6 md:p-10">{children}</div>
      <figcaption className="border-t border-line px-5 py-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  )
}
