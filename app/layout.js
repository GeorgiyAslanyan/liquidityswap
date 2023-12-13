
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ØxLiquidity | Swap",
  description: "Do not wait</span> until the end of the liquidity lock-in period",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'text-2xl text-white bg-black'}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
