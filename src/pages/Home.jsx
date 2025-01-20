import React from "react"
import TopBar from "../components/TopBar"
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import QuickLinks from "../components/QuickLinks"
import Filieres from "../components/Filieres"
import FAQ from "../components/FAQ"
import Localization from "../components/Localization"
import Footer from "../components/Footer"
import Stats from "../components/Stats"

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
      {/* <TopBar /> */}
      <Navigation onNavigate={onNavigate} />
      <Hero />
      <div className="my-24" />
      <QuickLinks onNavigate={onNavigate} />
      <Filieres onNavigate={onNavigate} />
      <FAQ />
      <Stats />
      <Localization />
      <Footer />
    </div>
  )
}

