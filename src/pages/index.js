import Image from "next/image";
import { Inter } from "next/font/google";
import TabsComponents from "@/components/TabsComponents";
import CoffeeGrid from "@/components/CoffeeGrid";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import Services from "@/components/Service";
import Blog from "@/components/Blog";
import Header from "@/components/Header";
import CoffeeBean from "@/components/CoffeeBean";
import NewCoffeeBeanSlider from "@/components/NewCoffeeBeanSlider";
import BeanCategory from "@/components/BeanCategory";
import CategoryProduct from "@/components/CategoryProduct";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CategoryProduct />
      <Header />
      <NewCoffeeBeanSlider />
      <Blog />
      <Services />
      <TabsComponents />
      <CoffeeGrid />
      <Slider />
      <Footer />
      <CoffeeBean />
      <BeanCategory/>
    </>
  );
}
