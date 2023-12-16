"use client";
import React, { useState } from "react";

const Cookies = () => {
  const [cookie, setCookie] = useState(true);
  return (
    <>
      {cookie && (
        <div className="fixed z-50 backdrop-blur-lg bg-black/50 px-3 md:px-10 py-3 md:py-5 bottom-0 w-screen">
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 justify-between items-center">
            <p className="text-sm">
            This website uses cookies to offer you a better browsing experience. <br /> Find out more on how we use cookies.
            </p>
            <button
              onClick={() => setCookie(false)}
              className="text-sm w-full sm:w-fit flex items-center rounded-2xl whitespace-nowrap bg-[#1F2123] hover:bg-[#36393c] duration-300 ease-in-out transition-all text-white py-2 px-4">
              <p>ACCEPT</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
