import type { Project } from './types'

/*
 * Case-study content. Professional work only.
 * Do not add proprietary code, internal URLs, API payloads, feature-flag names,
 * customer data, or internal implementation details.
 */
export const projects: Project[] = [
  {
    slug: 'react-v2-business-dashboard',
    number: '01',
    title: 'React v2 Business Dashboard',
    summary:
      'A React-based version of the business-banking dashboard, built as a micro-frontend and integrated into an established Angular application.',
    ownership: 'One of two primary developers on the user dashboard',
    period: 'Moniepoint',
    tags: ['React', 'TypeScript', 'Micro-frontends', 'Angular integration', 'Design components'],
    featured: true,
    related: {
      slug: 'angular-frontoffice-integration',
      note: 'The host-side routing, feature flags and MFE configuration are covered in the Angular integration case study.',
    },
    diagram: { kind: 'mfe' },
    caseStudy: {
      overview:
        'Moniepoint rebuilt its web application dashboard for business banking as a React v2 version. I was one of the two primary developers on the user dashboard. I set up its micro-frontend architecture and integrated the React application into the existing Angular product.',
      challenge: [
        'The product already ran on an established Angular application. A full rewrite would have put every existing screen at risk at once, so the new dashboard had to load inside the current product without changing how the rest of the application worked.',
        'The integration boundary had to be explicit. The host application owned routing, feature-flagged access and environment-specific configuration. The dashboard owned its screens, components and state.',
        'Why the micro-frontend boundary mattered: it let a newer React codebase ship alongside older Angular code, with each side released and configured on its own terms.',
      ],
      responsibilities: [
        'Set up the micro-frontend architecture for the React dashboard.',
        'Integrated the React dashboard micro-frontend into the existing Angular application.',
        'Built dashboard UI and reusable components, including dashboard banners and KYC-level guidance.',
        'Worked alongside the second primary developer on the user dashboard.',
      ],
      approach: [
        'Kept routing and dashboard access decisions in the host application, so the dashboard could be mounted without carrying the rollout rules itself.',
        'Used environment-specific micro-frontend configuration so the same application could be pointed at different environments without code changes.',
        'Built dashboard components to be reusable across dashboard surfaces, rather than tying each one to a single page.',
      ],
      decisions: [
        {
          title: 'Micro-frontend boundary instead of a rewrite',
          body: 'The Angular application stayed in production while new dashboard work moved into React behind a defined boundary. The trade-off is two frameworks in one product and an integration contract that both sides have to keep stable.',
        },
        {
          title: 'Feature flags evaluated by the host',
          body: 'Access decisions are made where the routes are defined. This keeps the dashboard simpler and makes it clear which side is responsible when access behaves unexpectedly.',
        },
      ],
      deliverables: [
        'Micro-frontend architecture for the React dashboard.',
        'Integration of the React dashboard into the Angular application.',
        'Dashboard banner and KYC-level guidance components.',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Micro-frontends',
        'Angular',
        'Feature flags',
        'Environment-specific configuration',
      ],
      learned:
        'Integration work is mostly about contracts: what each side owns, how it is configured, and how failures are isolated. I now treat the boundary between applications as a product surface that other engineers will depend on.',
    },
  },
  {
    slug: 'design-system-migration',
    number: '02',
    title: 'Design-system migration',
    summary:
      'Contributing to the move of a production web application from one component library to another while keeping the interface consistent.',
    ownership: 'Contributor, as part of the Moniepoint Web team',
    period: 'Moniepoint Web',
    tags: ['React', 'TypeScript', 'Component libraries', 'Design systems', 'Accessibility'],
    featured: false,
    diagram: {
      kind: 'flow',
      caption: 'Conceptual illustration of a component-by-component migration. Not a product screenshot.',
      steps: [
        { label: 'Inventory', detail: 'Map which components each screen uses.' },
        { label: 'Replace', detail: 'Swap components one at a time behind the same props.' },
        { label: 'Check', detail: 'Compare behaviour, states and accessibility.' },
        { label: 'Ship', detail: 'Release in slices so the app stays releasable.' },
      ],
    },
    caseStudy: {
      overview:
        'I contributed to migrating Moniepoint Web from its existing design library to a new one. The work was spread across the application rather than contained in one feature, so the main focus was on keeping the product consistent while components changed underneath it.',
      challenge: [
        'A design-library migration touches almost every screen. The engineering problem is less about any single component and more about keeping the product coherent while components are replaced piece by piece.',
        'Components that look alike can differ in props, theming and behaviour. A visual match is not enough; states, keyboard handling and accessibility need to be checked as well.',
      ],
      responsibilities: [
        'Contributed to updating UI components to the new library.',
        'Worked on keeping migrated components consistent with the rest of the application during the transition.',
      ],
      approach: [
        'Migrated in small slices so each change could be reviewed and released without waiting for the whole migration.',
        'Compared migrated components against the behaviour they replaced, not just their appearance.',
      ],
      decisions: [
        {
          title: 'Incremental replacement over a big-bang switch',
          body: 'Mixing old and new components temporarily is more work to reason about, but it keeps every release shippable and makes regressions easier to isolate.',
        },
      ],
      deliverables: [
        'Migrated UI components in Moniepoint Web as part of the team migration.',
      ],
      technologies: ['React', 'TypeScript', 'Component library migration', 'Accessibility checks'],
      learned:
        'A design system is a set of contracts between design and engineering. Migrating one exposes every place where those contracts were implicit.',
    },
  },
  {
    slug: 'angular-frontoffice-integration',
    number: '03',
    title: 'Angular Frontoffice and dashboard integration',
    summary:
      'Adding React functionality to a legacy Angular application without disturbing its established architecture.',
    ownership: 'Engineer on the Angular Frontoffice application',
    period: 'Moniepoint',
    tags: ['Angular', 'Routing', 'Feature flags', 'Analytics', 'Micro-frontends'],
    featured: false,
    related: {
      slug: 'react-v2-business-dashboard',
      note: 'This work is the host side of the React v2 Business Dashboard. Read both for the full integration.',
    },
    diagram: { kind: 'mfe' },
    caseStudy: {
      overview:
        'My work was not limited to React. I also worked in the legacy Angular-based Frontoffice application, where the new React dashboard had to be reached, gated and measured. This case study covers that host-side work, which is the other half of the dashboard integration.',
      challenge: [
        'Introducing new functionality into an existing application means working inside its routing, configuration and release habits. Changes that look small in the host can affect every user who reaches the page.',
        'The transition from the legacy experience to the React dashboard had to be controllable, observable and reversible.',
      ],
      responsibilities: [
        'Integrated and routed to the React dashboard micro-frontend from the Angular application.',
        'Implemented feature-flagged dashboard access.',
        'Configured micro-frontend endpoints per environment.',
        'Added dashboard loading analytics and event instrumentation.',
      ],
      approach: [
        'Kept the Angular application’s structure in place and added the dashboard as a routed entry point, rather than restructuring the existing modules.',
        'Treated environment configuration and feature flags as first-class parts of the integration, so behaviour can be changed without a code change.',
        'Instrumented the dashboard load path so the transition could be measured rather than assumed.',
      ],
      decisions: [
        {
          title: 'Additive integration over restructuring',
          body: 'The Angular modules were extended, not reorganised. This kept the existing team’s mental model intact and limited the blast radius of each change.',
        },
        {
          title: 'Analytics at the integration point',
          body: 'Loading and event tracking sit where the two applications meet, so the transition can be followed from both sides.',
        },
      ],
      deliverables: [
        'Routing from the Angular application to the React dashboard micro-frontend.',
        'Feature-flagged dashboard access.',
        'Environment-specific micro-frontend endpoint configuration.',
        'Dashboard loading analytics and event instrumentation.',
        'Changes supporting the transition between the legacy application and the React dashboard.',
      ],
      technologies: ['Angular', 'TypeScript', 'Routing', 'Feature flags', 'Analytics instrumentation'],
      learned:
        'Working in a mature codebase rewards small, reversible changes. The most useful thing I learned was how much of a product’s reliability depends on configuration and routing decisions that are easy to overlook.',
    },
  },
  {
    slug: 'kyc-onboarding-workflows',
    number: '04',
    title: 'KYC and onboarding workflows',
    summary:
      'Reliability work on identity-verification journeys: asynchronous states, address verification, recovery paths, and clear feedback when uploads or connections fail.',
    ownership: 'Engineer on KYC and onboarding flows',
    period: 'Moniepoint',
    tags: ['React', 'TypeScript', 'API integration', 'Async states', 'Testing', 'Telemetry'],
    featured: false,
    diagram: {
      kind: 'flow',
      caption: 'Conceptual illustration of a generic verification journey. Not a product screenshot.',
      steps: [
        { label: 'Start', detail: 'Enter the journey with the user’s current status.' },
        { label: 'Method', detail: 'Choose or confirm the verification method.' },
        { label: 'Submit', detail: 'Upload documents or address details.' },
        { label: 'Validate', detail: 'Check each API response before rendering it.' },
        { label: 'Recover', detail: 'Explain rejections and offer a clear next step.' },
      ],
    },
    caseStudy: {
      overview:
        'Identity verification is a sequence of asynchronous steps where the user can get stuck. I worked on Level 3 KYC and address-verification flows, focusing on the states that are easy to miss: rejection, recovery, connectivity loss and failed uploads.',
      challenge: [
        'Each step depends on a remote response that can be slow, partial, rejected or missing. The interface has to represent every one of those states, not just the success path.',
        'Verification outcomes need to guide the user to a next action. A rejection without a recovery path is a dead end.',
      ],
      responsibilities: [
        'Worked on Level 3 KYC and address-verification flows.',
        'Implemented BRM-led verification-method selection.',
        'Handled address-recovery and rejection states.',
        'Handled connectivity and document-upload errors.',
        'Added API response validation and automated tests for these flows.',
        'Integrated telemetry across the micro-frontends involved.',
      ],
      approach: [
        'Modelled each journey as explicit states, so loading, error, rejection and success are visible in the code and in the interface.',
        'Validated API responses before the UI relies on them, so unexpected data fails in a controlled way.',
        'Tested the paths that matter most for recovery, not only the happy path.',
      ],
      decisions: [
        {
          title: 'Explicit states over implicit flags',
          body: 'Recovery paths are easier to reason about and test when each state is named. It also makes it harder to show a success message while a request is still pending.',
        },
      ],
      deliverables: [
        'Level 3 KYC and address-verification flows.',
        'BRM-led verification-method selection.',
        'Address-recovery and rejection handling.',
        'Connectivity and document-upload error handling.',
        'API response validation and automated tests.',
        'Telemetry integration across micro-frontends.',
      ],
      technologies: ['React', 'TypeScript', 'REST APIs', 'Jest', 'Vitest', 'React Testing Library', 'Playwright'],
      learned:
        'Onboarding is a place where a single unhandled state turns into a support ticket. Designing for failure first made the success path simpler, not the other way round.',
    },
  },
  {
    slug: 'testing-and-frontend-reliability',
    number: '05',
    title: 'Testing and frontend reliability',
    summary:
      'Investigating onboarding end-to-end failures, fixing the test issues behind them, and adding the test cases that were missing.',
    ownership: 'Engineer contributing to test and debugging work',
    period: 'Moniepoint',
    tags: ['Jest', 'Vitest', 'React Testing Library', 'Playwright', 'Debugging'],
    featured: false,
    diagram: {
      kind: 'flow',
      caption: 'Conceptual illustration of a layered testing approach. Not a product screenshot.',
      steps: [
        { label: 'Unit', detail: 'Logic and validation in Jest or Vitest.' },
        { label: 'Component', detail: 'Behaviour and states in React Testing Library.' },
        { label: 'End to end', detail: 'Full journeys in Playwright.' },
        { label: 'Investigate', detail: 'Trace failures to a cause before changing code.' },
      ],
    },
    caseStudy: {
      overview:
        'A large part of my work in the onboarding area was testing and debugging: investigating end-to-end failures, fixing the test issues behind them, and adding tests where coverage was missing.',
      challenge: [
        'End-to-end failures in a multi-step journey can come from the product, the test, the environment or the data. Telling them apart is the work.',
        'Flaky or incorrect tests erode trust in the suite. A failing test that nobody believes is nearly as harmful as a missing one.',
      ],
      responsibilities: [
        'Investigated onboarding end-to-end failures.',
        'Fixed issues in existing tests.',
        'Added test cases that were missing.',
        'Worked with Jest, Vitest, React Testing Library and Playwright.',
      ],
      approach: [
        'Started from the failing behaviour and worked back to the cause, rather than adjusting assertions to make a test pass.',
        'Used component tests for states and behaviour, and end-to-end tests for the journeys that cross component and service boundaries.',
      ],
      decisions: [
        {
          title: 'Fix the cause, not the assertion',
          body: 'When a test fails, the first question is whether the product is wrong. Loosening an assertion without understanding the failure hides real defects.',
        },
      ],
      deliverables: [
        'Investigation of onboarding end-to-end failures.',
        'Fixes to test issues in the onboarding area.',
        'Additional test cases for previously untested behaviour.',
      ],
      technologies: ['Jest', 'Vitest', 'React Testing Library', 'Playwright'],
      learned:
        'Good test debugging is mostly disciplined reading: the error, the state at the time, and the one change that explains both. The test suite is only as useful as the trust placed in it.',
    },
  },
]

export function getProjectBySlug(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
