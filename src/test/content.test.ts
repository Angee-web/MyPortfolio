import { describe, expect, it } from 'vitest'
import { projects } from '../content/projects'

describe('case study content', () => {
  it('has unique slugs and sequential numbers', () => {
    const slugs = projects.map((project) => project.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    expect(projects.map((project) => project.number)).toEqual(projects.map((_, i) => String(i + 1).padStart(2, '0')))
  })

  it('fills every required case-study section', () => {
    for (const project of projects) {
      const { caseStudy } = project
      expect(caseStudy.overview, project.slug).not.toBe('')
      expect(caseStudy.challenge.length, project.slug).toBeGreaterThan(0)
      expect(caseStudy.responsibilities.length, project.slug).toBeGreaterThan(0)
      expect(caseStudy.approach.length, project.slug).toBeGreaterThan(0)
      expect(caseStudy.decisions.length, project.slug).toBeGreaterThan(0)
      expect(caseStudy.deliverables.length, project.slug).toBeGreaterThan(0)
      expect(caseStudy.technologies.length, project.slug).toBeGreaterThan(0)
      expect(caseStudy.learned, project.slug).not.toBe('')
    }
  })

  it('resolves every cross-reference to an existing case study', () => {
    const slugs = new Set(projects.map((project) => project.slug))
    for (const project of projects) {
      if (project.related) expect(slugs.has(project.related.slug), project.slug).toBe(true)
    }
  })

  it('marks exactly one featured project', () => {
    expect(projects.filter((project) => project.featured)).toHaveLength(1)
  })

  it('never claims a percentage or a measured metric', () => {
    const everything = JSON.stringify(projects)
    expect(everything).not.toMatch(/\d+\s?%/)
  })
})
