import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const myFont = localFont({
  src: '../public/fonts/RobukaDemo.ttf',
  variable: '--font-robuka',
});
console.log(myFont);

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Asma',
  description: '....',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className={`${poppins.variable} ${myFont.variable}  antialiased`}
    >
      <body
    
      >
        {children}
      </body>
    </html>
  );
}
