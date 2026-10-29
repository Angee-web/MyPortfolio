interface TagProps {
  children: string
}

export function Tag({ children }: TagProps) {
  return (
    <li className="rounded-full border border-line bg-ink-2/60 px-3 py-1 font-mono text-[0.72rem] tracking-wide text-muted">
      {children}
    </li>
  )
}
