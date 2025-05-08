"use client";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Connect from "./components/Connect";

// import the wrapper
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div id="projects" className="">
        <Projects />
      </div>
      <div id="about" className=" relative ">
        <About />
      </div>
      <div id="connect" className=" ">
        <Connect />
      </div>
    </>
  );
}

export default Home;
