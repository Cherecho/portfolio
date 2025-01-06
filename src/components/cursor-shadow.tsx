'use client'
import React, { useEffect, useState } from 'react'

export default function CursorShadow() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [delayedCursorPosition, setDelayedCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    let rafId: number

    const animate = () => {
      setDelayedCursorPosition(prev => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.04,
        y: prev.y + (cursorPosition.y - prev.y) * 0.04
      }))
      rafId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(rafId)
  }, [cursorPosition])

  if (delayedCursorPosition.x !== 0 && delayedCursorPosition.y !== 0) {
    return (
      <div
        className="pointer-events-none max-[800px]:hidden fixed top-0 left-0 inset-0 z-30 transition duration-300 max-[900px]:opacity-0"
        style={{
          background: `radial-gradient(600px at ${delayedCursorPosition.x}px ${delayedCursorPosition.y}px, rgb(var(--shadow-cursor)), transparent 80%)`
        }}
      />
    )
  }
  return null
}
