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

      <div className="sticky-section  projects">
        <Projects />
      </div>

      <div className=" relative about">
        <About />
      </div>
      <div className="sticky-section connect">
        {" "}
        <Connect />
      </div>
    </>
  );
}

export default Home;
