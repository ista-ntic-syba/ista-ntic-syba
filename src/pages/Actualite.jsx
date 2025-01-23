import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const events = [
  {
    title: "Don du sang",
    image: "/evenement/donation.png"
  },
  {
    title: "Workshop sur l'IA",
    image: "/evenement/workshop-ai.jpg"
  },
  {
    title: "Clean up day",
    image: "/evenement/clean-up-day.jpg"
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
              <div className="w-full h-[500px] overflow-hidden">
                <img 
                  src={event.image || "/placeholder.svg"} 
                  alt={event.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-[#003366]">{event.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}