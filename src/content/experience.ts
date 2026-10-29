import type { Experience, SkillGroup } from './types'

export const experience: Experience[] = [
  {
    role: 'Frontend Engineer',
    organisation: 'Moniepoint',
    period: 'May 2025 – Nov 2026',
    kind: 'frontend',
    summary:
      'React v2 business dashboard and micro-frontend integration, the Angular Frontoffice work that hosts it, the design-system migration, and KYC and onboarding flows.',
  },
  {
    role: 'Software Developer Intern',
    organisation: 'GOMYCODE',
    period: 'Apr 2024 – Oct 2024',
    kind: 'earlier',
  },
  {
    role: 'HR Manager',
    organisation: 'Modern Lottery Nigeria',
    period: 'May 2023 – Aug 2023',
    kind: 'earlier',
  },
  {
    role: 'Sales Representative (NYSC)',
    organisation: 'June Pharmaceuticals',
    period: 'Jan 2022 – May 2023',
    kind: 'earlier',
  },
  {
    role: 'Biovaccine Laboratory Intern',
    organisation: 'NAFDAC',
    period: '2019 · 3 months',
    kind: 'earlier',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks & UI',
    items: ['React', 'Next.js', 'Angular', 'Redux', 'Tailwind CSS'],
  },
  {
    title: 'Data & integration',
    items: ['REST API integration', 'TanStack Query', 'Axios', 'Zod', 'API response validation'],
  },
  {
    title: 'Architecture',
    items: ['Micro-frontends', 'Module Federation', 'Nx monorepos', 'Feature flags'],
  },
  {
    title: 'Testing',
    items: ['Jest', 'Vitest', 'React Testing Library', 'Playwright'],
  },
  {
    title: 'Observability & analytics',
    items: ['New Relic', 'Mixpanel', 'Analytics instrumentation', 'Shared telemetry'],
  },
  {
    title: 'Reliability',
    items: ['Debugging', 'Error handling', 'Asynchronous states', 'Edge-case handling'],
  },
]
