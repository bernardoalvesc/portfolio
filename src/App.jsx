import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 p-4">
      <h1 className="text-5xl md:text-6xl font-mono font-bold mb-6">
        🚧 Pera lá amigão!
      </h1>
      <p className="text-xl md:text-2xl mb-4 text-center max-w-xl">
        Estou recarregando os commits e deployando novidades fresquinhas para
        meu novo portfólio.
      </p>
      <p className="text-lg md:text-xl mb-8 text-center">
        Mantenha contato comigo no:
      </p>
      <div className="flex space-x-8">
        <a
          href="https://github.com/bernardoalvesc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub size={48} />
        </a>
        <a
          href="https://www.linkedin.com/in/bernardoalvesdev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin size={48} />
        </a>
      </div>
    </div>
  );
}

export default App;
