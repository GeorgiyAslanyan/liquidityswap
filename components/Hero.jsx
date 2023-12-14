"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
//[url('/background.jpg')]

const arr = [
  {
    title: "UNCX Network (ERC-20)",
    descr: "6 688 locking operations in 90 days",
  },
  {
    title: "Team Finance (ERC-20)",
    descr: "805 locking operations in 90 days",
  },
  { title: "PinkSale (ERC-20)", descr: "3 022 locking operations in 90 days" },
  { descr: "Realized profit on our services 74%" },
];

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
          <motion.p>
            <span className="text-[#EAC57E]">Do not wait</span> until the end of
            the liquidity lock-in period;
          </motion.p>
          <motion.p>
            <span className="text-[#EAC57E]">Get your ETH</span> and fund your
            new ideas today!
          </motion.p>
          <motion.p>Let your ETH work for you!</motion.p>
          <motion.a
            href="https://t.me/LPSwapBot"
            target="_blank"
            rel="noopener noreferrer">
            <button className="text-[25px] items-center rounded-full bg-[#1F2123] hover:bg-[#36393c] duration-300 ease-in-out transition-all text-white py-3 px-5 h-full">
              Apply now
            </button>
          </motion.a>
        </div>
        <div className="flex flex-col gap-6 pt-10 w-full px-14">
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="bg-[#161616] border-0 h-[1px]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.7 }}>
            Latest Ecosystem News
          </motion.p>
          <div className="grid grid-cols-4 gap-4">
            {arr.map((el, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.5, duration: 0.7 }}
                className="flex gap-3 p-3 items-center rounded-xl bg-[#1F2123]"
                key={index}>
                <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
                <div className="flex flex-col gap-1">
                    <p className="uppercase text-sm text-gray-400">
                      {el.title}
                    </p>
                  <p className="text-base">{el.descr}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
