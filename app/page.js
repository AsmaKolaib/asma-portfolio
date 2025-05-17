'use client';

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import ProjectsM from "./components/Card/card";
import Preloader from "./components/Preloader";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Header />

          {/* Hero Section */}
          <AnimatedSection delay={0.1}>
            <Hero />
          </AnimatedSection>

          {/* Projects Section */}
          <div id="projects " className=" ">
            <AnimatedSection delay={0.2}>
              <div className="hidden lg:block">
                <Projects />
              </div>
           
            </AnimatedSection>
          </div>
          <div className="lg:hidden">
                <ProjectsM />
              </div>
          {/* About Section */}
          <div id="about">
   
              <About />
        
          </div>

          {/* Connect Section */}
          <div id="connect">
            <AnimatedSection delay={0.4}>
              <Connect />
            </AnimatedSection>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
