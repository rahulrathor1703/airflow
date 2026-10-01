'use client';

import React, { useState } from 'react';
import { 
  Wind, 
  FileSpreadsheet, 
  LogIn, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  ShoppingBag, 
  PhoneCall, 
  ShieldCheck, 
  Layers, 
  Building2, 
  Cpu, 
  Compass, 
  SlidersHorizontal
} from 'lucide-react';
import { PRODUCT_CATEGORIES, COMPANY_INFO } from '../data/airflowData';

export function Navbar({ 
  onOpenBOQ, 
  onOpenERP, 
  cartCount, 
  onOpenCart, 
  onSelectCategory, 
  onSearch, 
  onNavigateSection,
  activeSection
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      onNavigateSection('products');
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* Top Banner: Credentials & Contact */}
      <div className="bg-slate-900/90 border-b border-slate-800 text-xs text-slate-300 py-1.5 px-4 hidden md:block">
        <div className="app-container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              AMCA Certified Wind Tunnel Tested Lab • ISO 9001:2015
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">
              50+ Years Engineering Excellence (Since 1973)
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
              Plant: Ecotech III, Greater Noida
            </span>
            <a 
              href="tel:+911202397000" 
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <PhoneCall className="w-3 h-3" />
              +91 120 2397000
            </a>
            <button
              onClick={onOpenERP}
              className="text-xs bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-500/30 text-indigo-300 px-2.5 py-0.5 rounded flex items-center gap-1 transition-all cursor-pointer"
            >
              <LogIn className="w-3 h-3" />
              Airflow ERP Login
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <header className="sticky top-0 z-40 glass-nav transition-all duration-300">
        <div className="app-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand Identity */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigateSection('hero'); }}
              className="flex items-center gap-3 group text-decoration-none"
            >
              <div className="flex items-center bg-white/95 hover:bg-white px-3 py-1.5 rounded-xl border border-slate-700 shadow-md shadow-cyan-950/40 transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/logo.svg" 
                  alt="Air Flow Official Logo" 
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-200">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button 
                  onClick={() => onNavigateSection('products')}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors hover:text-cyan-400 hover:bg-slate-800/50 cursor-pointer ${activeSection === 'products' ? 'text-cyan-400 bg-slate-800/60' : ''}`}
                >
                  <Layers className="w-4 h-4 text-cyan-400" />
                  Products
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {productsDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 pt-2 z-50">
                    <div className="glass-panel rounded-xl p-2 border border-slate-700/60 shadow-2xl shadow-slate-950/80 backdrop-blur-xl">
                      <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
                        Product Categories
                      </div>
                      <div className="py-1">
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              onSelectCategory(cat.id);
                              onNavigateSection('products');
                              setProductsDropdownOpen(false);
                            }}
                            className="w-full text-left px-3 py-2 text-xs font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-950/40 rounded-lg flex items-center justify-between transition-colors cursor-pointer"
                          >
                            <span>{cat.name}</span>
                            <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                              {cat.count}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => onNavigateSection('applications')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors hover:text-cyan-400 hover:bg-slate-800/50 cursor-pointer ${activeSection === 'applications' ? 'text-cyan-400 bg-slate-800/60' : ''}`}
              >
                <Building2 className="w-4 h-4 text-sky-400" />
                Applications
              </button>

              <button 
                onClick={() => onNavigateSection('sizer')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors hover:text-cyan-400 hover:bg-slate-800/50 cursor-pointer ${activeSection === 'sizer' ? 'text-cyan-400 bg-slate-800/60' : ''}`}
              >
                <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
                Fan Sizer Tool
              </button>

              <button 
                onClick={() => onNavigateSection('projects')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors hover:text-cyan-400 hover:bg-slate-800/50 cursor-pointer ${activeSection === 'projects' ? 'text-cyan-400 bg-slate-800/60' : ''}`}
              >
                <Compass className="w-4 h-4 text-amber-400" />
                Projects
              </button>

              <button 
                onClick={() => onNavigateSection('heritage')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors hover:text-cyan-400 hover:bg-slate-800/50 cursor-pointer ${activeSection === 'heritage' ? 'text-cyan-400 bg-slate-800/60' : ''}`}
              >
                <Cpu className="w-4 h-4 text-purple-400" />
                About & Plant
              </button>
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Quick Search */}
              <div className="relative">
                {searchOpen ? (
                  <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search fans, diffusers, dampers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="input-dark text-xs py-1.5 px-3 w-48 sm:w-64 rounded-l-lg border-r-0"
                    />
                    <button
                      type="submit"
                      className="bg-cyan-600 hover:bg-cyan-500 text-white p-1.5 rounded-r-lg cursor-pointer"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="text-slate-400 hover:text-white ml-2 text-xs cursor-pointer"
                    >
                      ✕
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700/50 transition-colors cursor-pointer"
                    title="Search Products"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Requirement / RFQ Basket */}
              <button
                onClick={onOpenCart}
                className="relative p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700/50 transition-colors cursor-pointer"
                title="View Requirement List"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Internal ERP Login Button */}
              <button
                onClick={onOpenERP}
                className="btn-erp hidden sm:inline-flex cursor-pointer"
                title="Internal Employee & Airflow ERP Portal"
              >
                <LogIn className="w-4 h-4 text-indigo-300" />
                <span>Internal ERP</span>
              </button>

              {/* Upload BOQ / Raise Requirement Button */}
              <button
                onClick={onOpenBOQ}
                className="btn-boq cursor-pointer"
                title="Upload BOQ or Raise Custom Ventilation Requirement"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span className="hidden xs:inline">Upload BOQ</span>
                <span className="xs:hidden">BOQ</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-cyan-400 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-5 backdrop-blur-2xl">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => { onNavigateSection('products'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-lg flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" /> Products Catalog
                </span>
                <span className="text-xs text-slate-500">28+ Models</span>
              </button>

              <button
                onClick={() => { onNavigateSection('applications'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-lg flex items-center gap-2"
              >
                <Building2 className="w-4 h-4 text-sky-400" /> Application Sectors
              </button>

              <button
                onClick={() => { onNavigateSection('sizer'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-lg flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4 text-emerald-400" /> Interactive Fan Sizer
              </button>

              <button
                onClick={() => { onNavigateSection('projects'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-lg flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-amber-400" /> Landmark Projects
              </button>

              <button
                onClick={() => { onNavigateSection('heritage'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-lg flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-purple-400" /> Company Heritage & AMCA Lab
              </button>

              <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2.5">
                <button
                  onClick={() => { onOpenBOQ(); setMobileMenuOpen(false); }}
                  className="btn-boq w-full justify-center"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  Upload BOQ / Raise Requirement
                </button>

                <button
                  onClick={() => { onOpenERP(); setMobileMenuOpen(false); }}
                  className="btn-erp w-full justify-center"
                >
                  <LogIn className="w-4 h-4" />
                  Airflow Internal ERP
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
