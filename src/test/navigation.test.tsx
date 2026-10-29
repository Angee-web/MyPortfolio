import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, it } from 'vitest'
import { Header } from '../components/layout/Header'
import { SiteLayout } from '../components/layout/SiteLayout'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProjectPage } from '../pages/ProjectPage'
import { projects } from '../content/projects'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Header />
    </MemoryRouter>,
  )
}

describe('mobile navigation', () => {
  it('toggles aria-expanded and closes with Escape, returning focus to the toggle', async () => {
    const user = userEvent.setup()
    renderAt('/')

    const toggle = screen.getByRole('button', { name: 'Menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAccessibleName('Menu')

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveFocus()
  })

  it('exposes the section links in one primary navigation landmark', () => {
    renderAt('/')
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Work', 'About', 'Skills', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('points section links at the home page when viewed from a case study', () => {
    renderAt('/work/design-system-migration')
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/#work')
  })
})

describe('routing', () => {
  function renderRoutes(path: string) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="work/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    )
  }

  it('renders the home page at /', () => {
    renderRoutes('/')
    expect(screen.getByRole('heading', { level: 1, name: /Adaeze Angelica/ })).toBeInTheDocument()
  })

  it('renders each case study at its slug', () => {
    for (const project of projects) {
      const { unmount } = renderRoutes(`/work/${project.slug}`)
      expect(screen.getByRole('heading', { level: 1, name: project.title })).toBeInTheDocument()
      unmount()
    }
  })

  it('shows the not-found page for an unknown case study', () => {
    renderRoutes('/work/does-not-exist')
    expect(screen.getByRole('heading', { level: 1, name: /not found/i })).toBeInTheDocument()
  })
})
