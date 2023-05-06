import { Alata, Josefin_Sans } from "next/font/google";

type ButtonProps = {
  children: any;
  class_name?: string;
};

const alata = Alata({ weight: ["400"], subsets: ["latin"] });
const josefin_sans = Josefin_Sans({ weight: ["300"], subsets: ["latin"] });

const Button = ({ children, class_name }: ButtonProps) => {
  return (
    <button
      className={`${class_name} px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black ${alata.className} hover:bg-black hover:text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
