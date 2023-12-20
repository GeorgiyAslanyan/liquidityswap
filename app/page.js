import Description from "@/components/Description";
import Hero from "@/components/Hero";
import Image from "next/image";
import Script from 'next/script'


export default function Home() {
  return (
    <main className=" overflow-hidden ">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1QQESD1ELR"></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-1QQESD1ELR');`}
      </Script>
      <Hero />
      <Description />
    </main>
  );
}
