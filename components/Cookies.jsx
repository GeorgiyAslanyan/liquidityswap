"use client";
import React, { useState } from "react";

const Cookies = () => {
  const [cookie, setCookie] = useState(true);
  return (
    <>
      {cookie && (
        <div className="fixed  bg-black px-3 md:px-10 py-3 md:py-5 bottom-0 w-screen">
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 justify-between items-center">
            <p className="text-sm hidden sm:block">
              We use cookies and similar technologies to help personalize
              content, tailor and measure ads, and provide a better experience.
              <br />
              By clicking accept, you agree to this, as outlined in our Cookie
              Policy.
            </p>
            <p className="text-sm block sm:hidden">
              We use cookies and similar technologies.
              <br />
              By clicking accept, you agree to this, as outlined in our Cookie
              Policy.
            </p>
            <button
              onClick={() => setCookie(false)}
              className="text-base w-full sm:w-fit items-center rounded-full whitespace-nowrap bg-[#1F2123] hover:bg-[#36393c] duration-300 ease-in-out transition-all text-white py-2 px-4">
              Accept cookies
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
