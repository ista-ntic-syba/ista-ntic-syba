import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-2 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "Quels sont les programmes de formation disponibles à l'OFPPT ?",
      answer: "L'OFPPT offre une large gamme de programmes de formation dans divers domaines tels que le développement digital, l'infrastructure digitale, le design numérique, et bien d'autres. Consultez notre page des filières pour plus de détails."
    },
    {
      question: "Comment puis-je m'inscrire à un programme de formation ?",
      answer: "Pour vous inscrire, visitez notre site web officiel et suivez les instructions dans la section 'Inscription'. Vous devrez fournir vos informations personnelles et choisir le programme qui vous intéresse."
    },
    {
      question: "Quelles sont les conditions d'admission pour les programmes de l'OFPPT ?",
      answer: "Les conditions d'admission varient selon le programme. En général, vous devez avoir un certain niveau d'éducation et parfois passer un test d'admission. Consultez la page spécifique du programme pour plus de détails."
    },
    {
      question: "L'OFPPT offre-t-il des stages ou des opportunités d'emploi ?",
      answer: "Oui, l'OFPPT collabore avec de nombreuses entreprises pour offrir des stages et des opportunités d'emploi à ses étudiants et diplômés. Consultez notre page 'Emplois' pour plus d'informations."
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#003366] mb-8">Questions fréquemment posées</h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

