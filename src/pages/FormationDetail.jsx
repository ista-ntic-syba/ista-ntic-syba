"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

const formationDetails = {
  "Développement Digital": {
    title: "Développement Digital",
    description: "Formation axée sur la création d'applications web et mobiles modernes.",
    firstYear: {
      title: "1ère année",
      generalModules: [
        { code: "EGTS101", name: "Arabe" },
        { code: "EGTS102", name: "Français" },
        { code: "EGTS103", name: "Anglais technique/Espagnole" },
        { code: "EGTS104", name: "Culture entrepreneuriale-Partie 1" },
        { code: "EGTS105", name: "Compétences comportementales et sociales" },
        { code: "EGTS108", name: "Entrepreneuriat-PIE 1" },
        { code: "EGTSA106", name: "Culture et techniques avancées du numérique" },
      ],
      specializedModules: [
        { code: "M101", name: "Se situer au regard du métier et de la démarche de formation" },
        { code: "M102", name: "Acquérir les bases de l'algorithmique" },
        { code: "M103", name: "Programmer en Orienté Objet" },
        { code: "M104", name: "Développer des sites web statiques" },
        { code: "M105", name: "Programmer en JavaScript" },
        { code: "M106", name: "Manipuler des bases de données" },
        { code: "M107", name: "Développer des sites web dynamiques" },
        { code: "M108", name: "S'initier à la sécurité des systèmes d'information" },
      ],
    },
    options: [
      {
        title: "Applications Mobiles",
        modules: [
          { code: "M201", name: "Bases du développement Android", hours: 90, coef: 3 },
          { code: "M202", name: "Programmation KOTLIN", hours: 90, coef: 3 },
          { code: "M203", name: "Gestion de projet", hours: 45, coef: 1 },
          { code: "M204", name: "Initiation aux composants et modèle d'une application Android", hours: 90, coef: 2 },
          { code: "M205", name: "Développement des interfaces utilisateurs sous Android", hours: 90, coef: 2 },
          { code: "M206", name: "Elaboration d'une application Android sécurisée", hours: 90, coef: 2 },
          { code: "M207", name: "Développement des applications IOS", hours: 90, coef: 3 },
          { code: "M208", name: "Développement multiplateforme", hours: 90, coef: 2 },
          { code: "M209", name: "Intégration du milieu professionnel", hours: 160, coef: 2 },
        ],
      },
      {
        title: "Web Full Stack",
        modules: [
          { code: "M201", name: "Préparation d'un projet web", hours: 60, coef: 1 },
          { code: "M202", name: "Approche agile", hours: 120, coef: 2 },
          { code: "M203", name: "Gestion des données", hours: 90, coef: 3 },
          { code: "M204", name: "Développement front-end", hours: 90, coef: 3 },
          { code: "M205", name: "Développement back-end", hours: 120, coef: 3 },
          { code: "M206", name: "Création d'une application Cloud native", hours: 90, coef: 2 },
          { code: "M207", name: "Projet de synthèse", hours: 60, coef: 2 },
          { code: "M208", name: "Intégration du milieu professionnel", hours: 160, coef: 2 },
        ],
      },
    ],
  },
  "Infrastructure Digitale": {
    title: "Infrastructure Digitale",
    description:
      "Formation axée sur les systèmes d'information, les réseaux, la virtualisation, et la sécurité des infrastructures digitales.",
    firstYear: {
      title: "1ère année",
      generalModules: [
        { code: "EGTS101", name: "Arabe" },
        { code: "EGTS102", name: "Français" },
        { code: "EGTS103", name: "Anglais technique/Espagnole" },
        { code: "EGTS104", name: "Culture entrepreneuriale-Partie 1" },
        { code: "EGTS105", name: "Compétences comportementales et sociales" },
        { code: "EGTS108", name: "Entrepreneuriat-PIE 1" },
        { code: "EGTSA106", name: "Culture et techniques avancées du numérique" },
      ],
      specializedModules: [
        { code: "M101", name: "Se situer au regard du métier et de la démarche de formation" },
        { code: "M102", name: "Comprendre les enjeux d’un système d'information" },
        { code: "M103", name: "Concevoir un réseau informatique" },
        { code: "M104", name: "Fonctionnement du système d’exploitation" },
        { code: "M105", name: "Gérer une infrastructure virtualisée" },
        { code: "M106", name: "Automatiser les tâches d’administration" },
        { code: "M107", name: "Sécuriser un système d'information" },
        { code: "M108", name: "Développer une veille technologique" },
      ],
    },
    options: [
      {
        title: "Réseaux et systèmes",
        modules: [
          { code: "EGTS202", name: "Français", hours: 115, coef: 2 },
          { code: "EGTS203", name: "Anglais technique", hours: 50, coef: 2 },
          { code: "EGTS204", name: "Culture entrepreneuriale", hours: 45, coef: 2 },
          { code: "EGTS205", name: "Compétences comportementales", hours: 30, coef: 2 },
          { code: "EGTS208", name: "Entrepreneuriat-PIE 2", hours: 80, coef: 2 },
          { code: "EGTSA206", name: "Culture et techniques avancées du numérique", hours: 30, coef: 1 },
          { code: "M201", name: "Mise en place d’une infrastructure réseaux", hours: 120, coef: 3 },
          { code: "M202", name: "Administration d’un environnement Windows", hours: 105, coef: 3 },
          { code: "M203", name: "Administration d’un environnement Cloud", hours: 75, coef: 2 },
          { code: "M204", name: "Enjeux de la technologie SDN", hours: 85, coef: 2 },
          { code: "M205", name: "Administration d’un environnement Linux", hours: 105, coef: 3 },
          { code: "M206", name: "Sécurité d’une infrastructure digitale", hours: 75, coef: 3 },
          { code: "M207", name: "Gestion d’un projet d’infrastructure digitale", hours: 45, coef: 2 },
          { code: "M208", name: "Intégration du milieu professionnel", hours: 160, coef: 2 },
        ],
      },
      {
        title: "Cyber sécurité",
        modules: [
          { code: "EGTS202", name: "Français", hours: 115, coef: 2 },
          { code: "EGTS203", name: "Anglais technique", hours: 50, coef: 2 },
          { code: "EGTS204", name: "Culture entrepreneuriale", hours: 45, coef: 2 },
          { code: "EGTS205", name: "Compétences comportementales", hours: 30, coef: 2 },
          { code: "EGTS208", name: "Entrepreneuriat-PIE 2", hours: 80, coef: 2 },
          { code: "EGTSA206", name: "Culture et techniques avancées du numérique", hours: 30, coef: 1 },
          { code: "M201", name: "S’initier aux fondamentaux de la cybersécurité", hours: 75, coef: 2 },
          { code: "M202", name: "Appliquer les méthodologies des tests d’intrusions", hours: 105, coef: 3 },
          { code: "M203", name: "Analyser les attaques et les incidents de cybersécurité", hours: 105, coef: 3 },
          {
            code: "M204",
            name: "Assurer le durcissement de la sécurité des systèmes et réseaux informatiques",
            hours: 90,
            coef: 3,
          },
          { code: "M205", name: "Appréhender les méthodes d’investigation numérique", hours: 90, coef: 2 },
          { code: "M206", name: "Développer des stratégies de gestion des risques", hours: 90, coef: 2 },
        ],
      },
      {
        title: "Cloud Computing",
        modules: [
          { code: "EGTS202", name: "Français", hours: 115, coef: 2 },
          { code: "EGTS203", name: "Anglais technique", hours: 50, coef: 2 },
          { code: "EGTS204", name: "Culture entrepreneuriale", hours: 45, coef: 2 },
          { code: "EGTS205", name: "Compétences comportementales", hours: 30, coef: 2 },
          { code: "EGTS208", name: "Entrepreneuriat-PIE 2", hours: 80, coef: 2 },
          { code: "EGTSA206", name: "Culture et techniques avancées du numérique", hours: 30, coef: 1 },
          { code: "M201", name: "Comprendre l’architecture Cloud", hours: 45, coef: 2 },
          { code: "M202", name: "Explorer un environnement Cloud propriétaire en ligne public", hours: 45, coef: 3 },
          { code: "M203", name: "Implémenter un environnement Cloud avec une solution libre", hours: 135, coef: 3 },
          {
            code: "M204",
            name: "Administrer un environnement Cloud propriétaire en ligne public",
            hours: 105,
            coef: 3,
          },
          { code: "M205", name: "Sécuriser un environnement Cloud propriétaire en ligne public", hours: 105, coef: 2 },
          { code: "M206", name: "Gouverner les données dans le Cloud", hours: 60, coef: 2 },
          {
            code: "M207",
            name: "Établir une stratégie de maintien d’un SI dans un Cloud propriétaire en ligne public",
            hours: 90,
            coef: 2,
          },
        ],
      },
    ],
  },
}

