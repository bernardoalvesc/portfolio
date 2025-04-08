import React from 'react';
import { Send } from 'lucide-react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/meoovgyd", { 
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Mensagem enviada com sucesso!"); 
          form.reset();
        } else {
          alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."); 
        }
      })
      .catch((error) => {
        alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."); 
        console.error(error);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" 
          data-aos="fade-up">
          Entre em Contato
        </h2>
        <div 
          className="max-w-md mx-auto bg-gray-700 shadow-lg rounded-lg p-8" 
          data-aos="fade-up">
          <form 
            onSubmit={handleSubmit} 
            action="https://formspree.io/f/meoovgyd" 
            method="POST">
            <div className="mb-4">
              <label 
                htmlFor="name" 
                className="block text-gray-300 text-sm font-bold mb-2">
                Nome
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                required />
            </div>
            <div className="mb-4">
              <label 
                htmlFor="email" 
                className="block text-gray-300 text-sm font-bold mb-2">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                required />
            </div>
            <div className="mb-4">
              <label 
                htmlFor="message" 
                className="block text-gray-300 text-sm font-bold mb-2">
                Mensagem
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                required>
              </textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 flex items-center justify-center">
              <Send size={20} className="mr-2" />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

