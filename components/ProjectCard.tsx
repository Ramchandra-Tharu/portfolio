"use client";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
}

export default function ProjectCard({ title, description, link, image }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform flex flex-col">
      {image && (
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="rounded-md mb-4 object-cover"
        />
      )}
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        className="mt-auto text-blue-400 hover:underline"
      >
        View Project
      </a>
    </div>
  );
}
