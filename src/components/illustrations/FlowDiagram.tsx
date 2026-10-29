import type { FlowStep } from '../../content/types'
import { Figure } from './Figure'

interface FlowDiagramProps {
  caption: string
  steps: FlowStep[]
}

// Tailwind only generates classes it can see in full, so each column count is spelled out.
const COLUMNS: Record<number, string> = {
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
}

/** A numbered sequence of steps. Horizontal on wide screens, vertical on narrow ones. */
export function FlowDiagram({ caption, steps }: FlowDiagramProps) {
  return (
    <Figure caption={caption}>
      <ol className={`grid gap-px overflow-hidden rounded-xl border border-line bg-line ${COLUMNS[steps.length] ?? 'md:grid-cols-4'}`}>
        {steps.map((step, i) => (
          <li key={step.label} className="flex flex-col gap-3 bg-ink-2 p-5">
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
            <p className="font-display text-2xl leading-none">{step.label}</p>
            <p className="text-sm leading-relaxed text-muted">{step.detail}</p>
          </li>
        ))}
      </ol>
    </Figure>
  )
}
