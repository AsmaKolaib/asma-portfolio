import Image from "next/image";
import Project from "./project.jsx";
import { motion } from 'framer-motion';



const Projects = () => {
  return (
    <motion.div
      className="overflow-hidden w-screen h-screen "
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex h-full"
        drag="x"
        dragConstraints={{ left: -window.innerWidth * 2, right: 0 }}
        dragElastic={0.2}
      >
        {/* Slide 1: Intro */}
        <div className=" min-w-full h-screen grid grid-cols-2 gap-1 p-8">
          <div className="h-full flex flex-col justify-center items-start text-left">
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

          <div className="h-full flex items-end justify-end pr-4 pb-10">
          <div className="h-full flex items-end justify-end pr-4 pb-10">
          <svg
            width="211"
            height="144"
            viewBox="0 0 211 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG lines... */}
            <line
              x1="104.221"
              y1="2.35448"
              x2="208.714"
              y2="72.0166"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="104.221"
              y1="2.35448"
              x2="208.714"
              y2="72.0166"
              stroke="#A3A3A3"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="1.5"
              y1="-1.5"
              x2="127.085"
              y2="-1.5"
              transform="matrix(0.83205 -0.5547 -0.5547 -0.83205 102.141 141.807)"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="1.5"
              y1="-1.5"
              x2="127.085"
              y2="-1.5"
              transform="matrix(0.83205 -0.5547 -0.5547 -0.83205 102.141 141.807)"
              stroke="#A3A3A3"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="56.3497"
              y1="2.35448"
              x2="160.843"
              y2="72.0166"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="56.3497"
              y1="2.35448"
              x2="160.843"
              y2="72.0166"
              stroke="#A3A3A3"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="1.5"
              y1="-1.5"
              x2="127.085"
              y2="-1.5"
              transform="matrix(0.83205 -0.5547 -0.5547 -0.83205 54.2695 141.807)"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="1.5"
              y1="-1.5"
              x2="127.085"
              y2="-1.5"
              transform="matrix(0.83205 -0.5547 -0.5547 -0.83205 54.2695 141.807)"
              stroke="#A3A3A3"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="2.85454"
              y1="2.35546"
              x2="107.348"
              y2="72.0175"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="2.85454"
              y1="2.35546"
              x2="107.348"
              y2="72.0175"
              stroke="#A3A3A3"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="1.5"
              y1="-1.5"
              x2="127.085"
              y2="-1.5"
              transform="matrix(0.83205 -0.5547 -0.5547 -0.83205 0.774414 141.808)"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="1.5"
              y1="-1.5"
              x2="127.085"
              y2="-1.5"
              transform="matrix(0.83205 -0.5547 -0.5547 -0.83205 0.774414 141.808)"
              stroke="#A3A3A3"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
          </div>
        </div>

        {/* Slide 2: Project 1 */}
        <div className="min-w-full h-screen flex items-center justify-center p-8">
          <Project
            name="EXAMPLE 1"
            description="Description of the first project..."
            shortSummary="Short summary"
            tyoe="web"
            year="2012"
          />
        </div>

        {/* Slide 3: Project 2 */}
        <div className="min-w-full h-screen flex items-center justify-center p-8">
          <Project
            name="EXAMPLE 2"
            description="Description of the second project..."
            shortSummary="Short summary"
            tyoe="app"
            year="2014"
          />
        </div>

        {/* Add more slides here */}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
