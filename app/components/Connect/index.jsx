"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../Button";
const Connect = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#191919] overflow-hidden  ">
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
        <div className="flex flex-col justify-center items-start w-full pt-35">
          <p className=" px-6 lg:px-0 text-[5.5rem] lg:text-[8.3rem] font-extrabold text-white ">
            Let me help
          </p>
          <span className="font-robuka text-[5.5rem] lg:text-[12.5rem] text-end self-center mt-[-40px]  lg:mt-[-90px] text-[#E24FE3]">
            You
          </span>
        </div>
        <div className="flex gap-2.5 justify-center items-center w-full">
          <Link href="#">
            <motion.svg
              width="52"
              height="53"
              viewBox="0 0 62 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-10 h-10 lg:w-20 lg:h-20"
            >
              <rect
                x="0.921875"
                y="0.0888672"
                width="61"
                height="62.6328"
                rx="30.5"
                fill="#E24FE3"
              />
              <path
                d="M53.9219 17.4777C52.2306 18.2114 50.4421 18.6965 48.6119 18.9177C50.5428 17.7642 51.9897 15.9495 52.6844 13.8102C50.8699 14.8904 48.8836 15.6514 46.8119 16.0602C45.4271 14.5585 43.5831 13.5589 41.5689 13.2181C39.5548 12.8774 37.4846 13.2148 35.6829 14.1774C33.8812 15.14 32.45 16.6734 31.6137 18.5371C30.7774 20.4008 30.5833 22.4893 31.0619 24.4752C27.3931 24.2897 23.8044 23.3344 20.5288 21.6714C17.2533 20.0085 14.3643 17.675 12.0494 14.8227C11.2374 16.2406 10.8108 17.8463 10.8119 19.4802C10.809 20.9976 11.1814 22.4921 11.8958 23.8307C12.6103 25.1694 13.6447 26.3106 14.9069 27.1527C13.4398 27.1128 12.0041 26.7191 10.7219 26.0052V26.1177C10.7329 28.2437 11.4779 30.3007 12.8308 31.9406C14.1838 33.5806 16.0617 34.7029 18.1469 35.1177C17.3442 35.362 16.5108 35.4908 15.6719 35.5002C15.0911 35.4934 14.5118 35.4408 13.9394 35.3427C14.5332 37.1715 15.6823 38.7698 17.2268 39.9151C18.7713 41.0604 20.6344 41.6957 22.5569 41.7327C19.3106 44.2871 15.3026 45.6811 11.1719 45.6927C10.4198 45.6952 9.66828 45.6501 8.92188 45.5577C13.1393 48.2808 18.0542 49.7263 23.0744 49.7202C26.5387 49.7562 29.9754 49.1015 33.1839 47.7944C36.3923 46.4873 39.3082 44.554 41.7611 42.1073C44.214 39.6607 46.1548 36.7498 47.4701 33.5448C48.7855 30.3397 49.449 26.9046 49.4219 23.4402V22.2477C51.1874 20.931 52.7102 19.3169 53.9219 17.4777Z"
                fill="black"
              />
            </motion.svg>
          </Link>
          <Link href="#">
            <motion.svg
              width="53"
              height="54"
              viewBox="0 0 63 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-10 h-10 lg:w-20 lg:h-20"
            >
              <rect
                x="0.921875"
                y="0.905273"
                width="62"
                height="63"
                rx="31"
                fill="#E24FE3"
              />
              <path
                d="M36.123 36.0064H42.1254L44.5264 26.4026H36.123V21.6007C36.123 19.1277 36.123 16.7988 40.9249 16.7988H44.5264V8.73164C43.7437 8.6284 40.7881 8.39551 37.6669 8.39551C31.1483 8.39551 26.5193 12.3739 26.5193 19.68V26.4026H19.3164V36.0064H26.5193V56.4145H36.123V36.0064Z"
                fill="black"
              />
            </motion.svg>
          </Link>
          <Link href="#">
            <motion.svg
              width="58"
              height="57"
              viewBox="0 0 68 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-10 h-10 lg:w-20 lg:h-20"
            >
              <rect
                x="0.921875"
                y="0.189453"
                width="66.7717"
                height="66.4315"
                rx="33.2158"
                fill="#E24FE3"
              />
              <path
                d="M22.6402 25.9768V54.621H13.451V25.9768H22.6402ZM23.225 17.1321C23.2435 18.5388 22.7748 19.7142 21.8187 20.6584C20.8627 21.6026 19.605 22.0747 18.0456 22.0747H17.9899C16.4676 22.0747 15.2424 21.6026 14.3142 20.6584C13.386 19.7142 12.9219 18.5388 12.9219 17.1321C12.9219 15.7061 13.3999 14.5259 14.356 13.5913C15.312 12.6567 16.5604 12.1895 18.1013 12.1895C19.6421 12.1895 20.8766 12.6567 21.8048 13.5913C22.733 14.5259 23.2064 15.7061 23.225 17.1321ZM55.6936 38.2033V54.621H46.5322V39.3017C46.5322 37.2784 46.1563 35.6935 45.4044 34.5469C44.6526 33.4004 43.4784 32.8271 41.8819 32.8271C40.7123 32.8271 39.7331 33.1595 38.9441 33.8243C38.1551 34.4891 37.5657 35.3129 37.1759 36.2957C36.9717 36.8737 36.8696 37.6542 36.8696 38.6369V54.621H27.7082C27.7453 46.9325 27.7639 40.6988 27.7639 35.9199C27.7639 31.1411 27.7546 28.2892 27.736 27.3642L27.7082 25.9768H36.8696V30.139H36.8139C37.1852 29.5224 37.5657 28.9829 37.9556 28.5204C38.3454 28.0579 38.8699 27.5569 39.5289 27.0174C40.1879 26.4778 40.9954 26.0587 41.9515 25.76C42.9075 25.4614 43.9703 25.312 45.1399 25.312C48.3143 25.312 50.8669 26.4056 52.7976 28.5927C54.7282 30.7798 55.6936 33.9833 55.6936 38.2033Z"
                fill="black"
              />
            </motion.svg>
          </Link>
        </div>

        <Button />

        <p className=" text-sm lg:text-base text-gray-500 text-center w-full mt-6 ">
          Copyright © {new Date().getFullYear()} asma
        </p>
      </motion.div>
    </div>
  );
};
export default Connect;
