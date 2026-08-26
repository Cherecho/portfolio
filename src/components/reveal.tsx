'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@libs'

type Props = {
  children: React.ReactNode
  delay?: number
  className?: string
}

/* One observer per node, unobserved after the first entry. */
export default function Reveal({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        observer.unobserve(el)
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-shown={shown}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
      className={cn('reveal', className)}
    >
      {children}
    </div>
  )
}
