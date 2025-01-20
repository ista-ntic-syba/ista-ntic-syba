import React, { useState } from "react"
import Home from "./pages/Home"
import Emplois from "./pages/Emplois"
import About from "./pages/About"
import Actualite from "./pages/Actualite"
import FormationDetail from "./pages/FormationDetail"
import ClubDetail from "./pages/ClubDetail"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [formationDetails, setFormationDetails] = useState(null)

  const handleNavigate = (page, details = null) => {
    setCurrentPage(page)
    if (details) {
      setFormationDetails(details)
    }
  }

  return (
    <div className="app">
      {currentPage === "home" && <Home onNavigate={handleNavigate} />}
      {currentPage === "emplois" && <Emplois onNavigate={handleNavigate} />}
      {currentPage === "about" && <About onNavigate={handleNavigate} />}
      {currentPage === "actualite" && <Actualite onNavigate={handleNavigate} />}
      {currentPage === "formationDetail" && (
        <FormationDetail onNavigate={handleNavigate} formation={formationDetails.formation} />
      )}
      {currentPage === "clubDetail" && <ClubDetail onNavigate={handleNavigate} club={formationDetails.club} />}
    </div>
  )
}

