'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const loaderRef = useRef();

  useEffect(() => {
    const el = loaderRef.current;

    // Optional fade-in on mount (if needed)
    gsap.fromTo(
      el,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' }
    );

    // Exit animation
    gsap.to(el, {
      opacity: 0,
      y: '-100%',
      duration: 1,
      delay: 3, // how long preloader stays visible
      ease: 'power2.out',
      onComplete,
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#191919] text-white text-3xl"
    >
      Loading...
    </div>
  );
};

export default Preloader;
