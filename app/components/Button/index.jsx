'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Button = () => {
  return (
    <div
      className="flex gap-1.5 items-center justify-center bg-button py-2 px-5 rounded-full text-xl overflow-hidden cursor-pointer w-fit"
    >
      <Link href="/#">let’s talk</Link>

      <motion.svg
        width="40"
        height="23"
        viewBox="0 0 91 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ x: 0 }}
        whileHover={{ x: 12 }}
        transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
      >
        <path
          d="M90.2758 12.1974C90.8616 11.6116 90.8616 10.6618 90.2758 10.0761L80.7299 0.530117C80.1441 -0.0556694 79.1943 -0.0556694 78.6085 0.530117C78.0228 1.1159 78.0228 2.06565 78.6085 2.65144L87.0938 11.1367L78.6085 19.622C78.0228 20.2078 78.0228 21.1575 78.6085 21.7433C79.1943 22.3291 80.1441 22.3291 80.7299 21.7433L90.2758 12.1974ZM0.211914 11.1367V12.6367H89.2151V11.1367V9.63672H0.211914V11.1367Z"
          fill="white"
        />
      </motion.svg>
    </div>
  );
};

export default Button;
