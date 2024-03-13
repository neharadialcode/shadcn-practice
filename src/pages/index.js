import BeanCategory from "@/components/BeanCategory";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <BeanCategory />
    </>
  );
}
