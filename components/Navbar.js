// components/Navbar.js

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close menu after click
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-transparent backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <div
          className="flex items-center gap-2 md:gap-3 cursor-pointer"
          onClick={() => scrollToSection("intro")}
        >
          <Image
            src="/logo.jpeg"
            alt="logo"
            width={40}
            height={40}
            className="object-contain"
          />

          <h1 className="text-lg md:text-2xl font-serif">
            <span className="text-black">The Elegance </span>
            <span className="text-green-700">Infra</span>
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          <li onClick={() => scrollToSection("intro")} className="cursor-pointer hover:text-green-700 font-serif ">Home</li>
          <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-green-700 font-serif ">About</li>
          <li onClick={() => scrollToSection("why")} className="cursor-pointer hover:text-green-700 font-serif ">Why Us</li>
          <li onClick={() => scrollToSection("projects")} className="cursor-pointer hover:text-green-700 font-serif ">Projects</li>
          <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-green-700 font-serif ">Contact</li>
        </ul>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li onClick={() => scrollToSection("intro")} className="cursor-pointer">Home</li>
            <li onClick={() => scrollToSection("about")} className="cursor-pointer">About</li>
            <li onClick={() => scrollToSection("why")} className="cursor-pointer">Why Us</li>
            <li onClick={() => scrollToSection("projects")} className="cursor-pointer">Projects</li>
            <li onClick={() => scrollToSection("contact")} className="cursor-pointer">Contact</li>
          </ul>
        </div>
      )}

      
    </nav>
  );
}