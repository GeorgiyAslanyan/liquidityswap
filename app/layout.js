
import Cookies from "@/components/Cookies";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ØxLiquidity | Swap",
  description: "Do not wait</span> until the end of the liquidity lock-in period",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'text-lg md:text-xl lg:text-2xl text-white bg-[#1F2123]'}>
        <Navbar />
        {children}
        <Cookies />
      </body>
    </html>
  );
}
