'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0, duration: 0.4 }} className="fixed z-[100] w-full bg-black justify-center items-center flex py-5">
      <div className="w-[1200px]">
        <div className="flex justify-between items-end w-full">
        <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.4 }}  className="flex gap-5 items-end">
          <Image src={"/logo.svg"} alt="logo" width={41} height={40} />
          <p className="">ØxLiquidity</p>
        </motion.div>
        <motion.p
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.4 }} >
          Price ETH: <span className="text-[#EAC57E]">$2,179</span>
        </motion.p>
        <div className="flex gap-5 items-end">
          <motion.a 
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.4 }} href="http://" target="_blank" rel="noopener noreferrer">
            <Image src={"/tg.svg"} className="opacity-100 duration-100 ease-linear transition-all hover:opacity-80" alt="tg" width={29} height={36} />
          </motion.a>
          <motion.a
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 0.4 }} href="http://" target="_blank" rel="noopener noreferrer">
            <Image src={"/tw.svg"} className="opacity-100 duration-100 ease-linear transition-all hover:opacity-80" alt="tg" width={29} height={36} />
          </motion.a>
          <motion.a 
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.4 }} href="http://" target="_blank" rel="noopener noreferrer">
            <button className="border bg-transparent border-[#EAC57E] text-[#EAC57E] hover:bg-[#EAC57E] duration-150 ease-linear transition-all hover:text-black px-6 h-full">
              Docs
            </button>
          </motion.a>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
