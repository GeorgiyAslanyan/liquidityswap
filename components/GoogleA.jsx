"use client";
import Script from "next/script";
import React from "react";

const GoogleA = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        id="ga_analytics"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LPLMG18YKE"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-LPLMG18YKE');
    `}
      </Script>
    </>
  );
};

export default GoogleA;
