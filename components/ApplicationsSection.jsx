'use client';

import React, { useState } from 'react';
import { 
  APPLICATION_SECTORS 
} from '../data/airflowData';
import { 
  Building2, 
  Plane, 
  Train, 
  Activity, 
  Hotel, 
  Factory, 
  GraduationCap, 
  Home, 
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';

export function ApplicationsSection({ onSelectSector, onOpenBOQ }) {
  const [activeTab, setActiveTab] = useState(APPLICATION_SECTORS[0].id);

  const activeSector = APPLICATION_SECTORS.find((s) => s.id === activeTab) || APPLICATION_SECTORS[0];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Plane': return <Plane className="w-5 h-5" />;
      case 'Train': return <Train className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Hotel': return <Hotel className="w-5 h-5" />;
      case 'Factory': return <Factory className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="applications" className="py-16 lg:py-24 border-b border-slate-800/80 bg-slate-950/40">
      <div className="app-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/70 border border-sky-500/30 text-sky-400 text-xs font-semibold mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Engineered Across Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight mb-4">
            Tailored Solutions for <span className="text-sky-400">Critical Environments</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From sterile operating theatre laminar flow to 400°C emergency metro smoke extraction, Airflow powers India's most demanding projects.
          </p>
        </div>

        {/* Sector Nav Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {APPLICATION_SECTORS.map((sector) => {
            const isActive = sector.id === activeTab;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveTab(sector.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {getIcon(sector.icon)}
                <span>{sector.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Sector Feature Card */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-sky-950/40">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Image & Stats (5 Cols) */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[420px] bg-slate-950">
              <img
                src={activeSector.image}
                alt={activeSector.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="badge-amca text-xs bg-slate-900/90 backdrop-blur-md">
                  AMCA & UL Certified Solutions
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase font-bold text-sky-400 tracking-wider mb-1">
                  Reference Installations
                </div>
                <div className="text-sm font-semibold text-white">
                  {activeSector.projects.slice(0, 2).join(' • ')}
                </div>
              </div>
            </div>

            {/* Right Details (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-sky-400 mb-2">
                  {getIcon(activeSector.icon)}
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Sector Overview
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mb-4">
                  {activeSector.title}
                </h3>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {activeSector.summary}
                </p>

                {/* Key Recommended Products */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Featured Ventilation & Air Distribution Products:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeSector.keyProducts.map((prod, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>{prod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects Deployed */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Client References:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeSector.projects.map((proj, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-900 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-800"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-4">
                <button
                  onClick={onOpenBOQ}
                  className="btn-boq text-xs py-2.5 px-5 cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Raise BOQ for {activeSector.title.split('&')[0]}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
