"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-[#111112] relative overflow-hidden">
      <img
        src="/images/hero.gif"
        alt="3D blob"
        width={600}
        height={600}
        loading="eager"
        className="absolute top-0 right-0 transform scale-[5.6] translate-x-[-140px] -translate-y-[-230px] object-contain"
      />

      <motion.div
        className="absolute border-2 border-[#252525] outline-[1000px] outline-[#111112] w-40 h-[16rem] md:w-52 md:h-[18rem]  lg:w-96 lg:h-[28rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 6 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 1,
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
          type: "tween",
        }}
      />

      <div className="  container m-auto  relative w-full h-screen flex flex-col items-center justify-around z-20">
      <div className="w-full  h-[40vh] grid  justify-center items-end content-end">
      <motion.div
          className=" h-full flex flex-col justify-center items-center relative  lg:mb-[23px] ml-40 lg:ml-90"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        >
          <motion.svg
            viewBox="0 0 200 200"
            className="absolute  w-40 h-40  lg:w-64 lg:h-64"
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
      </div>

        <motion.div
          className="h-[40vh] flex flex-col justify-center w-full text-center mt-[-92px] lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-white font-robuka text-6xl lg:text-[10rem]">Asma Koliab</h1>
          <p className="text-white text-lg  mt-0 lg:text-4xl ">A web designer and developer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
          className="h-[20vh] justify-end"
        >
          <Button />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
