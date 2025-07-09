import React from 'react';
import {
  Heading5Icon as Html5,
  Palette as Css3,
  FileJson,
  Wind,
  TypeIcon as Typescript,
  Atom as ReactLogo
} from 'lucide-react';

const skills = [
  { name: "HTML", icon: Html5, color: "#E34F26" },
  { name: "CSS", icon: Css3, color: "#1572B6" },
  { name: "JavaScript", icon: FileJson, color: "#F7DF1E" },
  { name: "Tailwind", icon: Wind, color: "#06B6D4" },
  { name: "TypeScript", icon: Typescript, color: "#3178C6" },
  { name: "React", icon: ReactLogo, color: "#61DAFB" }
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" data-aos="fade-up">
          Minhas Habilidades
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
              <skill.icon size={64} color={skill.color} />
              <span className="mt-4 text-lg font-semibold" style={{ color: skill.color }}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

