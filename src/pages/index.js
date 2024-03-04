import Image from "next/image";
import { Inter } from "next/font/google";
import TabsComponents from "@/components/TabsComponents";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <TabsComponents />;
}
