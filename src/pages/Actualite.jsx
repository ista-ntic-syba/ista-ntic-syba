import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const events = [
  {
    title: "Journée Portes Ouvertes",
    date: "15 Mai 2024",
    description: "Découvrez nos formations et rencontrez nos formateurs.",
    image: "/images/open-day.jpg"
  },
  {
    title: "Hackathon OFPPT",
    date: "1-3 Juin 2024",
    description: "Participez à notre compétition annuelle de programmation.",
    image: "/images/hackathon.jpg"
  },
  {
    title: "Conférence sur l'IA",
    date: "20 Juin 2024",
    description: "Explorez les dernières avancées en intelligence artificielle.",
    image: "/images/ai-conference.jpg"
  },
  {
    title: "Forum de l'Emploi",
    date: "10 Juillet 2024",
    description: "Rencontrez des employeurs potentiels et découvrez des opportunités de carrière.",
    image: "/images/job-fair.jpg"
  },
  {
    title: "Atelier Design Thinking",
    date: "5 Août 2024",
    description: "Apprenez à résoudre des problèmes de manière créative avec le design thinking.",
    image: "/images/design-thinking.jpg"
  }
];

export default function Actualite({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={onNavigate} />
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold text-[#003366] mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Actualités et Événements
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#003366] mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.date}</p>
                <p className="text-gray-700">{event.description}</p>
                <motion.button
                  className="mt-4 bg-[#003366] text-white px-4 py-2 rounded hover:bg-[#004080] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  En savoir plus
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

