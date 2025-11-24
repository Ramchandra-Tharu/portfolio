"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      
      {/* Animated heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I am Ramchandra Tharu
      </motion.h1>

      {/* Animated paragraph */}
      <motion.p
        className="text-gray-300 max-w-xl mb-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I am a passionate web developer who creates modern, interactive websites using React, Next.js, and TailwindCSS.
      </motion.p>

      {/* Animated button */}
      <motion.a
        href="/projects"
        className="bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        View My Work
      </motion.a>

      {/* Social links */}
      <motion.div
        className="flex gap-6 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <a href="#" className="hover:text-gray-400 transition">GitHub</a>
        <a href="#" className="hover:text-gray-400 transition">LinkedIn</a>
        <a href="#" className="hover:text-gray-400 transition">Twitter</a>
      </motion.div>

    </section>
  );
}
