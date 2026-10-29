import { ArrowUp } from 'lucide-react'
import { profile } from '../../content/profile'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {profile.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="underline-offset-4 transition-colors hover:text-paper hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
          {profile.email && (
            <li>
              <a href={`mailto:${profile.email}`} className="underline-offset-4 transition-colors hover:text-paper hover:underline">
                Email
              </a>
            </li>
          )}
          <li>
            <a href="#main" className="inline-flex items-center gap-1.5 transition-colors hover:text-paper">
              <ArrowUp aria-hidden className="size-3.5" />
              Back to top
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
