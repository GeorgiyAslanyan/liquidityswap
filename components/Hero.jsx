'use client'
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover min-h-screen min-w-screen pb-[70px] border-b-2 border-b-[#EAC57E]">
      <div className="flex flex-col justify-center items-center">
        <motion.video
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
          width="100%"
          height="100%"
          className="pointer-events-none"
          title="Video tooltip on hover."
          poster="/pre.png"
          muted
          loop
          autoPlay>
          <source src="/clock_alpha.webm" type="video/webm" />
        </motion.video>
        <div className="flex text-center flex-col gap-7">
          <motion.p
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 0.4 }}>
            <span className="text-[#EAC57E]">Do not wait</span> until the end of
            the liquidity lock-in period;
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}>
            <span className="text-[#EAC57E]">Get your ETH</span> and fund your
            new ideas today!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}>
            Let your ETH work for you!
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            href="http://"
            target="_blank"
            rel="noopener noreferrer">
            <button className="border text-[32px] bg-transparent border-[#EAC57E] text-[#EAC57E] hover:bg-[#EAC57E] duration-150 ease-linear transition-all hover:text-black py-3 px-10">
              Apply now
            </button>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
