"use client";

import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import ProjectsM from "./components/Card/card";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      
      <div id="projects" className="">

        <div className="hidden lg:block">
          <Projects />
        </div>


        <div className="lg:hidden">
          <ProjectsM />
        </div>
      </div>

      <div id="about" className="">
        <About />
      </div>
      
      <div id="connect" className="">
        <Connect />
      </div>
    </>
  );
}

export default Home;
