import React from 'react';
import { FaReact, FaPython, FaJsSquare, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiFlask } from 'react-icons/si';

const FiverrPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-yellow-400">Full-Stack Developer for Hire</h1>
          <nav className="space-x-4">
            <a href="https://linkedin.com" className="text-gray-300 hover:text-yellow-400"><FaLinkedin size={24} /></a>
            <a href="https://github.com" className="text-gray-300 hover:text-yellow-400"><FaGithub size={24} /></a>
            <a href="mailto:email@example.com" className="text-gray-300 hover:text-yellow-400"><FaEnvelope size={24} /></a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 flex-grow">
        <section className="bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center">
              <FaReact size={80} className="text-blue-400 mb-2" />
              <span className="text-xl text-yellow-400">React</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center">
              <FaJsSquare size={80} className="text-yellow-400 mb-2" />
              <span className="text-xl text-yellow-400">JavaScript</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center">
              <SiFlask size={80} className="text-gray-300 mb-2" />
              <span className="text-xl text-yellow-400">Flask</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center">
              <FaPython size={80} className="text-blue-400 mb-2" />
              <span className="text-xl text-yellow-400">Python</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 shadow-lg">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-300">
            &copy; {new Date().getFullYear()} Full-Stack Developer | Let's build something amazing together! 🤝
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FiverrPage;