'use client';

import React from 'react';
import { 
  Wind, 
  MapPin, 
  Phone, 
  Mail, 
  FileSpreadsheet, 
  LogIn, 
  ArrowUp
} from 'lucide-react';
import { PRODUCT_CATEGORIES, APPLICATION_SECTORS } from '../data/airflowData';

export function Footer({ onOpenBOQ, onOpenERP, onNavigateSection, onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs">
      {/* Top Pre-Footer Callout */}
      <div className="border-b border-slate-900 py-10 bg-slate-900/30">
        <div className="app-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <Wind className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-white">
                Have a Complex Ventilation Requirement?
              </h3>
              <p className="text-xs text-slate-400">
                Upload your project BOQ or speak directly with our engineering sales specialists.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBOQ}
              className="btn-boq text-xs py-2.5 px-5 cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Upload BOQ Schedule</span>
            </button>

            <button
              onClick={onOpenERP}
              className="btn-erp text-xs py-2.5 px-5 cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Internal Employee ERP</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="app-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center bg-white/95 px-3 py-1.5 rounded-xl border border-slate-700 w-fit">
              <img 
                src="/logo.svg" 
                alt="Air Flow Official Logo" 
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pr-6">
              India's premier aerodynamic engineering manufacturer since 1973. Delivering AMCA 210/300 certified industrial fans, UL-555 fire and smoke dampers, and architectural air distribution systems for global infrastructure.
            </p>

            {/* Certifications badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="badge-amca text-[10px]">AMCA Certified Lab</span>
              <span className="badge-green text-[10px]">ISO 9001:2015</span>
              <span className="text-[10px] font-bold bg-orange-950 text-orange-400 border border-orange-800/40 px-2 py-0.5 rounded-full">
                UL-555 Fire Rated
              </span>
              <span className="text-[10px] font-bold bg-purple-950 text-purple-400 border border-purple-800/40 px-2 py-0.5 rounded-full">
                CE Certified
              </span>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {PRODUCT_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      onNavigateSection('products');
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-left cursor-pointer"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigateSection('sizer')}
                  className="text-cyan-400 hover:underline font-semibold cursor-pointer"
                >
                  → Interactive Fan Sizer
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Application Sectors */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Sectors & Projects
            </h4>
            <ul className="space-y-2">
              {APPLICATION_SECTORS.slice(0, 5).map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => onNavigateSection('applications')}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-left cursor-pointer"
                  >
                    {sec.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigateSection('projects')}
                  className="text-amber-400 hover:underline font-semibold cursor-pointer"
                >
                  → Landmark Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Factory & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Headquarters & Plant
            </h4>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Ecotech III, Greater Noida, Uttar Pradesh 201306, India</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>+91 120 2397000 / +91 98110 54321</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>sales@airflow.in / info@airflow.in</span>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenERP}
                className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" /> Airflow Enterprise ERP Access
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-900 py-6 bg-slate-950">
        <div className="app-container flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Air Flow Pvt. Ltd. All rights reserved. Registered Trademark.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Engineering</span>
            <span>AMCA Compliance</span>
            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-cyan-400 flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
