import "./globals.css";
import { Alata, Josefin_Sans } from "next/font/google";

const alata = Alata({ weight: ["400"], subsets: ["latin"] });
const josefin_sans = Josefin_Sans({ weight: ["300"], subsets: ["latin"] });

export const metadata = {
  title: "Loopstudios - Ken Vilar",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={alata.className}>
        <div className={josefin_sans.className}>{children}</div>
      </body>
    </html>
  );
}
