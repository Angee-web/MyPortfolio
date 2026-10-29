export interface FlowStep {
  label: string
  detail: string
}

/** Which illustration sits at the top of a case study. All are conceptual, never product screenshots. */
export type ProjectDiagram =
  | { kind: 'mfe' }
  | { kind: 'flow'; caption: string; steps: FlowStep[] }

export interface Decision {
  title: string
  body: string
}

export interface CaseStudy {
  overview: string
  challenge: string[]
  responsibilities: string[]
  approach: string[]
  decisions: Decision[]
  deliverables: string[]
  technologies: string[]
  learned: string
}

export interface Project {
  slug: string
  /** Display order on the home page and in the case-study pager. */
  number: string
  title: string
  summary: string
  /** Short description of how the work was owned, e.g. "Primary developer, one of two". */
  ownership: string
  /** Shown on the card only; keep under ~8 words. */
  period?: string
  tags: string[]
  featured: boolean
  /** Optional cross-reference to a related case study. */
  related?: { slug: string; note: string }
  diagram: ProjectDiagram
  caseStudy: CaseStudy
}

export interface Experience {
  role: string
  organisation: string
  period: string
  /** Frontend roles get full detail on the About section; earlier roles stay compact. */
  kind: 'frontend' | 'earlier'
  summary?: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Profile {
  name: string
  shortName: string
  title: string
  headline: string
  intro: string
  about: string[]
  /** Leave empty until your address is ready; the mailto link is hidden while this is ''. */
  email: string
  links: { label: string; href: string }[]
  /** Set `available: true` once the PDF is in public/cv/. The CV link stays hidden until then. */
  cv: { href: string; available: boolean }
}
