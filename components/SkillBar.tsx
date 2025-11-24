"use client";
import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  level: number; // 0-100
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-gray-300 font-medium">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.5 }}
          className="h-4 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full"
        />
      </div>
    </div>
  );
}
