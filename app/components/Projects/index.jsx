import Image from "next/image";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Project from "../project";
import Modal from "../modal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    title: "414 Agency ",
    src: "414.png",
    color: "#000000",
    type: "Development",
    link: "https://fouronefour.co/",
  },
  {
    title: "capital wools",
    src: "capital-wools.png",
    color: "#8C8C8C",
    type: "Design & Development",
    link: "https://capital-wools-site.vercel.app/ar ",
  },
  {
    title: "cintana",
    src: "cintana.png",
    color: "#EFE8D3",
    type: " Development",
    link: "https://dpba.cintana.com/",
  },
  {
    title: "wosom",
    src: "wosom.png",
    color: "#706D63",
    type: "Development",
    link: "https://wosom.vercel.app/",
  },
  {
    title: "theteamistress",
    src: "theteamistress.png",
    color: "#706D63",
    type: " Development",
    link: "https://theteamistress.com/",
  },
];

const Arrow = () => (
  <svg
    className="flex-shrink-0"
    width="86"
    height="86"
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

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const wrapperRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bar = barRef.current;
      const wrapper = wrapperRef.current;

      const barWidth = bar.scrollWidth;
      const wrapperWidth = wrapper.offsetWidth;

      const distance = barWidth - wrapperWidth;

      gsap.fromTo(
        bar,
        { x: 0 },
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
    <motion.div
      className="overflow-hidden w-screen h-screen"
      // whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex flex-col h-full justify-around" // removed justify-center
        // drag="x"
        // dragConstraints={{ left: -window.innerWidth * 2, right: 0 }}
        // dragElastic={0.2}
      >
        <div ref={wrapperRef} className="overflow-hidden w-full py-10">
          <div
            ref={barRef}
            className="bar flex gap-4 font-light uppercase text-7xl whitespace-nowrap"
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
        <div className="min-w-full h-screen grid grid-cols-2 content-center justify-center items-center gap-10 p-8 ">
          <div
            id="pro"
            className="flex flex-col  justify-center items-start text-left "
          >
            <h1 className="font-robuka text-9xl">projects</h1>
            <p className="text-4xl leading-relaxed mt-4">
              I have worked on a number of recent <br />
              <span className="inline-flex items-center gap-4">
                projects, including...
                <Image
                  src="/images/img.png"
                  alt="img"
                  width={100}
                  height={100}
                  className="rounded-full w-[300px] h-[57px] object-cover"
                />
              </span>
            </p>
          </div>

          <div
            id="table"
            className=" h-100vh flex flex-col  justify-center items-start  "
          >
            {projects.map((project, index) => (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                type={project.type}
                key={index}
                link={project.link}
              />
            ))}
            <Modal modal={modal} projects={projects} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
