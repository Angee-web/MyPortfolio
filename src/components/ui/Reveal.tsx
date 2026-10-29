import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { ease } from '../../lib/motion'

interface RevealProps {
  children: ReactNode
  /** Seconds before the reveal starts, used to stagger siblings. */
  delay?: number
  className?: string
}

/**
 * Fades and lifts content into place the first time it enters the viewport.
 * Under prefers-reduced-motion, MotionConfig (see App.tsx) removes the movement and keeps a plain fade.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
