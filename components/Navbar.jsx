"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [burger, setBurger] = useState(false);
  const [isDe, setIsDe] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0, duration: 0.4 }}
      className={`fixed z-[100] right-14`}>
      <div className={`rounded-full border  justify-center transition-all ease-in-out duration-300 items-center flex bg-black border-[#EAC57E] py-5 px-6 ${scrollY > 50 ? 'mt-5 opacity-80 hover:opacity-100' : 'mt-16 opacity-100 '} `}>
        <div className="flex justify-between items-center w-full gap-5">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}>
            Price ETH: <span className="text-[#EAC57E]">$2,179</span>
          </motion.p>
          <div className="flex gap-5 items-end">
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              href="http://"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={"/tg.svg"}
                className="opacity-100 duration-100 ease-linear transition-all hover:opacity-80"
                alt="tg"
                width={29}
                height={36}
              />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
              href="http://"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={"/tw.svg"}
                className="opacity-100 duration-100 ease-linear transition-all hover:opacity-80"
                alt="tg"
                width={29}
                height={36}
              />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              href="http://"
              target="_blank"
              rel="noopener noreferrer">
              <button className="rounded-xl  duration-150 ease-linear transition-all text-black px-6 h-full">
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
