"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".About",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
    });
  }, []);

  return (
    <>
      <div className="About bg-[#111112]  flex">
        <div className="right bg-[#111112] h-screen w-1/2 flex flex-col justify-center overflow-hidden">
          <Image
            src="/images/2.gif"
            alt="img"
            width={100}
            height={100}
            className="w-full h-screen object-contain scale-200"
          />
          <h1 className="absolute font-robuka text-9xl p-8 pb-14 text-white z-10">
            About
          </h1>
        </div>
        <div className=" details bg-transparent w-1/2">
          <div className="m-auto w-[80%]">
            <div className="h-screen flex flex-col justify-center items-center p-20 ">
              <p className="text-2xl">
                <span className="text-6xl font-bold">I am </span>a designer and
                developer who is passionate about creating digital experiences.
                I enjoy combining clean, efficient code with thoughtful,
                user-centered design. I’m always looking for ways to improve my
                skills, stay updated with the latest trends, and create work
                that is both visually appealing and highly functional. I’m
                inspired by innovative creators and strive to build meaningful
                and engaging projects.
              </p>
            </div>

            <div className="h-screen flex flex-col justify-center items-center p-20 ">
              <p className="text-2xl">
                <span className="text-6xl font-bold">Who </span>developed an
                extensive skills to help you and create awesome work together
                and help you get the best outcome{" "}
              </p>
            </div>

            <div className="h-screen flex flex-col justify-center items-center p-20 ">
              <p className="text-2xl">
                <span className="text-6xl font-bold">Good </span>at designs - UI
                design and design process and web for build an complete projects
                - with HTML5 , CSS3 , JavaScript , Reacts , NextJs, NodeJS ,
                WordPress , MySQL | MongoDB , API
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
