import Image from "next/image";
import Logo from "@/app/assets/images/logo.svg";
import { Alata, Josefin_Sans } from "next/font/google";

const alata = Alata({ weight: ["400"], subsets: ["latin"] });
const josefin_sans = Josefin_Sans({ weight: ["300"], subsets: ["latin"] });

const Hero = () => {
  const menus = ["About", "Careers", "Events", "Products", "Support"];

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
                id="menu-button"
                type="button"
                className="z-40 block hamburger md:hidden focus:outline-none"
              >
                <span className="hamburger-top" />
                <span className="hamburger-middle" />
                <span className="hamburger-bottom" />
              </button>
            </div>
          </nav>

          {/*todo mobile menu*/}

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
