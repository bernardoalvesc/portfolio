import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Midnighty Studio",
    description:
      "Site desenvolvido para o studio Midnighty, um studio independente de criação de jogos. O site foi desenvolvido utilizando puramente HTML + Tailwind CSS e JavaScript.",
    image: "/images/midnighty.png",
    github: "https://github.com/bernardoalvesc/midnighty-studio",
    demo: "https://midnighty-studio.vercel.app",
  },
  {
    title: "GitHub Explorer",
    description:
      "Projeto pessoal desenvolvido em React + Vite. O site utiliza uma API do GitHub, que permite localizar perfis de maneira mais simples.",
    image: "/images/gitexplorer.png",
    github: "https://github.com/bernardoalvesc/github-explorer",
    demo: "https://exploradordegithub.vercel.app",
  },
  {
    title: "Studio Lumos",
    description:
      "Landing Page feita com Tailwind de um studio de design fictício. O projeto possui funcionalidades como tema escuro, preenchimento de formulário funcional e animações.",
    image: "/images/lumos.png",
    github: "https://github.com/bernardoalvesc/lumos-atualizado",
    demo: "https://studio-lumos.vercel.app",
  },
  {
    title: "EspertoFit",
    description:
      "Uma aplicação completa feita em ReactJS + Typescript, focada em ajudar a comunidade maromba e montar treinamentos. O projeto conta com uma interface intuitiva e responsiva.",
    image: "/images/espertofit.png",
    github: "https://github.com/bernardoalvesc/espertofit",
    demo: "https://espertofit.vercel.app",
  },
  {
    title: "Painel de Controle de Tarefas",
    description:
      "Este projeto é uma aplicação web simples para gerenciar tarefas, permitindo que os usuários adicionem, editem e excluam tarefas conforme necessário.",
    image: "/images/task.png",
    github: "https://github.com/bernardoalvesc/painel-de-controle-de-tarefas",
    demo: "https://painel-de-controle-de-tarefas.vercel.app",
  },
  {
    title: "StudyMind",
    description:
      "Esta é uma aplicação web desenvolvida com ReactJS + TypeScript. Consiste em uma plataforma de organização de rotinas de estudo personalizáveis. Foi feita com TailwindCSS e possui um design responsivo.",
    image: "/images/study.png",
    github: "https://github.com/bernardoalvesc/studymind",
    demo: "https://studymind.vercel.app",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          data-aos="fade-up"
        >
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;


