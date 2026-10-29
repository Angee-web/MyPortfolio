import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { AboutSection } from '../components/home/AboutSection'
import { ContactSection } from '../components/home/ContactSection'
import { Hero } from '../components/home/Hero'
import { SkillsSection } from '../components/home/SkillsSection'
import { WorkSection } from '../components/home/WorkSection'
import { profile } from '../content/profile'
import { isReducedMotion } from '../lib/motion'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export function HomePage() {
  const { hash } = useLocation()
  useDocumentTitle(`${profile.name} · ${profile.title}`)

  // Links from other pages arrive as /#section. Scroll to the target once the home page has rendered.
  useEffect(() => {
    if (!hash) return
    const target = document.getElementById(decodeURIComponent(hash.slice(1)))
    target?.scrollIntoView({ behavior: isReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <Hero />
      <WorkSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}
