"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button";

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
        className="absolute outline-[1000px] outline-[#191919] w-40 h-[16rem] lg:w-96 lg:h-[28rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 6 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 1,
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
          type: "tween",
        }}
      />

      <div className="relative w-full h-screen flex flex-col items-center justify-around z-20">
        <motion.div
          className="flex flex-col justify-center items-center relative mt-30 ml-40 lg:mt-20 lg:ml-80"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        >
          <motion.svg
            viewBox="0 0 200 200"
            className="absolute  w-40 h-40  md:w-64 md:h-64"
            animate={{ rotate: 360 }}
            transition={{
              delay: 2.5,
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
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
            <text fill="white" fontSize="20">
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
            className="rounded-full w-20 h-20 lg:w-40 lg:h-40"
            style={{
              clipPath: "circle(50%)",
            }}
          />
        </motion.div>

        <motion.div
          className="w-full text-center over"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-robuka text-6xl lg:text-[10rem]">Asma Koliab</h1>
          <p className="text-lg mt-0 lg:mt-[-50px]">A web designer and developer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
          className="justify-end"
        >
          <Button />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
