import React from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
}

const iconVariants = {
  hover: {
    rotate: [0, -10, 10, -5, 5, 0],
    transition: {
      duration: 0.5,
    },
  },
}

const links = [
  {
    title: "OFPPT",
    image: "/logo/ofppt.png",
    color: "from-[#003366] to-[#004080]",
    href: "https://www.ofppt.ma", // Updated href
  },
  {
    title: "Emplois",
    image: "/emploi.svg",
    color: "from-[#0055a4] to-[#0066cc]",
    onClick: "emplois",
  },
  {
    title: "MY Way",
    image: "/logo/myway.png",
    color: "from-[#0077cc] to-[#0088ee]",
    href: "https://www.myway.ac.ma",
  },
  {
    title: "OFPPT LANGUES",
    image: "/logo/ofppt.png",
    color: "from-[#3399ff] to-[#44aaff]",
    href: "https://altissia.org/fr/ofppt-langues",
  },
]

export default function QuickLinks({ onNavigate }) {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 -mt-10 sm:-mt-20 relative z-20 py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          animate="visible"
        >
          {links.map((link, index) => (
            <motion.div
              key={link.title}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className={`relative group overflow-hidden rounded-xl shadow-lg cursor-pointer
                         bg-gradient-to-br ${link.color}`}
              onClick={() => {
                if (link.href) {
                  window.open(link.href, "_blank") // Open in new tab
                }
                if (link.onClick) {
                  onNavigate(link.onClick)
                  window.scrollTo(0, 0)
                }
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[length:24px_24px]" />

              <div className="relative p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <motion.div className="bg-white/10 rounded-lg p-3" variants={iconVariants}>
                    <img
                      src={link.image || "/placeholder.svg"}
                      alt={link.title}
                      className="w-12 sm:w-16 h-12 sm:h-16 object-contain"
                    />
                  </motion.div>

                  {(link.href || link.onClick === null) && ( // Show icon for external links
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} whileHover={{ opacity: 1 }}>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </div>

                <div className="mt-4">
                  <h3 className="text-white text-lg sm:text-xl font-medium">{link.title}</h3>
                  <motion.div
                    className="h-1 bg-white/30 mt-2 rounded"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}