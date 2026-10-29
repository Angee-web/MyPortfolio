import type { Profile } from './types'

export const profile: Profile = {
  name: 'Adaeze Angelica Ugwumba',
  shortName: 'Adaeze Ugwumba',
  title: 'Frontend Engineer',
  headline: 'Frontend systems for business banking, built to hold up under real use.',
  intro:
    'I build React and TypeScript applications, micro-frontends that integrate into established Angular products, and the onboarding and KYC journeys where clear error handling matters most.',
  about: [
    'I am a frontend engineer at Moniepoint, working on business-banking products. My work sits between two codebases: I have built a React micro-frontend and integrated it into an established Angular application, and I have worked on the verification flows where asynchronous states and edge cases are the product.',
    'I care about architecture that other engineers can maintain, boundaries between systems that fail in predictable ways, and interfaces that stay understandable when a request fails or a document will not upload.',
    'Before moving into software development, I worked in pharmaceutical sales, laboratory research, and HR. I completed a B.Sc. in Medical Biochemistry at the University of Benin.',
  ],
  // Empty string hides the email link entirely. Add the address here when ready.
  email: '',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adaeze-ugwumba-3a9b9922a/' },
    { label: 'GitHub', href: 'https://github.com/Angee-web' },
  ],
  cv: { href: '/cv/Adaeze-Ugwumba-CV.pdf', available: false },
}
