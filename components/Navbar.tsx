"use client"; // Important for client-side interactivity
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  return (
    <nav className="bg-black text-white p-5 flex justify-between items-center relative">
      {/* Logo / Brand */}
      <h1 className="text-2xl font-bold">MyPortfolio</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden bg-gray-800 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-5 bg-black p-4 flex flex-col gap-4 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
