"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
      className="absolute z-50 top-0 left-0 w-full bg-transparent"
    >
      <div className="container mx-auto flex justify-between items-center p-8">
        <h1 className="font-robuka text-2xl  lg:text-4xl">AK</h1>
        <ul className="flex gap-8 text-lg lg:text-2xl">
          <Link href="#about">
            <li>About</li>
          </Link>
          <Link href="#projects">
            <li>Projects</li>
          </Link>
          <Link href="#connect">
            <li>Connect</li>
          </Link>
        </ul>
      </div>
    </motion.div>
  );
};

export default Header;
