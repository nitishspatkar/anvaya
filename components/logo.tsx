import Link from 'next/link'

interface LogoProps {
  className?: string
  latinClassName?: string
  devanagariClassName?: string
}

export default function Logo({
  className = '',
  latinClassName = 'font-sans text-xl font-bold text-primary',
  devanagariClassName = 'text-xs text-muted-foreground tracking-wide',
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Anvaya home"
      className={`inline-flex flex-col leading-tight whitespace-nowrap ${className}`}
    >
      <span className={latinClassName}>Anvaya</span>
      <span className={devanagariClassName}>अन्वय</span>
    </Link>
  )
}
