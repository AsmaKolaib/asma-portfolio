'use client';
import { projects } from '../../data/data';
import Card from '../Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis'
import Image from "next/image";
import { motion } from 'framer-motion';
export default function Cardm() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <div className='mt-[20vh] '>
            <motion.div
      id="pro"
      className="flex flex-col justify-center items-center text-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1
        className="font-robuka text-7xl md:text-9xl p-8 pb-14 text-white"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>
      <motion.div
        className="text-lg md:text-6xl font-bold mt-4 text-center"
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
              className="rounded-full w-[200px] h-[37px] object-cover"
            />
          </motion.div>
        </span>
      </motion.div>
    </motion.div>
          <div ref={container} className='relative '>
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