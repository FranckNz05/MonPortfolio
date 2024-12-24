import React from 'react';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              NZ Franck Treissy Emmanuel
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600">
              Développeur Fullstack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Passionné par le développement web et mobile, je crée des solutions innovantes
              en utilisant les dernières technologies. Spécialisé en PHP (Laravel), Node.js,
              Flutter, et plus encore.
            </p>
            <div className="flex gap-4">
              <a href="/cv.pdf" 
                 download="CV_Franck_Treissy_Emmanuel_NZ.pdf"
                 className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                <Download className="w-5 h-5 mr-2" />
                Télécharger CV
              </a>
              <a href="#contact"
                 className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 transition">
                Me contacter
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800" 
                alt="NZ Franck Treissy Emmanuel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}