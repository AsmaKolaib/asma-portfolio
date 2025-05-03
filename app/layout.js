import { Poppins } from "next/font/google";
import { localFont } from "next/font/local";
import "./globals.css";

// Correct the font path and check the result
const myFont = localFont({ src: '../public/fonts/RobukaDemo.ttf' });
console.log(myFont); // Check if the font is loaded correctly

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Asma",
  description: "....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${myFont?.className || ''} antialiased`}>
        {children}
      </body>
    </html>
  );
}
