/** Shared easing for every reveal and transition, so motion feels like one system. */
export const ease = [0.22, 1, 0.36, 1] as const

export const isReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
