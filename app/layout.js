import Cookies from "@/components/Cookies";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import GoogleA from "@/components/GoogleA";

export const metadata = {
  title: "ØxLiquidity | Swap",
  description:
    "Pioneering Liquidity Solutions in Decentralized Finance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleA />
      <body
        className={"text-lg md:text-xl lg:text-2xl text-white bg-[#1F2123]"}>
        <Navbar />
        {children}
        <Cookies />
      </body>
    </html>
  );
}
