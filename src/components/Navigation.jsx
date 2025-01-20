import React, { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const menuItems = {
  formation: ["Infrastructure Digitale", "Développement Digital", "Digital Design"],
  clubs: ["Club Sportif", "Club Socioculturel", "Club IT", "Club Citoyenneté et Environnement"],
}

export default function Navigation({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isClubsDropdownOpen, setIsClubsDropdownOpen] = useState(false)

  const menuVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
          delay: 0.1,
        },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  }

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/logo/ofppt.png" alt="OFPPT Logo" className="h-8 sm:h-10" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              onClick={() => onNavigate("home")}
              className="text-gray-600 hover:text-[#003366] cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative">
                Accueil
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#003366]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </span>
            </motion.a>
            <motion.a
              onClick={() => onNavigate("actualite")}
              className="text-gray-600 hover:text-[#003366] cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative">
                Actualités
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#003366]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </span>
            </motion.a>

            {/* Formation Dropdown */}
            <div className="relative">
              <motion.button
                className="flex items-center text-gray-600 hover:text-[#003366] space-x-1 relative"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative">
                  Formation
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#003366]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </span>
                <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {menuItems.formation.map((item, index) => (
                      <motion.a
                        key={item}
                        onClick={() => onNavigate("formationDetail", { formation: item })}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#003366] cursor-pointer"
                        whileHover={{ x: 6 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clubs Dropdown */}
            <div className="relative">
              <motion.button
                className="flex items-center text-gray-600 hover:text-[#003366] space-x-1 relative"
                onClick={() => setIsClubsDropdownOpen(!isClubsDropdownOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative">
                  Clubs
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#003366]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </span>
                <motion.div animate={{ rotate: isClubsDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isClubsDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseLeave={() => setIsClubsDropdownOpen(false)}
                  >
                    {menuItems.clubs.map((item, index) => (
                      <motion.a
                        key={item}
                        onClick={() => onNavigate("clubDetail", { club: item })}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#003366] cursor-pointer"
                        whileHover={{ x: 6 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              onClick={() => onNavigate("about")}
              className="text-gray-600 hover:text-[#003366] cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative">
                A propos
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#003366]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="py-4 border-t space-y-4">
                <motion.a
                  onClick={() => onNavigate("home")}
                  className="block text-gray-600 hover:text-[#003366] cursor-pointer relative"
                  whileHover={{ x: 6 }}
                >
                  <span className="relative">
                    Accueil
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#003366]"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </span>
                </motion.a>
                <motion.a
                  onClick={() => onNavigate("actualite")}
                  className="block text-gray-600 hover:text-[#003366] cursor-pointer relative"
                  whileHover={{ x: 6 }}
                >
                  <span className="relative">
                    Actualités
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#003366]"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </span>
                </motion.a>

                {/* Mobile Formation Dropdown */}
                <div className="space-y-2">
                  <motion.div
                    className="block text-gray-600 hover:text-[#003366] cursor-pointer relative"
                    whileHover={{ x: 6 }}
                  >
                    <span className="relative">
                      Formation
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#003366]"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </span>
                  </motion.div>
                  <div className="pl-4 space-y-2">
                    {menuItems.formation.map((item, index) => (
                      <motion.a
                        key={item}
                        onClick={() => onNavigate("formationDetail", { formation: item })}
                        className="block text-gray-500 hover:text-[#003366] cursor-pointer"
                        whileHover={{ x: 6 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Mobile Clubs Dropdown */}
                <div className="space-y-2">
                  <motion.div
                    className="block text-gray-600 hover:text-[#003366] cursor-pointer relative"
                    whileHover={{ x: 6 }}
                  >
                    <span className="relative">
                      Clubs
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#003366]"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </span>
                  </motion.div>
                  <div className="pl-4 space-y-2">
                    {menuItems.clubs.map((item, index) => (
                      <motion.a
                        key={item}
                        onClick={() => onNavigate("clubDetail", { club: item })}
                        className="block text-gray-500 hover:text-[#003366] cursor-pointer"
                        whileHover={{ x: 6 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.a
                  onClick={() => onNavigate("about")}
                  className="block text-gray-600 hover:text-[#003366] cursor-pointer relative"
                  whileHover={{ x: 6 }}
                >
                  <span className="relative">
                    A propos
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#003366]"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

