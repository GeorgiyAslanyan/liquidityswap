"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


const Description = () => {
  return (
    <div className="min-h-screen flex items-center justify-center min-w-screen pb-[70px]">
      <div className="mx-3 md:mx-5 lg:mx-10 flex flex-col gap-[51px]">
        <motion.h1 className="w-full pt-10 lg:pt-0 text-center ">
          Why Us?
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 text-base lg:text-xl">
          <motion.div
            className="rounded-3xl flex flex-col bg-[#3c3c3c] p-5 gap-5"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.4 }}>
            <p className="text-[#EAC57E] bg-[#1F2123] px-4 py-2 rounded-xl 2xl:rounded-full w-fit">
              Immediate Access
            </p>{" "}
            <p className="">
              Our platform offers a unique solution that allows project creators
              to access their locked ETH without waiting for lengthy lock-in
              periods to expire. This ensures that innovation never has to take
              a back seat due to locked funds.
            </p>
          </motion.div>
          <motion.div
            className="rounded-3xl flex flex-col gap-5 bg-[#3c3c3c] p-5"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.4 }}>
            <p className="text-[#EAC57E] bg-[#1F2123] px-4 py-2 rounded-xl 2xl:rounded-full w-fit">
              Maximize Your Ethereum&apos;s Potential
            </p>
            <p className="">
              With our platform, your Ethereum isn&apos;t just sitting idle.
              It&apos;s an active asset, primed to fund your next venture or
              idea.
            </p>
          </motion.div>
          <motion.div
            className="rounded-3xl gap-5 flex flex-col bg-[#3c3c3c] p-5"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.4 }}>
            <p className="text-[#EAC57E] bg-[#1F2123] px-4 py-2 rounded-xl 2xl:rounded-full w-fit">
              Safety First
            </p>
            <p className="">
              In collaboration with Kleros, we guarantee the utmost security for
              every transaction. Kleros a renowned decentralized arbitration
              service, ensures that every swap is executed with precision and
              security in mind.
            </p>
          </motion.div>
          <motion.div
            className="rounded-3xl gap-5 col-span-1 md:col-span-3 flex flex-col bg-[#3c3c3c] p-5"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.4 }}>
            <p className="text-[#EAC57E] bg-[#1F2123] px-4 py-2 rounded-xl 2xl:rounded-full w-fit">
              Global Operation, Personalized Experience
            </p>
            <p className="">
              Our platform is designed for global accessibility, ensuring that no
              matter where you are, you can unlock your liquidity. Plus, we
              ensure a personalized and confidential experience, understanding
              the unique needs and privacy concerns of each client.
            </p>
          </motion.div>
        </div>
        <p className="text-center">
            Follow us on Twitter and join Telegram for real-time updates and
            community interactions:
          </p>
          <div className="flex flex-row items-center justify-center gap-4">
            <motion.a
              href="https://t.me/LPSwapBot"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={"/tg.svg"}
                className="opacity-100 duration-100 ease-linear transition-all hover:opacity-80"
                alt="tg"
                width={30}
                height={37}
              />
            </motion.a>
            <motion.a
              href="https://x.com/0xLiquiditySwap"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={"/tw.svg"}
                className="opacity-100 duration-100 ease-linear transition-all hover:opacity-80"
                alt="tg"
                width={30}
                height={37}
              />
            </motion.a>
          </div>
        <div className="text-sm flex flex-col md:flex-row gap-5 items-center justify-between w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.4 }}
            className="flex gap-4 items-center">
            <p>Secured by:</p>
            <a
              href="https://kleros.io/"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={"/kleros-logo.svg"}
                alt="kleros"
                className="opacity-100 duration-100 ease-linear transition-all hover:opacity-80"
                width={125}
                height={37}
              />
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 0.4 }}
            className="">
            © 2023 ZeroX Labs
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Description;
