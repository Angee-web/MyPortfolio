import { profile } from '../content/profile'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { ButtonLink } from '../components/ui/ButtonLink'

export function NotFoundPage() {
  useDocumentTitle(`Page not found · ${profile.shortName}`)

  return (
    <section className="container-x flex min-h-[70dvh] flex-col justify-center pt-32 pb-24">
      <p className="eyebrow">404</p>
      <h1 className="display mt-6 text-[clamp(3rem,8vw,7rem)]">
        Page <span className="italic text-accent">not found</span>
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
        The page you were looking for does not exist or has moved.
      </p>
      <div className="mt-10">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </section>
  )
}
