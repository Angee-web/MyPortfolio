import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { profile } from '../../content/profile'
import { useActiveSection } from '../../lib/useActiveSection'
import { sectionIds, sectionNav } from './navigation'

const NAV_ID = 'primary-navigation'

export function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const activeSection = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the mobile menu and returns focus to the button that opened it.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`)
  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open ? 'border-line bg-ink/85 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-x relative flex h-16 items-center justify-between gap-6">
        <Link to="/" onClick={closeMenu} className="font-display text-xl italic tracking-tight" aria-label="Adaeze Ugwumba, home">
          {profile.shortName}
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls={NAV_ID}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="size-4" /> : <Menu aria-hidden="true" className="size-4" />}
          <span>Menu</span>
        </button>

        <nav
          id={NAV_ID}
          aria-label="Primary"
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 border-b border-line bg-ink/95 px-4 py-4 backdrop-blur-md md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none`}
        >
          {sectionNav.map((item) => {
            const current = isHome && activeSection === item.id
            return (
              <Link
                key={item.id}
                to={hrefFor(item.id)}
                onClick={closeMenu}
                aria-current={current ? 'true' : undefined}
                className="group relative rounded-md px-3 py-3 text-base text-muted transition-colors duration-200 hover:text-paper aria-[current=true]:text-paper md:py-2 md:text-sm"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 bottom-1.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 group-aria-[current=true]:scale-x-100"
                />
              </Link>
            )
          })}

          {profile.cv.available && (
            <a
              href={profile.cv.href}
              target="_blank"
              rel="noreferrer noopener"
              onClick={closeMenu}
              className="mt-2 rounded-full border border-line px-4 py-2.5 text-center text-sm transition-colors duration-200 hover:border-muted hover:bg-ink-2 md:ml-3 md:mt-0"
            >
              CV (PDF)
            </a>
          )}
        </nav>
      </div>
    </header>
  )
}
