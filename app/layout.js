import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Cursor from './components/Cursor';

const myFont = localFont({
  src: "../public/fonts/RobukaDemo.ttf",
  variable: "--font-robuka",
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Asma",
  description: "....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${myFont.variable} antialiased`}>
      <head>
        {/*  Preload your GIF here */}
        <link rel="preload" href="/images/skills.gif" as="image" />
        <link rel="preload" href="/images/hero.gif" as="image" />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
