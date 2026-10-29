import { ArrowDown, ArrowRight } from 'lucide-react'
import { Figure } from './Figure'

const HOST_PARTS = ['Routing', 'Feature-flagged access', 'Environment config']
const MODULE_PARTS = ['Dashboard screens', 'Reusable components', 'Own UI state']

function Part({ children }: { children: string }) {
  return <li className="rounded-lg border border-line bg-ink px-3 py-2.5 text-sm text-paper/90">{children}</li>
}

/**
 * Conceptual view of the host/module boundary: the Angular application owns routing and access,
 * the React micro-frontend owns its screens and state, and a contract sits between them.
 */
export function MfeDiagram() {
  return (
    <Figure caption="Conceptual illustration of the host and micro-frontend boundary. Not a product screenshot.">
      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_minmax(7rem,auto)_1fr] md:gap-6">
        <section aria-labelledby="mfe-host" className="rounded-xl border border-line bg-ink-3/60 p-5">
          <p id="mfe-host" className="eyebrow mb-1">
            Host application
          </p>
          <p className="mb-4 font-display text-2xl">Angular</p>
          <ul className="grid gap-2">
            {HOST_PARTS.map((part) => (
              <Part key={part}>{part}</Part>
            ))}
          </ul>
        </section>

        <div className="flex flex-col items-center justify-center gap-2 text-center" aria-hidden="true">
          <ArrowRight className="hidden size-5 text-accent md:block" />
          <ArrowDown className="size-5 text-accent md:hidden" />
          <span className="font-mono text-[0.68rem] uppercase leading-snug tracking-widest text-accent">
            Integration contract
          </span>
        </div>

        <section
          aria-labelledby="mfe-module"
          className="rounded-xl border border-accent/30 bg-linear-to-br from-accent/[0.08] to-transparent p-5"
        >
          <p id="mfe-module" className="eyebrow mb-1 text-accent">
            Micro-frontend
          </p>
          <p className="mb-4 font-display text-2xl">React</p>
          <ul className="grid gap-2">
            {MODULE_PARTS.map((part) => (
              <Part key={part}>{part}</Part>
            ))}
          </ul>
        </section>
      </div>
    </Figure>
  )
}
