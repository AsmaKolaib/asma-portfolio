"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({ i, title, url, src, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range ?? [0, 1], [1, targetScale ?? 1]);

  return (
    <a
      href={url}
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-1/4 h-[500px] w-[100vw] p-2 object-cover origin-top backdrop-blur-[20px]  shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
      >
        <h2 className="text-center m-0 text-[28px] uppercase">{title}</h2>
        <div className="flex justify-center h-full mt-5 gap-[50px]">
          <div className="relative w-full h-full overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image fill src={`/images/${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div className="w-[80px] h-[80px] rounded-full bg-[#455ce9] text-white absolute z-20 flex items-center justify-center text-[14px] font-light pointer-events-none">
        View
      </motion.div>
    </a>
  );
};

export default Card;
