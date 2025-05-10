'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const cursorRef = useRef(null)
  const trailingRef = useRef(null)
  const imageCursorRef = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current || !trailingRef.current || !imageCursorRef.current) return

 
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      })

      gsap.to(imageCursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      })

      // Optional trailing circle
      gsap.to(trailingRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power2.out',
      })
    }

    const handleLinkHover = () => {
      if (cursorRef.current) cursorRef.current.style.display = 'none'
      if (imageCursorRef.current) imageCursorRef.current.style.display = 'block'
    }

    const handleLinkLeave = () => {
      if (cursorRef.current) cursorRef.current.style.display = 'block'
      if (imageCursorRef.current) imageCursorRef.current.style.display = 'none'
    }

    document.addEventListener('mousemove', moveCursor)

    // Attach hover listeners to all <a> tags
    const links = document.querySelectorAll('a')
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover)
      link.addEventListener('mouseleave', handleLinkLeave)
    })

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCursor)
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover)
        link.removeEventListener('mouseleave', handleLinkLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 rounded-full bg-[#933bb8] border-2 border-[#933bb8]"
      ></div>

      <img
        ref={imageCursorRef}
        src="/images/cursor.png" 
        alt="Link Cursor"
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-8 w-8"
      />

      <div
        ref={trailingRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-12 w-12 rounded-full border-2 border-"
      ></div>
    </>
  )
}

