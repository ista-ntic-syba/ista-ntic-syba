import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#003366] text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <span className="flex items-center">
              <span className="mr-2">📍</span>
              <span className="hidden sm:inline">Siyaha -</span> Marrakech
            </span>
            <span className="flex items-center">
              <span className="mr-2">📞</span>
              0525450505
            </span>
            <span className="flex items-center">
              <span className="mr-2">📧</span>
              contact@startechpro.com
            </span>
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <Facebook className="w-4 h-4" />
            <Instagram className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

