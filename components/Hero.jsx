"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lines from "./Lines";
import InfinitySign from "./InfinitySign";
import LinesTop from "./LinesTop";
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
//[url('/background.svg')]
const Hero = () => {
  return (
    <div className="bg-black min-h-screen min-w-screen rounded-2xl pb-[60px] xl:pb-0
    sm:rounded-3xl border border-[#EAC57E] mt-[72px] md:mt-5 lg:mt-10 mx-3 md:mx-5 lg:mx-10 relative overflow-hidden">
      <div className="absolute opacity-50 pointer-events-none bg-[url('/clearbg.png')] bg-234 md:bg-contain bg-repeat z-[6] w-full h-full "></div>
      <div className="z-[6] absolute pointer-events-none rotate-180 w-full flex items-center justify-center left-0 top-[70px] md:top-[90px]">
        <div className="w-[90%] relative">
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
      <div className="relative flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
          className="flex gap-5 items-center z-[7] absolute left-6 top-6">
          <Image src={"/logo.svg"} alt="logo" width={41} height={40} />
          <p className="">ØxLiquidity</p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
          width="100%"
          height="100%"
          src="/clock_alpha.gif"
          className="pointer-events-none z-[3] block md:hidden mt-12 object-cover md:object-contain h-[350px] md:h-full"
          alt="Video tooltip on hover."
        />
        <motion.video
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
          width="100%"
          height="100%"
          className="pointer-events-none hidden md:block mt-8 object-cover md:object-contain h-[350px] md:h-full"
          title="Video tooltip on hover."
          poster="/pre.png"
          muted
          playsInline
          loop
          autoPlay>
          <source src="/clock_alpha.webm" type="video/webm" />
        </motion.video>
        <div className="flex text-center z-[7] flex-col gap-7 -mt-8 md:-mt-12">
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
              className="flex self-center justify-center w-fit"
              rel="noopener noreferrer">
              <button className="items-center relative z-[7] text-base min-w-[188px] lg:text-xl whitespace-nowrap justify-center w-fit flex hover:gap-4 gap-2 sm:w-fit rounded-2xl bg-[#1F2123] hover:bg-[#36393c] duration-300 ease-in-out transition-all text-white py-3 px-5 h-full">
                Apply now{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </motion.a>
        </div>
        <div className="relative w-[90%] pointer-events-none xl:-translate-y-14">
          <div>
            <Lines />
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
        <div className="flex flex-col z-[7] gap-6 w-full px-5 md:px-14 xl:-translate-y-24">
          <motion.p
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.7 }}>
            <span className="text-[#EAC57E]">Pioneering</span> Liquidity{" "}
            <span className="text-[#EAC57E]">Solutions</span> in Decentralized
            Finance
          </motion.p>

          <p className="text-start lg:text-justify text-lg lg:text-xl">
            Launched in September 2023, 0xLiquidity emerged as a new protocol in
            the DeFi space, revolutionizing how liquidity is managed and
            utilized. At its core, 0xLiquidity provides a unique service that
            enables holders to sell their liquidity, significantly reducing the
            waiting period typically associated with locked funds in DeFi
            projects. This allows devs to create more, invest more, and leverage
            their abilities to profit more.
          </p>

          <p className="text-start lg:text-justify text-lg lg:text-xl">
            Over time, the protocol has not only established its effectiveness
            in meeting market demands, but has also robustly validated the
            security of its solutions. This success marks a pivotal moment for
            us, as we gear up to enter the main phase of our implementation
            strategy.
          </p>
          <div className="grid grid-cols-1 relative z-[7] sm:grid-cols-3 gap-4">
            {arr.map((el, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.5, duration: 0.7 }}
                className="flex gap-3 p-3 items-start rounded-xl bg-[#1F2123]"
                key={index}>
                {/* <Image src={"/logo.svg"} alt="logo" width={40} height={40} /> */}
                <div className="flex flex-col gap-1">
                  <p className="uppercase text-base text-[#EAC57E]">
                    {el.title}
                  </p>
                  <p className="">{el.descr}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row relative z-[7] items-center justify-center gap-4">
            <motion.a
              href="https://t.me/LPSwapBot"
              target="_blank"
              className="flex justify-center w-[90%] md:w-fit"
              rel="noopener noreferrer">
              <button className="items-center min-w-[188px] text-base lg:text-xl w-[90%] whitespace-nowrap  justify-center flex hover:gap-4 gap-2 sm:w-fit rounded-2xl bg-[#1F2123] hover:bg-[#36393c] duration-300 ease-in-out transition-all text-white py-3 px-5 h-full">
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </motion.a>
            <motion.a
              href="https://t.me/LPSwapBot"
              target="_blank"
              className="flex justify-center w-[90%] md:w-fit"
              rel="noopener noreferrer">
              <button className="items-center text-base min-w-[188px] lg:text-xl whitespace-nowrap justify-center w-[90%] flex hover:gap-4 gap-2 sm:w-fit rounded-2xl bg-[#1F2123] hover:bg-[#36393c] duration-300 ease-in-out transition-all text-white py-3 px-5 h-full">
                Buy ØxLP{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </motion.a>
          </div>
          <div className="flex flex-row relative z-[7] items-center justify-center gap-4">
            <motion.a
              className="rounded-xl flex items-center justify-center bg-[#1F2123] hover:bg-[#36393c] duration-300 ease-in-out transition-all p-3"
              href="https://t.me/LPSwapBot"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={"/tg.svg"}
                className=""
                alt="tg"
                width={30}
                height={37}
              />
            </motion.a>
            <motion.a
              className="rounded-xl flex items-center justify-center bg-[#1F2123] hover:bg-[#36393c] duration-300 ease-in-out transition-all p-3"
              href="https://x.com/0xLiquiditySwap"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={"/tw.svg"}
                className=""
                alt="tg"
                width={30}
                height={37}
              />
            </motion.a>
          </div>

          <div className="w-full relative z-[7] pointer-events-none -mt-5 md:-mt-20">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
