"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
//[url('/background.jpg')]
const Hero = () => {
  return (
    <div className="bg-black bg-cover min-h-screen min-w-screen pb-[70px] rounded-3xl border border-[#EAC57E] m-10 relative ">
      <div className="flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex gap-5 items-end absolute left-10 top-10">
          <Image src={"/logo.svg"} alt="logo" width={41} height={40} />
          <p className="">ØxLiquidity</p>
        </motion.div>
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
            <button className="text-[32px] rounded-full duration-300 ease-in-out transition-all text-black py-4 px-10 h-full">
              Apply now
            </button>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
