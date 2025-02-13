import React from "react";

const certifications = [
  {
    title: "Tailwind CSS: estilizando a sua página com classes utilitárias",
    organization: "Alura",
    date: "Outubro/24",
    link: "https://cursos.alura.com.br/certificate/cbeb8b1f-436b-4918-ab4d-cdfe8f08bc0d",
  },
  {
    title: "JavaScript: explorando a linguagem",
    organization: "Alura",
    date: "Novembro/24",
    link: "https://cursos.alura.com.br/certificate/951c375b-6cd0-4da8-8750-0c5eefbc1fa0",
  },
  {
    title: "React: desenvolvendo com JavaScript",
    organization: "Alura",
    date: "Novembro/24",
    link: "https://cursos.alura.com.br/certificate/091b2ea8-0302-4c29-8728-f03f9cc63a32",
  },
  {
    title: "Curso completo em Cyber Security",
    organization: "Udemy",
    date: "Setembro/24",
    link: "ude.my/UC-4f569dc4-2d9f-4538-99a0-0bf704a9b9e6/",
  },
  {
    title: "React: migrando para TypeScript",
    organization: "Alura",
    date: "Fevereiro/24",
    link: "https://cursos.alura.com.br/certificate/db304470-43b5-4041-9e7e-c94b9ae69394",
  },
  {
    title: "C#: criando sua primeira aplicação",
    organization: "Alura",
    date: "Outubro/24",
    link: "https://cursos.alura.com.br/certificate/d339c875-deb2-44b2-803f-2aae99b1319f",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          Minhas Certificações
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {certification.title}
              </h3>
              <p className="text-gray-400 mb-1">
                <strong>Organização:</strong> {certification.organization}
              </p>
              <p className="text-gray-400 mb-4">
                <strong>Data:</strong> {certification.date}
              </p>
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition duration-300 underline"
              >
                Ver Certificado
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

