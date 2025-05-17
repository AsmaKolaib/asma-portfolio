"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;
  
        if (isDesktop) {
  
          ScrollTrigger.create({
            trigger: ".About",
            start: "top top",
            end: "bottom bottom",
            pin: ".right",
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });
        }
  
        if (isMobile) {
     
          ScrollTrigger.create({
            trigger: ".About",
            start: "top top",
            end: "bottom+=100% top", 
            pin: ".right",
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          });
        }
      }
    );
  
    return () => mm.revert();
  }, []);
  

  return (
    <>
      <div className="About bg-[#111112] w-full  grid grid-cols-1  lg:grid-cols-2">
        <div className=" right bg-[#111112] h-[50vh] lg:h-screen w-full flex flex-col justify-center overflow-hidden">
          <img
            src="/images/skills.gif"
            alt="img"
            width={100}
            height={100}
            loading="eager"
            className=" w-[100vw] h-[50vh] lg:h-screen object-contain scale-200"
          />
          <h1 className="w-full  text-center absolute font-robuka text-7xl lg:text-9xl p-8 pb-14 text-white z-10">
            About
          </h1>
        </div>
        <div className=" details bg-transparent w-full">
          <div className="lg:m-auto lg:w-[80%]">
            <div className="h-[50vh] lg:h-screen flex flex-col justify-center items-center p-8 lg:p-20 ">
              <p className="text-base lg:text-2xl">
                <span className="text-lg lg:text-6xl font-bold">I am </span>a designer and
                developer who is passionate about creating digital experiences.
                I enjoy combining clean, efficient code with thoughtful,
                user-centered design. I’m always looking for ways to improve my
                skills, stay updated with the latest trends, and create work
                that is both visually appealing and highly functional. I’m
                inspired by innovative creators and strive to build meaningful
                and engaging projects.
              </p>
            </div>

            <div className="h-[50vh] lg:h-screen flex flex-col justify-center items-center p-8 lg:p-20 ">
              <p className="text-base lg:text-2xl">
                <span className="text-lg lg:text-6xl font-bold">Who </span>developed an
                extensive skills to help you and create awesome work together
                and help you get the best outcome{" "}
              </p>
            </div>

            <div className="h-[50vh]  lg:h-screen flex flex-col justify-center items-center p-8 lg:p-20 ">
              <p className="text-base lg:text-2xl">
                <span className="text-lg lg:text-6xl font-bold">Good </span>at designs - UI
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
