"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Description = () => {
  const text = "Why Choose Our Service?".split(" ");

  return (
    <div className="min-h-screen flex items-center justify-center min-w-screen pb-[70px]">
      <div className="mx-10 flex flex-col gap-[51px]">
        <motion.h1 className="w-full text-center ">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}>
              {el}{" "}
            </motion.span>
          ))}
        </motion.h1>
        <div className="grid grid-cols-3 gap-10">
          <motion.p
          className="rounded-3xl bg-black p-5"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.4 }}>
            <span className="text-[#EAC57E] mb-6 bg-[#0c0c0c] px-3 py-2 rounded-full text-[14px]">Immediate Access</span> <br /> <br /> Our
            service offers a unique solution that allows project creators to
            access their locked ETH without waiting for lengthy lock-in periods
            to expire. This ensures that innovation never has to take a back
            seat due to locked funds.
          </motion.p>
          <motion.p
          className="rounded-3xl bg-black p-5"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.4 }}>
            <span className="text-[#EAC57E] mb-6  bg-[#0c0c0c] px-3 py-2 rounded-full text-[14px]">
              Maximize Your Ethereum&apos;s Potential
            </span>
            <br />
            <br />
            With our service, your Ethereum isn&apos;t just sitting idle.
            It&apos;s an active asset, primed to fund your next venture or idea.
          </motion.p>
          <motion.p
          className="rounded-3xl bg-black p-5"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.4 }}>
            <span className="text-[#EAC57E] mb-6 bg-[#0c0c0c] px-3 py-2 rounded-full text-[14px]">
              Global Operation, Personalized Experience
            </span>
            <br />
            <br />
            Our service is designed for global accessibility, ensuring that no
            matter where you are, you can unlock your liquidity. Plus, we ensure
            a personalized and confidential experience, understanding the unique
            needs and privacy concerns of each client.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="flex gap-4 items-center">
          <p>Secured by:</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Image
              src={"/kleros-logo.svg"}
              alt="kleros"
              className="opacity-100 duration-100 ease-linear transition-all hover:opacity-80"
              width={140}
              height={48}
            />
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.4 }}>
          <span className="text-[#EAC57E]">Safety First:</span>
          <br />
          In collaboration with Kleros, we guarantee the utmost security for
          every transaction. Kleros a renowned decentralized arbitration
          service, ensures that every swap is executed with precision and
          security in mind.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="w-full text-center">
          © 2023 ZeroX Labs
        </motion.p>
      </div>
    </div>
  );
};

export default Description;
