'use client';

import React from 'react';
import { 
  COMPANY_INFO, 
  TIMELINE 
} from '../data/airflowData';
import { 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Factory
} from 'lucide-react';

export function AboutAndHeritage() {
  return (
    <section id="heritage" className="py-16 lg:py-24 border-b border-slate-800/80 bg-slate-950/60">
      <div className="app-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Pioneering HVAC Since 1973</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight mb-4">
            50+ Years of Aerodynamic <span className="text-purple-400">Excellence & Innovation</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From our state-of-the-art 1,50,000+ sq. ft. manufacturing plant in Greater Noida to our in-house AMCA certified test lab, Air Flow delivers unmatched reliability.
          </p>
        </div>

        {/* Manufacturing & Lab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Facility Card 1: Precision Manufacturing */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-cyan-400 mb-4">
                <Factory className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Manufacturing Facility • Greater Noida, UP
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-black text-white mb-3">
                150,000+ Sq. Ft. Precision Engineering Plant
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Our Ecotech III manufacturing infrastructure features high-precision CNC laser cutting systems, automatic turret punch presses, automated dynamic wheel balancing up to ISO 1940 Grade G2.5, and automated coil winding stations.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>CNC Laser Sheet Profiling</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Automated Dynamic Balancing</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Robotic MIG/TIG Welding</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Automated Powder Coating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Facility Card 2: AMCA Certified Lab */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-purple-400 mb-4">
                <ShieldCheck className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Testing & R&D Laboratory
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-black text-white mb-3">
                AMCA 210 & AMCA 300 Certified Wind Tunnel Lab
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Every Airflow product model is aerodynamically validated in our calibrated wind tunnel test chambers for flow rate (CFM), static pressure (Pa), brake horsepower (BHP), and sound acoustic octave band analysis (dBA).
              </p>

              <div className="space-y-2.5 text-xs text-slate-200">
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="font-semibold text-white">AMCA 210 Standard</span>
                  <span className="text-cyan-400 font-mono">Air Performance & CFM Verification</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="font-semibold text-white">AMCA 300 Standard</span>
                  <span className="text-purple-400 font-mono">Sound Level & Acoustic Octave Bands</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="font-semibold text-white">UL 555 & UL 555S</span>
                  <span className="text-orange-400 font-mono">120/180 Min Fire Damper Integrity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 50 Years Timeline */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              Our Journey Through Five Decades
            </h3>
            <p className="text-xs text-slate-400">
              Continuously advancing aerodynamic science from 1973 to modern digital ERP manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/70 rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/40 transition-all"
              >
                <div className="text-2xl font-heading font-black text-cyan-400 mb-1">
                  {item.year}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
