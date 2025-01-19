import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Emplois = ({ onNavigate }) => {
  const [selectedFiliere, setSelectedFiliere] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [showIframe, setShowIframe] = useState(false);

  const filieres = [
    { code: 'WFS', name: 'Web Full Stack', groups: Array.from({length: 10}, (_, i) => `2${i < 9 ? '0' : ''}${i + 1}`) },
    { code: 'ID', name: 'Infrastructure Digitale', groups: Array.from({length: 9}, (_, i) => `10${i + 1}`) },
    { code: 'DEV', name: 'Développement Digital', groups: Array.from({length: 9}, (_, i) => `10${i + 1}`) },
    { code: 'SR', name: 'Systèmes et Réseaux', groups: ['201', '202', '203'] },
    { code: 'CS', name: 'Cyber Sécurité', groups: ['201'] },
    { code: 'CC', name: 'Cloud Computing', groups: ['201'] },
    { code: 'AM', name: 'Application Mobile', groups: ['201'] }
  ];

  const handleFiliereChange = (e) => {
    const filiere = e.target.value;
    setSelectedFiliere(filiere);
    setSelectedGroup('');
    setShowIframe(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowIframe(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* <TopBar /> */}
      <Navigation onNavigate={onNavigate} />
      <div className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="w-full bg-white rounded-lg shadow-md p-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#003366] mb-6">Emploi du temps</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <label htmlFor="filiere" className="block text-sm font-medium text-gray-700 mb-2">
                  Sélectionnez votre filière
                </label>
                <select
                  id="filiere"
                  value={selectedFiliere}
                  onChange={handleFiliereChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Choisir une filière</option>
                  {filieres.map(({ code, name }) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label htmlFor="group" className="block text-sm font-medium text-gray-700 mb-2">
                  Sélectionnez votre groupe
                </label>
                <select
                  id="group"
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  disabled={!selectedFiliere}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Choisir un groupe</option>
                  {selectedFiliere && filieres.find(f => f.code === selectedFiliere)?.groups.map((group) => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <button
                  type="submit"
                  disabled={!selectedFiliere || !selectedGroup}
                  className="w-full bg-[#003366] text-white py-2 px-4 rounded-md hover:bg-blue-900 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Afficher l'emploi du temps
                </button>
              </div>
            </form>

            <div className="mt-4 min-h-[800px]">
              {showIframe && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <iframe
                    src={`https://e-planner.somee.com/accueil_grp.aspx?grp=${selectedFiliere}${selectedGroup}`}
                    className="w-full h-[800px] border-0"
                    title="Emploi du temps"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Emplois;