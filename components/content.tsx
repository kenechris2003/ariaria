"use client";

import { motion } from "framer-motion";
import Image from "next/image";






export default function Content() {
  return (
    <div className="bg-white mt-50">
     
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <div className="text-black text-center lg:mx-50  mx-10 relative">

          <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          transition={{
            repeat: Infinity, 
            duration: 5, // Total duration of one cycle
            ease: "easeInOut", // Smooth start and stop
            repeatDelay: 5, 
             
          }}
          className="origin-bottom">
            Explore.
            <span className="text-orange-500"> Two. </span>
            Repeat...
            </motion.div>
          </div>
        </h1>
      

      <div className="flex lg:flex mt-10 text-center justify-center items-center">
        <div className="flex flex-cols-1 items-center border ml-7 lg:w-3xl w-2xs border-gray-400 shadow-xl pl-4 pr-4 pt-2 pb-2 rounded-bl-xl rounded-tr-sm rounded-br-sm rounded-tl-xl border-r-0 text-black relative">
        <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black mr-1"
              >
                <path
                  d="M13.4166 24.5002C19.5378 24.5002 24.5 19.538 24.5 13.4168C24.5 7.29567 19.5378 2.3335 13.4166 2.3335C7.29549 2.3335 2.33331 7.29567 2.33331 13.4168C2.33331 19.538 7.29549 24.5002 13.4166 24.5002Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M25.6666 25.6668L23.3333 23.3335"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
          <input
            type="search"
            placeholder="Search for an item"
            className="w-2xl ml-3 outline-0 h-5 text-1xl"
          />
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-xl flex hover:bg-orange-600 transition gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
        <path d="M5.39844 2.1001H18.5984C19.6984 2.1001 20.5984 3.0001 20.5984 4.1001V6.3001C20.5984 7.1001 20.0984 8.1001 19.5984 8.6001L15.2984 12.4001C14.6984 12.9001 14.2984 13.9001 14.2984 14.7001V19.0001C14.2984 19.6001 13.8984 20.4001 13.3984 20.7001L11.9984 21.6001C10.6984 22.4001 8.89844 21.5001 8.89844 19.9001V14.6001C8.89844 13.9001 8.49844 13.0001 8.09844 12.5001L4.29844 8.5001C3.79844 8.0001 3.39844 7.1001 3.39844 6.5001V4.2001C3.39844 3.0001 4.29844 2.1001 5.39844 2.1001Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" stroke-minecap="round" strokeLinejoin="round"></path>
        <path d="M10.93 2.1001L6 10.0001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
          <p className="hidden lg:flex">Filter</p>
        </button>

      </div>

      <div className="absolute top-[60%]  lg:top-1/2 left-1/2 -translate-x-1/2 w-40 lg:w-[13%] aspect-square bg-orange-500 rounded-full blur-xl mt-1 lg:mt-14"></div>

      <svg
        width="1728"
        height="672"
        viewBox="0 0 1728 672"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-full h-90 lg:h-60 xl:h-72 absolute bottom-0"
      >
        <rect
          x="-1036"
          y="364"
          width="3800"
          height="3800"
          rx="1900"
          fill="#552A00"
        ></rect>
      </svg>

      {/* Rotating Image */}
        <div className="flex justify-center relative overflow-hidden">
    <motion.div
      animate={{ rotate: [-20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2, // Total duration of one cycle
        ease: "easeIn", // Smooth start and stop
        repeatDelay: 5,
      }}
      className="origin-bottom"
    >
      <Image
        src="/woman2.png"
        alt="logo"
        width={1080}
        height={720}
        className="object-contain -mt-20 lg:-mt-30 lg:w-[600px] lg:h-[800px] md:w-[500px] md:h-[650px] sm:w-[450px] sm:h-[575px] w-[400px] h-[500px]"
        loading="eager"
      />
    </motion.div>
  </div>
        

    </div>
  );
}