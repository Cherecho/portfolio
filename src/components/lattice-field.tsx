'use client'

import { useEffect, useRef } from 'react'

/*
  The signature: raw input becoming structured output, which is the whole job.
  Every node starts as drifting noise and is pulled onto a fixed lattice by a
  front that sweeps across the page once on load. Behind the front the nodes
  snap square, take the amber signal colour and wire up to their neighbours.
  The cursor injects local disorder, because nothing stays clean in production.
*/

const SPACING = 46
const NODE = 3
const SWEEP_MS = 2600
const FEATHER = 420
const CURSOR_RADIUS = 130
/* Each pass of the cursor adds an impulse that then bleeds away, so the
   disturbance lags behind the pointer as a wake instead of snapping back.
   The cap keeps the two independent: impulse sets how fast a node is shoved,
   decay sets how long the wake lingers, and neither inflates the other. */
const WAKE_IMPULSE = 4
const WAKE_DECAY = 0.982
const WAKE_MAX = 14
/* A fast flick covers more ground per frame, so it deposits proportionally
   more energy — otherwise nodes it barely grazes never move. */
const WAKE_SPEED_GAIN = 1 / 18
const WAKE_SPEED_MAX = 3.5

type Node = {
  col: number
  row: number
  lx: number
  ly: number
  ox: number
  oy: number
  speed: number
  phase: number
  teal: boolean
  x: number
  y: number
  order: number
  /* Live displacement carried by the wake. */
  wx: number
  wy: number
}

const smooth = (t: number) => t * t * (3 - 2 * t)
const clamp01 = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t)