export default function FormationDetail({ formation, onNavigate }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const details = formationDetails[formation];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navigation onNavigate={onNavigate} />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-8">{details.title}</h1>

          {/* First Year Section */}
          <motion.section
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">{details.firstYear.title}</h2>

            {/* General Modules */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Modules Généraux</h3>
              <div className="grid grid-cols-2 gap-4">
                {details.firstYear.generalModules.map((module, index) => (
                  <motion.div
                    key={module.code}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-blue-50 hover:bg-blue-100 transition-colors rounded-lg p-4"
                  >
                    <p className="text-sm font-semibold text-blue-600">{module.code}</p>
                    <p className="text-gray-700">{module.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specialized Modules */}
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Modules Spécialisés</h3>
              <div className="grid grid-cols-2 gap-4">
                {details.firstYear.specializedModules.map((module, index) => (
                  <motion.div
                    key={module.code}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-blue-50 hover:bg-blue-100 transition-colors rounded-lg p-4"
                  >
                    <p className="text-sm font-semibold text-blue-600">{module.code}</p>
                    <p className="text-gray-700">{module.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Options Section */}
          <motion.section
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Options de Spécialisation</h2>
            <div className="space-y-6">
              {details.options.map((option, index) => (
                <div key={option.title} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setSelectedOption(selectedOption === index ? null : index)}
                    className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 transition-colors"
                  >
                    <span className="text-lg font-semibold text-blue-700">{option.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-600 transform transition-transform ${
                        selectedOption === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {selectedOption === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {option.modules.map((module) => (
                          <div 
                            key={module.code} 
                            className="bg-blue-50 hover:bg-blue-100 transition-colors rounded-lg p-4 flex flex-col"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <p className="text-sm font-bold text-blue-700">{module.code}</p>
                              <div className="flex items-center space-x-4">
                                <span className="text-sm font-bold text-blue-800">
                                  {module.hours}h
                                </span>
                                <span className="text-sm font-bold text-blue-800">
                                  Coef: {module.coef}
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-700 flex-grow">{module.name}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

