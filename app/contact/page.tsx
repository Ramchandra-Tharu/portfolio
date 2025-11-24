import React from "react";
export default function Contact() {
  return (
    <section className="min-h-screen p-10 bg-black text-white flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="max-w-2xl text-gray-300 mb-6">
        Interested in working together or have any questions? Reach out to me via email or connect on social media.
      </p>
      <div className="flex gap-6 mt-4">
        <a href="mailto:youremail@example.com" className="hover:text-gray-400 transition">Email</a>
        <a href="#" className="hover:text-gray-400 transition">GitHub</a>
        <a href="#" className="hover:text-gray-400 transition">LinkedIn</a>
      </div>
    </section>
  );
}
