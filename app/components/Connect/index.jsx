"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../Button";
const Connect = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#111112] overflow-hidden  ">
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        initial={{ x: -50 }}
        animate={{
          x: [0, 150, -150, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(135deg, #E24FE3, #B803B9)",
          backgroundSize: "200% 200%",
          filter: "blur(80px)",
          opacity: 0.8,
        }}
      />

      {/* Second Shape: Ellipse */}
      <motion.div
        className="absolute w-[400px] h-[250px] rounded-[50%]"
        initial={{ x: 50 }}
        animate={{
          x: [0, 120, -120, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(135deg, #301036, #B803B9)",
          backgroundSize: "200% 200%",
          filter: "blur(90px)",
          opacity: 0.8,
        }}
      />

      <motion.div className=" relative container m-auto h-screen flex flex-col justify-around items-center">
        <div className="flex flex-col items-center justify-center w-full pt-35">
          <motion.div
            className="flex flex-col justify-center items-start w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="px-6 lg:px-0 text-[88px] lg:text-[133px] font-extrabold text-white">
              Let me help
            </p>
            <span className="font-robuka text-[88px] lg:text-[200px] text-end self-center mt-[-40px] lg:mt-[-90px] text-[#E24FE3]">
              You
            </span>
          </motion.div>
          <Button />
          <motion.div className="flex gap-2.5 justify-center items-center w-full mt-8"
          
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <Link
                href="https://www.linkedin.com/in/asmakolaib/"
                className="bg-button rounded-full p-3 inline-block"
              >
                <svg
                  width="53"
                  height="51"
                  viewBox="0 0 53 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                >
                  <path
                    d="M0 5.92424C0 4.20704 0.596864 2.79037 1.79054 1.67424C2.98422 0.558064 4.53605 0 6.44595 0C8.32177 0 9.83943 0.549461 10.999 1.64848C12.1927 2.78182 12.7896 4.25855 12.7896 6.07879C12.7896 7.72727 12.2098 9.10098 11.0502 10.2C9.85652 11.3333 8.28764 11.9 6.34363 11.9H6.29247C4.41665 11.9 2.89899 11.3333 1.73938 10.2C0.579777 9.06667 0 7.6414 0 5.92424ZM0.665058 51V16.5879H12.0222V51H0.665058ZM18.3147 51H29.6718V31.7848C29.6718 30.5828 29.8083 29.6555 30.0811 29.003C30.5585 27.8353 31.2833 26.8479 32.2553 26.0409C33.2273 25.2338 34.4466 24.8303 35.9131 24.8303C39.733 24.8303 41.6429 27.4232 41.6429 32.6091V51H53V31.2697C53 26.1869 51.8063 22.3318 49.4189 19.7045C47.0315 17.0773 43.8768 15.7636 39.9546 15.7636C35.555 15.7636 32.1274 17.6697 29.6718 21.4818V21.5848H29.6207L29.6718 21.4818V16.5879H18.3147C18.3829 17.6869 18.417 21.104 18.417 26.8394C18.417 32.5747 18.3829 40.6282 18.3147 51Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <Link
                href="https://x.com/as_kolaib"
                className="bg-button rounded-full p-3 inline-block"
              >
                 <svg
                width="44"
                height="38"
                viewBox="0 0 44 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <path
                  d="M34.6526 0H41.3995L26.6594 16.0964L44 38H30.4225L19.788 24.7155L7.61992 38H0.868824L16.6349 20.7831L0 0H13.9221L23.5347 12.1425L34.6526 0ZM32.2846 34.1415H36.0232L11.8908 3.65577H7.8789L32.2846 34.1415Z"
                  fill="black"
                />
              </svg>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              <Link
                href="https://github.com/AsmaKolaib"
                className="bg-button rounded-full p-3 inline-block"
              >
              <svg
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <path
                  d="M23.0001 0C10.2991 0 0 10.3035 0 23.0139C0 33.1822 6.59021 41.8087 15.7289 44.8519C16.8783 45.0649 17.3004 44.3526 17.3004 43.7447C17.3004 43.196 17.279 41.383 17.2692 39.46C10.8704 40.8521 9.52022 36.7446 9.52022 36.7446C8.47398 34.0845 6.9665 33.3773 6.9665 33.3773C4.8798 31.9489 7.1238 31.9781 7.1238 31.9781C9.43346 32.1406 10.6496 34.3498 10.6496 34.3498C12.701 37.8682 16.0302 36.8509 17.3426 36.2631C17.549 34.7754 18.1452 33.7603 18.8029 33.1856C13.6943 32.6035 8.3239 30.6302 8.3239 21.812C8.3239 19.2995 9.2224 17.2464 10.6938 15.6348C10.455 15.055 9.66778 12.7144 10.9166 9.54435C10.9166 9.54435 12.848 8.92579 17.2433 11.9034C19.0778 11.3933 21.0454 11.1377 23.0001 11.1291C24.9547 11.1377 26.9238 11.3933 28.762 11.9034C33.152 8.92579 35.0807 9.54435 35.0807 9.54435C36.3326 12.7144 35.545 15.055 35.3062 15.6348C36.7808 17.2464 37.6732 19.2993 37.6732 21.812C37.6732 30.6511 32.2927 32.5976 27.1712 33.1672C27.9961 33.8814 28.7311 35.2821 28.7311 37.4291C28.7311 40.5083 28.7044 42.9867 28.7044 43.7447C28.7044 44.3571 29.1184 45.0748 30.2844 44.8488C39.4181 41.8022 46 33.1788 46 23.0139C46 10.3035 35.7023 0 23.0001 0Z"
                  fill="black"
                />
              </svg>
              </Link>
            </motion.div>
     

          </motion.div>
        </div>

      

        <p className=" text-sm lg:text-base text-gray-500 text-center w-full mt-6 ">
          Copyright © {new Date().getFullYear()} asma
        </p>
      </motion.div>
    </div>
  );
};
export default Connect;
