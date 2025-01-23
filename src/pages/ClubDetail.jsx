import React from "react"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

// Développé par : Sara DERDAK

const clubDetails = {
  "Club Sportif": {
    title: "Club Sportif",
    description:
      "Le Club Sportif de l'ISTA NTIC SYBA offre aux étudiants la possibilité de pratiquer diverses activités sportives, favorisant ainsi un mode de vie sain et équilibré. Nos membres participent à des compétitions inter-écoles et organisent des événements sportifs tout au long de l'année. \n Le Club Sportif de l'ISTA NTIC SYBA offre aux étudiants la possibilité de pratiquer diverses activités sportives, favorisant ainsi un mode de vie sain et équilibré. Nos membres participent à des compétitions inter-écoles et organisent des événements sportifs tout au long de l'année. \n Le Club Sportif de l'ISTA NTIC SYBA offre aux étudiants la possibilité de pratiquer diverses activités sportives, favorisant ainsi un mode de vie sain et équilibré. Nos membres participent à des compétitions inter-écoles et organisent des événements sportifs tout au long de l'année.",
    image: "/clubs/poster.jpeg",
  },
  "Club Socioculturel": {
    title: "Club Socioculturel",
    description:
      "Le Club Socioculturel est dédié à l'enrichissement de la vie étudiante à travers des activités culturelles et sociales. Nous organisons des événements tels que des expositions d'art, des soirées cinéma, des débats et des sorties culturelles pour promouvoir l'échange et la diversité.",
    image: "/images/club-socioculturel.jpg",
  },
  "Club IT": {
    title: "Club IT",
    description:
      "Le Club IT rassemble les passionnés de technologie et d'informatique. Nous organisons des ateliers, des hackathons et des conférences pour approfondir les connaissances en programmation, en cybersécurité et en nouvelles technologies. C'est l'endroit idéal pour développer vos compétences et réseauter avec d'autres enthousiastes de l'IT.",
    image: "/images/club-it.jpg",
  },
  "Club Citoyenneté et Environnement": {
    title: "Club Citoyenneté et Environnement",
    description:
      "Le Club Citoyenneté et Environnement s'engage dans des projets visant à sensibiliser et à agir pour la protection de l'environnement et la promotion de la citoyenneté responsable. Nous organisons des campagnes de nettoyage, des ateliers de recyclage et des initiatives de développement durable au sein de notre communauté.",
    image: "/images/club-environnement.jpg",
  },
}

export default function ClubDetail({ onNavigate, club }) {
  const details = clubDetails[club]

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
          <div className="flex flex-col md:flex-row gap-8">
            <motion.img
              src={details.image}
              alt={details.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <div className="w-full md:w-1/2">
              <motion.p
                className="text-lg text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {details.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

