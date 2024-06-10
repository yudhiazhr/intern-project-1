import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"
import GetInTouch from "./components/GetInTouch"
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <GetInTouch/>
        <Footer/>
        </body>
    </html>
  );
}
