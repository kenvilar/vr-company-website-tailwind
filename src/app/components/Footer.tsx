import Image from "next/image";
import Logo from "@/app/assets/images/logo.svg";

const Footer = () => {
  const menuItems = ["About", "Careers", "Events", "Products", "Support"];

  return (
    <>
      <footer className="bg-black">
        <div className="container max-w-6xl py-10 mx-auto">
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            <div className="flex flex-col items-center space-y-8 md:items-center md:space-y-4">
              <div className="h-8">
                <Image src={Logo} alt="logo" className="w-44 md:ml-3" />
              </div>

              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                {menuItems.map((item, idx) => {
                  return (
                    <div key={idx} className="h-10 group">
                      <a href="#">{item}</a>
                      <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
