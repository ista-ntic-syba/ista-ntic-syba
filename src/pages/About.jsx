import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function About({ onNavigate }) {
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
          <h1 className="text-4xl font-bold text-[#003366] mb-8">À propos de l'ISTA NTIC SYBA</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <motion.img
              src="/ista-ntic.jpg"
              alt="OFPPT School"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <div className="w-full md:w-1/2">
              <motion.p
                className="text-lg text-gray-700 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                L'Office de la Formation Professionnelle et de la Promotion du Travail (OFPPT) est l'acteur principal de la formation professionnelle au Maroc. Depuis sa création, l'OFPPT s'engage à fournir une formation de qualité, adaptée aux besoins du marché du travail et aux évolutions technologiques.
              </motion.p>
              <motion.p
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Notre mission est de préparer les jeunes et les adultes à l'insertion professionnelle, en leur offrant des formations diversifiées et innovantes dans de nombreux secteurs d'activité. Nous nous efforçons constamment d'améliorer nos programmes et nos méthodes pédagogiques pour répondre aux défis du monde professionnel en constante évolution.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