export default function LatticeField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let nodes: Node[] = []
    let cols = 0
    let rows = 0
    let width = 0
    let height = 0
    let raf = 0
    let start = 0
    // px/py hold where the pointer was on the previous frame; the impulse is
    // applied along that whole segment so a fast sweep still reaches every
    // node it crossed instead of only the one under the final position.
    const cursor = { x: -9999, y: -9999, px: -9999, py: -9999, active: false }

    // Deterministic pseudo-noise so the layout is stable across renders.
    const noise = (i: number, salt: number) => {
      const v = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453
      return v - Math.floor(v)
    }

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      cols = Math.max(2, Math.ceil(width / SPACING) + 1)
      rows = Math.max(2, Math.ceil(height / SPACING) + 1)
      const offsetX = (width - (cols - 1) * SPACING) / 2
      const offsetY = (height - (rows - 1) * SPACING) / 2

      nodes = []
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const i = row * cols + col
          const lx = offsetX + col * SPACING
          const ly = offsetY + row * SPACING
          nodes.push({
            col,
            row,
            lx,
            ly,
            // Where this node lives while it is still unstructured.
            ox: (noise(i, 1) - 0.5) * SPACING * 3.4,
            oy: (noise(i, 2) - 0.5) * SPACING * 3.4,
            speed: 0.4 + noise(i, 3) * 0.9,
            phase: noise(i, 4) * Math.PI * 2,
            teal: noise(i, 5) > 0.93,
            x: lx,
            y: ly,
            order: 0,
            wx: 0,
            wy: 0
          })
        }
      }
    }

    const draw = (elapsed: number) => {
      ctx.clearRect(0, 0, width, height)

      const front = still
        ? width + FEATHER
        : (elapsed / SWEEP_MS) * (width + FEATHER * 2) - FEATHER
      const t = elapsed / 1000

      for (const n of nodes) {
        n.order = smooth(clamp01((front - n.lx) / FEATHER))

        // Unstructured position: a slow, aimless drift.
        const driftX = n.ox + Math.sin(t * n.speed + n.phase) * 16
        const driftY = n.oy + Math.cos(t * n.speed * 0.8 + n.phase) * 16
        // Structured position: parked on the lattice, breathing faintly.
        const settleX = Math.sin(t * 0.5 + n.phase) * 1.4
        const settleY = Math.cos(t * 0.4 + n.phase) * 1.4

        n.x = n.lx + driftX * (1 - n.order) + settleX * n.order
        n.y = n.ly + driftY * (1 - n.order) + settleY * n.order

        // The cursor pushes settled nodes out of alignment, and they drift
        // back slowly enough to leave a trail behind the pointer. Distance is
        // measured to the segment it travelled this frame, not to a point.
        if (cursor.active) {
          const segX = cursor.x - cursor.px
          const segY = cursor.y - cursor.py
          const segLen2 = segX * segX + segY * segY
          const along = segLen2
            ? clamp01(
                ((n.x - cursor.px) * segX + (n.y - cursor.py) * segY) / segLen2
              )
            : 0
          const dx = n.x - (cursor.px + segX * along)
          const dy = n.y - (cursor.py + segY * along)
          const dist = Math.hypot(dx, dy)
          if (dist < CURSOR_RADIUS) {
            const gain =
              1 +
              Math.min(Math.sqrt(segLen2) * WAKE_SPEED_GAIN, WAKE_SPEED_MAX)
            const force =
              (1 - dist / CURSOR_RADIUS) ** 2 * WAKE_IMPULSE * gain
            n.wx += (dx / (dist || 1)) * force
            n.wy += (dy / (dist || 1)) * force
          }
        }
        const wake = Math.hypot(n.wx, n.wy)
        if (wake > WAKE_MAX) {
          n.wx = (n.wx / wake) * WAKE_MAX
          n.wy = (n.wy / wake) * WAKE_MAX
        }
        n.wx *= WAKE_DECAY
        n.wy *= WAKE_DECAY
        n.x += n.wx
        n.y += n.wy
      }

      cursor.px = cursor.x
      cursor.py = cursor.y

      // Wire up neighbours once they are both in formation.
      ctx.lineWidth = 1
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const a = nodes[row * cols + col]
          if (a.order < 0.55) continue
          for (const b of [
            col < cols - 1 ? nodes[row * cols + col + 1] : null,
            row < rows - 1 ? nodes[(row + 1) * cols + col] : null
          ]) {
            if (!b || b.order < 0.55) continue
            const strength = Math.min(a.order, b.order)
            const stretch = Math.hypot(b.x - a.x, b.y - a.y)
            // Links fade as the cursor stretches them past their rest length.
            const strain = clamp01(1 - (stretch - SPACING) / SPACING)
            ctx.strokeStyle = `rgba(95, 224, 230, ${
              0.17 * strength * strain
            })`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        const stir = Math.min(1, Math.hypot(n.wx, n.wy) / 16)
        const size = NODE * (1 + n.order * 0.35 + stir * 0.9)
        if (n.order < 0.5) {
          ctx.fillStyle = `rgba(84, 116, 190, ${0.24 + n.order * 0.22 + stir * 0.5})`
        } else if (n.teal) {
          ctx.fillStyle = `rgba(95, 224, 230, ${0.28 + n.order * 0.55 + stir * 0.4})`
        } else {
          ctx.fillStyle = `rgba(61, 139, 255, ${
            0.18 + n.order * 0.55 + stir * 0.45
          })`
        }
        ctx.fillRect(n.x - size / 2, n.y - size / 2, size, size)
      }
    }

    const frame = (now: number) => {
      if (!start) start = now
      draw(now - start)
      raf = requestAnimationFrame(frame)
    }

    const onResize = () => {
      build()
      if (still) draw(SWEEP_MS)
    }

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      // Re-entering the page must not sweep a segment across the whole field.
      if (!cursor.active) {
        cursor.px = x
        cursor.py = y
        cursor.active = true
      }
      cursor.x = x
      cursor.y = y
    }

    // Park the cursor out of range whenever it is no longer over the page.
    // pointerleave on window is unreliable, so listen where it actually
    // fires and also catch the window losing focus or being hidden.
    const onLeave = () => {
      cursor.active = false
      cursor.x = -9999
      cursor.y = -9999
      cursor.px = -9999
      cursor.py = -9999
    }
    const onVisibility = () => {
      if (document.hidden) onLeave()
    }

    // The field sinks and dims as the hero scrolls away, so the lattice reads
    // as a layer behind the page rather than a static backdrop.
    let scrollRaf = 0
    const applyParallax = () => {
      scrollRaf = 0
      const progress = Math.min(1, window.scrollY / window.innerHeight)
      canvas.style.transform = `translate3d(0, ${progress * 90}px, 0)`
      canvas.style.opacity = String(1 - progress * 0.75)
    }
    const onScroll = () => {
      if (!scrollRaf) scrollRaf = requestAnimationFrame(applyParallax)
    }

    build()
    if (still) {
      draw(SWEEP_MS)
    } else {
      raf = requestAnimationFrame(frame)
      window.addEventListener('pointermove', onPointer)
      document.documentElement.addEventListener('pointerleave', onLeave)
      document.addEventListener('mouseleave', onLeave)
      window.addEventListener('blur', onLeave)
      document.addEventListener('visibilitychange', onVisibility)
      window.addEventListener('scroll', onScroll, { passive: true })
      applyParallax()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(scrollRaf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointer)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('blur', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
