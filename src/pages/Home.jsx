import React from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import Filieres from '../components/Filieres';
import FAQ from '../components/FAQ';
import Localization from '../components/Localization';
import Footer from '../components/Footer';

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
      {/* <TopBar /> */}
      <Navigation onNavigate={onNavigate} />
      <Hero />
      <QuickLinks onNavigate={onNavigate} />
      <Filieres />
      <FAQ />
      <Localization />
      <Footer />
    </div>
  );
}

