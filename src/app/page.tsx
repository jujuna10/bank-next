import Companies from "@/components/Companies";
import HappiensClinet from "@/components/HappiensClinet";
import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Pay from "@/components/Pay";
import Price from "@/components/Price";
import Services from "@/components/Services";
import Started from "@/components/Started";
import Transactions from "@/components/Transactions";
import { UserProvider } from "@/context/emailData";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[radial-gradient(ellipse_50%_50%_at_top,_#241d50,_#040309)] ">
          <Navbar />
          <HeroSection />
          <Info />
          <Companies />
          <Price />
          <Transactions />
          <Pay />
      </div>
      <div className="bg-[rgb(225,226,255)]">
        <Services />
        <HappiensClinet />
        <Started />
      </div>
    </div>
  );
}
