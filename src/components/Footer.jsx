import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Footer() {
  const quickLinks = [
    { name: "Formations", url: "#" },
    { name: "Actualités", url: "#" },
    { name: "À propos", url: "#" },
    { name: "Inscription", url: "#" },
  ];

  const publications = [
    { title: "Guide d'admission 2024", date: "15 Jan 2024" },
    { title: "Programme de formation continue", date: "10 Jan 2024" },
    { title: "Calendrier des examens", date: "05 Jan 2024" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#003366] to-[#002347] text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.img 
              src="/logo/ofppt.png" 
              alt="OFPPT Logo" 
              className="h-12 mb-6"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-gray-300 leading-relaxed">
              L'OFPPT est l'acteur principal de la formation professionnelle au Maroc, 
              offrant des formations de qualité adaptées aux besoins du marché du travail.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-bold">Contact</h4>
            <div className="space-y-4">
              <motion.a 
                href="#" 
                className="flex items-start space-x-3 text-gray-300 hover:text-white group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="flex-1">Lot 660, Hay Moulay Rachid Ben Guerir, 43150 Marrakech</span>
              </motion.a>
              
              <motion.a 
                href="tel:+212525450505" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5" />
                <span>+212 525 450 505</span>
              </motion.a>
              
              <motion.a 
                href="mailto:contact@startechpro.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5" />
                <span>contact@startechpro.com</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-bold">Liens rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a href={link.url} className="flex items-center text-gray-300 hover:text-white group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Publications */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-bold">Publications récentes</h4>
            <div className="space-y-4">
              {publications.map((pub) => (
                <motion.a
                  key={pub.title}
                  href="#"
                  className="block group"
                  whileHover={{ x: 5 }}
                >
                  <h5 className="text-white group-hover:text-blue-300 transition-colors">
                    {pub.title}
                  </h5>
                  <p className="text-sm text-gray-400">{pub.date}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-blue-800"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © 2024 OFPPT. Tous droits réservés.
            </p>
            
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center hover:bg-blue-700/50 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}