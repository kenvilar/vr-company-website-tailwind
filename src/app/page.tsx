import Image from "next/image";
import Hero from "@/app/components/Hero";
import Feature from "@/app/components/Feature";
import Creations from "@/app/components/Creations";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <Feature />

      <Creations />

      <Footer />
    </>
  );
}
