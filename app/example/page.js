import Animated from "@/components/Animated.jsx";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black">
        <div className="absolute opacity-50 pointer-events-none bg-[url('/clearbg.png')] bg-234 md:bg-contain bg-repeat z-[6] w-full h-full "></div>
        <object className="z-[10] relative" type="image/svg+xml" data="/scheme.svg"></object>
    </main>
  );
}
