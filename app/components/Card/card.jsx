'use client';
import { projects } from '../../data/data';
import Card from '../Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis'
import Image from "next/image";
import { motion } from 'framer-motion';
import gsap from "gsap";

const Arrow = () => (
  <svg
    className="flex-shrink-0"
    width="36"
    height="36"
    viewBox="0 0 86 86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M44.8486 12.6699C49.181 25.843 59.4193 36.2193 72.5029 40.7383L73.1279 40.9492L79.3623 42.999L73.1279 45.0508C59.9548 49.3832 49.5786 59.6215 45.0596 72.7051L44.8486 73.3301L42.7969 79.5645L40.7471 73.3301C36.4147 60.157 26.1763 49.7808 13.0928 45.2617L12.4678 45.0508L6.23145 42.999L12.4678 40.9492C25.6408 36.6168 36.0171 26.3785 40.5361 13.2949L40.7471 12.6699L42.7969 6.43359L44.8486 12.6699Z"
      fill="#746BEB"
      stroke="black"
      strokeWidth="3.71"
    />
  </svg>
);

export default function Cardm() {
  const wrapperRef = useRef(null);
  const barRef = useRef(null);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })


  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      const bar = barRef.current;
      const wrapper = wrapperRef.current;

      const barWidth = bar.scrollWidth;
      const wrapperWidth = wrapper.offsetWidth;

      const distance = barWidth - wrapperWidth;

      gsap.fromTo(
        bar,
        { x: 20 },
        {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom", // when top of section hits bottom of viewport
            end: "top center", // to top center
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className='mt-[20vh] '>
              <div ref={wrapperRef}  className="overflow-hidden w-full py-10">
          <div
        ref={barRef}
            className="bar flex gap-4 font-light uppercase text-3xl whitespace-nowrap"
          >
            <span>HTML</span>
            <Arrow />
            <span>CSS</span>
            <Arrow />
            <span>JavaScript</span>
            <Arrow />
            <span>React.JS</span>
            <Arrow />
            <span>Tailwind</span>
            <Arrow />
          </div>
        </div>
            <motion.div
      id="pro"
      className="flex flex-col justify-center items-center text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1
        className="font-robuka text-7xl lg:text-9xl p-8 pb-14 text-white"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>
      <motion.div
        className="text-lg lg:text-6xl font-bold mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        I have worked on a number of recent <br />
        <span className="inline-flex items-center gap-4 mt-4">
          Projects, including...
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <Image
              src="/images/img.png"
              alt="img"
              width={100}
              height={100}
              className="rounded-full w-[120px] h-[27px] object-cover"
            />
          </motion.div>
        </span>
      </motion.div>
    </motion.div>
          <div ref={container} className='relative p-2 '>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </div>
    </div>

  )
}