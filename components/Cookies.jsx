"use client";
import React, { useState } from "react";

const Cookies = () => {
  const [cookie, setCookie] = useState(true);
  return (
    <>
      {cookie && (
        <div className="fixed  bg-black px-10 py-5 bottom-0 w-screen">
          <div className="flex gap-10 justify-between items-center">
            <p className="text-[14px]">
              We use cookies and similar technologies to help personalize
              content, tailor and measure ads, and provide a better experience.
              <br />
              By clicking accept, you agree to this, as outlined in our Cookie
              Policy.
            </p>
            <button
              onClick={() => setCookie(false)}
              className="text-[16px] items-center rounded-full whitespace-nowrap bg-[#1F2123] hover:bg-[#36393c] duration-300 ease-in-out transition-all text-white py-2 px-4">
              Accept cookies
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
