import Image from "next/image";
import { Inter } from "next/font/google";
import TabsComponents from "@/components/TabsComponents";
import RoasterTab from "@/components/RoasterTab";
import CoffeeGrid from "@/components/CoffeeGrid";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import Services from "@/components/Service";
import Blog from "@/components/Blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Blog />
      <Services />
      <TabsComponents />
      <RoasterTab />
      <CoffeeGrid />
      <Slider />
      <Footer/>
    </>
  );
}
