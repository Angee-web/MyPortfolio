import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'

type Variant = 'primary' | 'secondary'

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  variant?: Variant
  children: ReactNode
}

const base =
  'group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-medium tracking-tight transition-[background-color,color,border-color,transform] duration-300 ease-out active:scale-[0.98] motion-reduce:transition-none'

const variants: Record<Variant, string> = {
  primary: 'bg-paper text-ink hover:bg-accent',
  secondary: 'border border-line text-paper hover:border-muted hover:bg-ink-2',
}

const isExternal = (href: string) => /^(https?:|mailto:)/.test(href)

/**
 * A single component for every call to action. External and mailto links render as anchors
 * (with safe rel attributes); internal and hash links use the router so navigation stays in-app.
 */
export function ButtonLink({ href, variant = 'primary', children, className = '', ...rest }: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (isExternal(href)) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...rest}
      >
        {children}
        <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" />
      </a>
    )
  }

  return (
    <Link to={href} className={classes} {...rest}>
      {children}
      <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
    </Link>
  )
}
