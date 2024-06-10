"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollY, setscrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > scrollY && currentScrollY > 80) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setscrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <header
        className={`z-50 fixed flex justify-center items-center px-4 xl:px-10 h-[80px] w-full bg-transparent xl:bg-black transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="cursor-pointer text-white font-bold italic text-md xl:text-2xl">
            CRETIVOX
          </Link>
          <button
            onClick={toggleMenu}
            className="xl:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          <ul
            className={`flex gap-6 xl:gap-32 ${
              isMenuOpen
                ? "flex-col items-center bg-black/80 absolute top-20 right-10 w-1/2 p-6 rounded-xl"
                : "hidden xl:flex"
            }`}
          >
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-black px-[28px] py-[8px] bg-white rounded-full"
              >
                Apply
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
