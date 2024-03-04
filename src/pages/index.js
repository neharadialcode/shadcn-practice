import Image from "next/image";
import { Inter } from "next/font/google";
import TabsComponents from "@/components/TabsComponents";
import RoasterTab from "@/components/RoasterTab";
import Slider from "@/components/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <TabsComponents />
      <RoasterTab /> */}
      <Slider />
    </>
  );
}
