import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, BookOpen, Award, Star } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

export default function Filieres() {
  const filieres = [
    {
      title: 'Développement Digital',
      description: 'Les technologies numériques sont une force importante pour accélérer les bases économiques et créer de nouveaux emplois.',
      icon: BookOpen
    },
    {
      title: 'Infrastructure Digitale',
      description: 'Spécialisé sur éléments de conception, administration et sécurisation des infrastructures IT.',
      icon: Award
    },
    {
      title: 'Digital Design',
      description: 'Une formation qui associe design gammes aux compétences digitales sur la création des contenus.',
      icon: Star
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003366] mb-4">Filières</h2>
          <p className="text-xl text-gray-600">Trouver une formation</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filieres.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-lg overflow-hidden transform-gpu"
              >
                <div className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-6"
                  >
                    <Icon className="w-6 h-6 text-[#003366]" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-[#003366] mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{item.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <motion.div 
                      className="bg-orange-50 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Technicien Spécialisé
                    </motion.div>
                    <motion.div 
                      className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Diplomante
                    </motion.div>
                    <motion.div 
                      className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Privé mention
                    </motion.div>
                  </div>

                  <motion.button 
                    className="flex items-center text-[#003366] font-medium group"
                    whileHover={{ x: 5 }}
                  >
                    Lire plus
                    <motion.div
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
