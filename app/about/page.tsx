"use client"; // important! fixes hydration errors when using SkillBar

import SkillBar from "../../components/SkillBar"; // make sure path is correct

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-10 bg-black"
    >
      <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
      <p className="max-w-2xl text-gray-300 mb-8 text-center">
        I am a passionate web developer who builds modern, responsive, and
        interactive websites using Next.js, React, and TailwindCSS.
      </p>

      <div className="w-full max-w-xl">
        <SkillBar skill="React" level={90} />
        <SkillBar skill="Next.js" level={85} />
        <SkillBar skill="TailwindCSS" level={80} />
        <SkillBar skill="JavaScript" level={95} />
      </div>
    </section>
  );
}
