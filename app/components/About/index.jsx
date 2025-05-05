import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="grid grid-cols-2 h-screen overflow-hidden">
      {/* Left Static Section */}
      <div
        id="static"
        className="sticky top-0 h-screen overflow-hidden relative flex flex-col justify-center items-start bg-[#111112]"
      >
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

      <div
        className="h-screen overflow-y-scroll scroll-snap-y scroll-smooth "
        style={{
          scrollSnapType: "y mandatory",
          backgroundImage: "url('/images/background-m 1.png')",
        }}
      >
        <div
          id="1"
          className="h-screen flex flex-col justify-center items-center p-20 scroll-snap-align-start"
        >
          <p className="text-2xl">
            <span className="text-6xl font-bold">I am </span>a designer and
            developer who is passionate about creating digital experiences. I
            enjoy combining clean, efficient code with thoughtful, user-centered
            design. I’m always looking for ways to improve my skills, stay
            updated with the latest trends, and create work that is both
            visually appealing and highly functional. I’m inspired by innovative
            creators and strive to build meaningful and engaging projects.
          </p>
        </div>

        <div
          id="2"
          className="h-screen flex flex-col justify-center items-center p-20 scroll-snap-align-start"
        >
          <p className="text-2xl">
            <span className="text-6xl font-bold">Who </span>developed an
            extensive skills to help you and create awesome work together and
            help you get the best outcome{" "}
          </p>
        </div>

        <div
          id="3"
          className="h-screen flex flex-col justify-center items-center p-20 scroll-snap-align-start"
        >
          <p className="text-2xl">
            <span className="text-6xl font-bold">Good </span>at designs - UI
            design and design process and web for build an complete projects -
            with HTML5 , CSS3 , JavaScript , Reacts , NextJs, NodeJS , WordPress
            , MySQL | MongoDB , API
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
