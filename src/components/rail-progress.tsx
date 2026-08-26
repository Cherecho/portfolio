'use client'

import { useEffect, useRef } from 'react'

/*
  Fills the chronology rail as you read down it. The line tracks how far the
  experience list has passed the middle of the viewport, so the accent arrives
  entry by entry instead of all at once.
*/
export default function RailProgress() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const track = el.parentElement
    if (!track) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.transform = 'scaleY(1)'
      return
    }

    let raf = 0
    const measure = () => {
      raf = 0
      const rect = track.getBoundingClientRect()
      const mark = window.innerHeight * 0.55
      const filled = (mark - rect.top) / rect.height
      el.style.transform = `scaleY(${Math.min(1, Math.max(0, filled))})`
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

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="absolute -left-px top-0 block w-px origin-top bg-gradient-to-b from-signal via-signal to-flow"
      style={{ height: '100%', transform: 'scaleY(0)' }}
    />
  )
}
