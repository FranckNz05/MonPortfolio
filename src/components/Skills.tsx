import React from 'react';
import { Code2, Database, Palette, Terminal, Languages } from 'lucide-react';
import { skills, languages } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Rest of the component remains the same */}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Langues</h2>
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language) => (
              <div key={language.name} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                  <Languages className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold">{language.name}</h3>
                <p className="text-gray-600">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}