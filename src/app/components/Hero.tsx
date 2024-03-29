"use client";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.svg";
import { Alata, Josefin_Sans } from "next/font/google";

const alata = Alata({ weight: ["400"], subsets: ["latin"] });
const josefin_sans = Josefin_Sans({ weight: ["300"], subsets: ["latin"] });

const Hero = () => {
  const menus = ["About", "Careers", "Events", "Products", "Support"];

  const menuMobileToggle = () => {
    let btn = document.getElementById("menu-btn");
    let menu = document.getElementById("menu");
    if (btn) {
      btn.classList.toggle("open");
    }
    if (menu) {
      menu.classList.toggle("hidden");
      menu.classList.toggle("flex");
    }
  };

  return (
    <>
      <section id="hero">
        <div className="container max-w-6xl mx-auto px-6 py-12">
          <nav className="flex items-center justify-between font-bold text-white">
            <Image src={Logo} alt="logo" />

            <div
              className={`hidden h-10 md:flex md:space-x-8 ${alata.className}`}
            >
              {menus.map((item, idx) => {
                return (
                  <div key={idx} className="group">
                    <a href="#">{item}</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
                  </div>
                );
              })}
            </div>

            {/*hamburger button*/}
            <div className="md:hidden">
              <button
                id="menu-btn"
                type="button"
                className="z-40 block hamburger md:hidden focus:outline-none"
                onClick={menuMobileToggle}
              >
                <span className="hamburger-top" />
                <span className="hamburger-middle" />
                <span className="hamburger-bottom" />
              </button>
            </div>
          </nav>

          {/*todo mobile menu*/}
          <div
            id="menu"
            className="absolute top-0 bottom-0 left-0 flex-col self-end hidden w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
          >
            {menus.map((item, idx) => {
              return (
                <a key={idx} href="#" className="hover:text-pink-500">
                  {item}
                </a>
              );
            })}
          </div>

          <div
            className={`max-w-lg mt-32 mb-32 p-4 ${josefin_sans.className} text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl`}
          >
            Impressive experiences that deliver
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
