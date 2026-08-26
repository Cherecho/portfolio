'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@libs'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'stack', label: 'Stack' }
]

export default function SiteHeader() {
  const [progress, setProgress] = useState(0)
  const [pinned, setPinned] = useState(false)
  const [active, setActive] = useState('about')
  const listRef = useRef<HTMLUListElement>(null)
  const [marker, setMarker] = useState({ left: 0, width: 0 })

  useEffect(() => {
    let raf = 0

    const measure = () => {
      raf = 0
      const scrolled = window.scrollY
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? scrolled / scrollable : 0)
      setPinned(scrolled > window.innerHeight * 0.6)

      // Active section: the last one whose top has passed the header.
      const line = scrolled + 140
      let current = SECTIONS[0].id
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id)
        if (el && el.offsetTop <= line) current = section.id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const move = () => {
      const current = list.querySelector<HTMLElement>('[data-active="true"]')
      if (!current) return
      setMarker({ left: current.offsetLeft, width: current.offsetWidth })
    }
    move()
    window.addEventListener('resize', move)
    return () => window.removeEventListener('resize', move)
  }, [active])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-ground/85 backdrop-blur-md transition-transform duration-500 ease-out motion-reduce:transition-none',
        pinned ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="mx-auto flex max-w-shell items-center gap-6 px-6 py-3 sm:px-10">
        <a
          href="#top"
          className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-ink transition-colors hover:text-signal"
          style={{ fontStretch: '125%' }}
        >
          Cerezo
        </a>
        <nav className="ml-auto">
          <ul ref={listRef} className="relative flex items-center gap-1 sm:gap-2">
            <li
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 h-px bg-signal transition-all duration-300 ease-out motion-reduce:transition-none"
              style={{ left: marker.left, width: marker.width }}
            />
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={active === section.id ? 'true' : undefined}
                  data-active={active === section.id}
                  className={cn(
                    'rounded px-2 py-1 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors sm:px-3 sm:text-xs',
                    active === section.id
                      ? 'text-signal'
                      : 'text-muted hover:text-ink'
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        aria-hidden="true"
        className="h-px origin-left bg-signal transition-transform duration-150 ease-out motion-reduce:transition-none"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  )
}
