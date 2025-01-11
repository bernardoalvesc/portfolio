import React from 'react';
import Typewriter from 'typewriter-effect';
import { ArrowDown } from 'lucide-react';

function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="text-center" data-aos="fade-up">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          <Typewriter
            options={{
              strings: ['Olá, me chamo Bernardo Alves'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
          Sou um desenvolvedor Front-End apaixonado por tecnologia e inovação, com experiência na criação de interfaces modernas,
          responsivas e funcionais utilizando ReactJS, Tailwind CSS e TypeScript. Bacharelando em Engenharia de Software pela
          Universidade Católica de Brasília, tenho interesse em soluções criativas e desafios técnicos no desenvolvimento web. Meu foco é combinar
          performance, estética e usabilidade para transformar ideias em experiências digitais marcantes.
        </p>
        <a
          href="public\curriculo bernardo alves.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-flex items-center"
        >
          Baixar CV
          <ArrowDown size={20} className="ml-2" />
        </a>
      </div>
    </section>
  );
}

export default About;
