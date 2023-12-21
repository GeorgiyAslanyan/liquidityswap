import Description from "@/components/Description";
import Hero from "@/components/Hero";
import Image from "next/image";
import Script from 'next/script'


export default function Home() {
  return (
    <main className=" overflow-hidden ">
      
      <Hero />
      <Description />
    </main>
  );
}
