"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lines from "./Lines";
import InfinitySign from "./InfinitySign";
import LinesTop from "./LinesTop";
import LinesBottom from "./LinesBottom";
//

const arr = [
  {
    title: "In progress",
    descr: "Decentralized Liquidity Listing and Auction Platform",
  },
  {
    title: "In progress",
    descr: "Decentralized Venture Capital for Emerging Projects",
  },
  { title: "In progress", descr: "Advanced Liquidity Locker Solutions" },
];

const Hero = () => {
  return (
    <div className="bg-[url('/background.svg')] bg-234 md:bg-contain min-h-screen min-w-screen pb-[70px] rounded-2xl sm:rounded-3xl border border-[#EAC57E] mt-[72px] md:mt-5 lg:mt-10 m-3 md:m-5 lg:m-10 relative ">
      <div className="flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
          className="flex gap-5 items-center absolute left-6 top-6">
          <Image src={"/logo.svg"} alt="logo" width={41} height={40} />
          <p className="">ØxLiquidity</p>
        </motion.div>
        <motion.video
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
          width="100%"
          height="100%"
          className="pointer-events-none mt-8 object-cover md:object-contain h-[350px] md:h-full"
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
            <button className="items-center w-[90%] sm:w-fit rounded-full bg-[#1F2123] hover:bg-[#36393c] duration-300 ease-in-out transition-all text-white py-3 px-5 h-full">
              Apply now
            </button>
          </motion.a>
        </div>
        <div className="flex flex-col gap-6 pt-10 w-full px-5 md:px-14">
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="bg-gradient-to-r from-transparent via-[#a2a2a2] to-transparent border-0 h-[1px]"
          />
          <motion.p
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.7 }}>
            Pioneering Liquidity Solutions in Decentralized Finance
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {arr.map((el, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.5, duration: 0.7 }}
                className="flex gap-3 p-3 items-start rounded-xl bg-[#1F2123]"
                key={index}>
                {/* <Image src={"/logo.svg"} alt="logo" width={40} height={40} /> */}
                <div className="flex flex-col gap-1">
                  <p className="uppercase text-base text-gray-400">
                    {el.title}
                  </p>
                  <p className="">{el.descr}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-justify">
            Launched in September 2023, 0xLiquidity emerged as a new protocol in
            the DeFi space, revolutionizing how liquidity is managed and
            utilized. At its core, 0xLiquidity provides a unique service that
            enables holders to sell their liquidity, significantly reducing the
            waiting period typically associated with locked funds in DeFi
            projects. This allows devs to create more, invest more, and leverage
            their abilities to profit more.
          </p>
          <div className="relative">
            <div>
              <Lines />
            </div>
            <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-1">
              <div className="w-[100px] ">
                <InfinitySign />
              </div>
            </div>
            <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-1">
              <div className=" ">
                <Image
                  width={600}
                  height={300}
                  className="w-full opacity-30"
                  alt="fade"
                  src={"/fade.svg"}
                />
              </div>
            </div>
          </div>
          <p className="text-justify">
            Over time, the protocol has not only established its effectiveness
            in meeting market demands, but has also robustly validated the
            security of its solutions. This success marks a pivotal moment for
            us, as we gear up to enter the main phase of our implementation
            strategy.
          </p>
          <div className="w-full relative">
            <LinesTop />
            <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-1">
              <div className=" ">
                <Image
                  width={600}
                  height={300}
                  className="w-full opacity-30"
                  alt="fade"
                  src={"/fade.svg"}
                />
              </div>
            </div>
          </div>
          
          <div className="absolute rotate-180 w-full flex items-center justify-center left-0 top-[90px]">
            <div className='w-[90%] relative'>
            <LinesTop />
            <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-1">
              <div className=" ">
                <Image
                  width={600}
                  height={300}
                  className="w-full opacity-20"
                  alt="fade"
                  src={"/fade.svg"}
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
