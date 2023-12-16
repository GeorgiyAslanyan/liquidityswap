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
      className={`fixed z-[100] w-screen sm:w-fit right-0 sm:right-10 md:right-14`}>
      <div className={`rounded-2xl sm:rounded-full border justify-center transition-all ease-in-out duration-300 items-center flex bg-black mx-3 sm:mx-0 border-[#EAC57E] py-2 px-4 ${scrollY > 50 ? 'mt-5 opacity-70 hover:opacity-100' : 'mt-[10px] sm:mt-[36px] md:mt-[44px] lg:mt-16 opacity-100 '} `}>
        <div className="flex justify-between items-center w-full gap-5">
          <motion.p
            className="text-sm"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}>
            <span className="whitespace-nowrap">Price ETH:</span> <br className='block sm:hidden'/> <span className="text-[#EAC57E]">$2,179</span>
          </motion.p>
          <div className="flex gap-4 sm:gap-5 items-center">
            
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              href="http://"
              target="_blank"
              className="flex items-center"
              rel="noopener noreferrer">
              <button className="rounded-xl flex gap-2 hover:gap-4 items-center font-semibold bg-[#1F2123] hover:bg-[#36393c] text-sm duration-150 ease-linear transition-all text-white py-2 px-2 md:px-6 h-full">
                Documentation <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
