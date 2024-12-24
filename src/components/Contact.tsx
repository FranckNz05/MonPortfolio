import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contactez-moi</h3>
            <div className="space-y-4">
              <a href="mailto:francknz05@gmail.com" 
                 className="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
                <Mail className="w-5 h-5" />
                <span>francknz05@gmail.com</span>
              </a>
              
              <a href="tel:+242064088868" 
                 className="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
                <Phone className="w-5 h-5" />
                <span>+242 064088868 (WhatsApp)</span>
              </a>
              
              <a href="https://github.com/FranckNz05" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              
              <a href="https://www.linkedin.com/in/franck-treissy-emmanuel-nzoutani-4617b61b2" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}