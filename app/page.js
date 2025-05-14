"use client";
import { useState, useEffect } from 'react';
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import ProjectsM from "./components/Card/card";
import Preloader from './components/Preloader';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // You could use imagesLoaded or custom logic for actual loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // simulate 3s loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
          {loading && <Preloader onComplete={() => setLoading(false)} />}
          {!loading && (
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
   </>      )}

    </>
  );
}

export default Home;
