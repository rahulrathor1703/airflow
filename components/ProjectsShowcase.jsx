'use client';

import React, { useState } from 'react';
import { 
  LANDMARK_PROJECTS 
} from '../data/airflowData';
import { 
  Compass, 
  MapPin, 
  CheckCircle, 
  FileSpreadsheet
} from 'lucide-react';

export function ProjectsShowcase({ onOpenBOQ }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Aviation', 'Infrastructure', 'Commercial', 'Healthcare', 'Industrial'];

  const filteredProjects = filter === 'All'
    ? LANDMARK_PROJECTS
    : LANDMARK_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="app-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
              Landmark <span className="text-amber-400">Projects & Infrastructure</span>
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Airflow products are installed in India's most iconic aviation hubs, underground metro corridors, super-specialty hospitals, and industrial mega-refineries.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  filter === cat
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-amber-500/40 flex flex-col group"
            >
              <div className="relative h-52 bg-slate-950 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase bg-amber-950/90 text-amber-400 border border-amber-500/40 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    {proj.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-200 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{proj.location}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-heading font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {proj.scope}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-400 font-semibold text-[11px]">
                    {proj.metrics}
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Commissioned
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom BOQ CTA banner */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900">
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-1">
              Have an upcoming airport, metro, commercial, or hospital project?
            </h3>
            <p className="text-xs text-slate-300">
              Upload your tender specifications or BOQ to receive an AMCA compliant proposal in 4 hours.
            </p>
          </div>
          <button
            onClick={onOpenBOQ}
            className="btn-boq text-xs py-3 px-6 whitespace-nowrap cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Upload BOQ for My Project</span>
          </button>
        </div>
      </div>
    </section>
  );
}
