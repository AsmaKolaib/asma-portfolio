'use client'
import { motion } from 'framer-motion';
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">

      <Image
        src="/images/1.gif"
        alt="3D blob"
        width={600}
        height={600}
        className="absolute top-0 right-0 transform scale-[5.6] translate-x-[-140px] -translate-y-[-230px] object-contain"
      />

      <motion.div
        className="absolute outline-[1000px] outline-[#191919] w-96  h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 6 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
          type: "tween"
        }}
      />



      <div className=' relative w-full h-screen flex flex-col items-center justify-center '>
        <div className=" flex flex-col justify-center items-center relative top-[-70px] right-[-185px] ">

          <motion.svg viewBox="0 0 200 200" className="  absolute w-64 h-64"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 100, 100
           m -75, 0
           a 75,75 0 1,1 150,0
           a 75,75 0 1,1 -150,0"
              />
            </defs>
            {/* <circle cx="100" cy="100" r="75" fill="none" stroke="#ccc" /> */}
            <text fill="white" font-size="30" font-weight="">
              <textPath href="#circlePath" startOffset="0%">
                4 years of experience
              </textPath>
            </text>
          </motion.svg>

          <Image
            src="/images/img.png"
            alt="img"
            width={100}
            height={100}
            className="rounded-full  w-40 h-40"
            style={{
              clipPath: "circle(50%)" // This will clip the image into a circle
            }}

          />



        </div>
        <h1 className='font-robuka text-9xl '>
          Asma Koliab
        </h1>
        <p className='text-2xl'>A web designer and developer</p>
        <Button />
      </div>

    </div>
  );
};

export default Hero;
