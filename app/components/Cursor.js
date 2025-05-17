'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const cursorRef = useRef(null)
  const trailingRef = useRef(null)

  useEffect(() => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    // Set initial position at center
    gsap.set(cursorRef.current, {
      x: centerX,
      y: centerY,
    })

    gsap.set(trailingRef.current, {
      x: centerX,
      y: centerY,
    })

    const moveCursor = (e) => {
      if (!cursorRef.current || !trailingRef.current) return

      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      })

      gsap.to(trailingRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power2.out',
      })
    }

    const handleMouseOver = (e) => {
      const isLink = e.target.closest('a')
      if (isLink && cursorRef.current) {
        gsap.to(cursorRef.current, {
          backgroundColor: '#ff69b4',
          borderColor: '#ff69b4',
          scale: 1.8,
          duration: 0.3,
        })
      }
    }

    const handleMouseOut = (e) => {
      const isLink = e.target.closest('a')
      if (isLink && cursorRef.current) {
        gsap.to(cursorRef.current, {
          backgroundColor: '#933bb8',
          borderColor: '#933bb8',
          scale: 1,
          duration: 0.3,
        })
      }
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 rounded-full bg-[#933bb8] border-2 border-[#933bb8] hidden lg:block"
      ></div>

      <div
        ref={trailingRef}
        className="pointer-events-none fixed top-0 left-0 z-[9996] h-10 w-10 rounded-full border-2 border-white hidden lg:block"
      ></div>
    </>
  )
}
