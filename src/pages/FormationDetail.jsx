import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const formationDetails = {
  "Infrastructure Digitale": {
    title: "Infrastructure Digitale",
    description: "Formation spécialisée dans la conception, l'administration et la sécurisation des infrastructures IT.",
    modules: ["Réseaux", "Systèmes d'exploitation", "Sécurité informatique", "Cloud computing"],
    duration: "2 ans",
    level: "Technicien Spécialisé"
  },
  "Développement Digital": {
    title: "Développement Digital",
    description: "Formation axée sur la création d'applications web et mobiles modernes.",
    modules: ["Programmation web", "Développement mobile", "Bases de données", "UX/UI Design"],
    duration: "2 ans",
    level: "Technicien Spécialisé"
  },
  "Digital Design": {
    title: "Digital Design",
    description: "Formation alliant design graphique et compétences numériques pour la création de contenus visuels.",
    modules: ["Design graphique", "Motion design", "Web design", "Photographie numérique"],
    duration: "2 ans",
    level: "Technicien Spécialisé"
  }
};

export default function FormationDetail({ onNavigate, formation }) {
  const details = formationDetails[formation];

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={onNavigate} />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-[#003366] mb-8">{details.title}</h1>
          <motion.div
            className="bg-gray-50 rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-6">{details.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold text-[#003366] mb-4">Modules</h2>
                <ul className="list-disc list-inside text-gray-700">
                  {details.modules.map((module, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {module}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <motion.div
                  className="bg-white rounded-lg shadow p-6 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">Durée</h3>
                  <p className="text-gray-700">{details.duration}</p>
                </motion.div>
                <motion.div
                  className="bg-white rounded-lg shadow p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">Niveau</h3>
                  <p className="text-gray-700">{details.level}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

