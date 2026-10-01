'use client';

import React, { useState, useMemo } from 'react';
import { 
  PRODUCT_CATEGORIES, 
  PRODUCTS 
} from '../data/airflowData';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  Flame, 
  Wind, 
  Eye, 
  Plus, 
  Check, 
  Layers
} from 'lucide-react';

export function ProductCatalog({ 
  selectedCategory, 
  onSelectCategory, 
  searchQuery, 
  onSelectProduct,
  onAddToCart 
}) {
  const [localSearch, setLocalSearch] = useState(searchQuery || '');
  const [filterAMCAOnly, setFilterAMCAOnly] = useState(false);
  const [filterFireRatedOnly, setFilterFireRatedOnly] = useState(false);
  const [addedIds, setAddedIds] = useState({});

  // Filter products based on category, search, and badges
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory && selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search match
      const query = (localSearch || searchQuery || '').toLowerCase();
      if (query) {
        const matchTitle = product.name.toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        const matchTag = product.tagline.toLowerCase().includes(query);
        const matchApp = product.applications?.some(a => a.toLowerCase().includes(query));
        if (!matchTitle && !matchDesc && !matchTag && !matchApp) {
          return false;
        }
      }
      // AMCA filter
      if (filterAMCAOnly && !product.amcaCertified) {
        return false;
      }
      // Fire rating filter
      if (filterFireRatedOnly && (!product.fireRating || product.fireRating === 'Standard')) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, localSearch, searchQuery, filterAMCAOnly, filterFireRatedOnly]);

  const handleAddProduct = (product, e) => {
    e.stopPropagation();
    onAddToCart({
      id: Date.now(),
      category: product.category,
      description: `${product.name} - Standard Spec`,
      cfm: product.airflowRange || 'As per project schedule',
      staticPressure: product.staticPressure || 'Standard',
      material: product.material,
      quantity: 1
    });

    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section id="products" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="app-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Engineering Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
              Ventilation, Fans & <span className="text-cyan-400">Air Distribution</span>
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Precision engineered HVAC systems tested in compliance with AMCA 210, AMCA 300, and UL-555 standards.
            </p>
          </div>

          {/* Search & Counter */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Filter by name, CFM, code..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="input-dark text-xs py-2 pl-9 pr-3 w-56 sm:w-72"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              {localSearch && (
                <button 
                  onClick={() => setLocalSearch('')}
                  className="absolute right-2.5 top-2.5 text-xs text-slate-500 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
            <span className="text-xs bg-slate-800 text-slate-300 font-mono px-3 py-2 rounded-lg border border-slate-700 whitespace-nowrap">
              {filteredProducts.length} Models
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6 pb-2 border-b border-slate-800/80 overflow-x-auto">
          {PRODUCT_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category.id || (!selectedCategory && category.id === 'all');
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{category.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-slate-950 text-cyan-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Filter Tags (AMCA & Fire Rating) */}
        <div className="flex items-center gap-3 mb-8 text-xs text-slate-400">
          <span className="font-semibold text-slate-500 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Fast Filters:
          </span>
          <button
            onClick={() => setFilterAMCAOnly(!filterAMCAOnly)}
            className={`px-3 py-1 rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
              filterAMCAOnly
                ? 'bg-cyan-950 border-cyan-500 text-cyan-300 font-bold'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            AMCA Certified Only
          </button>

          <button
            onClick={() => setFilterFireRatedOnly(!filterFireRatedOnly)}
            className={`px-3 py-1 rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
              filterFireRatedOnly
                ? 'bg-orange-950 border-orange-500 text-orange-300 font-bold'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            Fire / Smoke Rated (250°C / UL-555)
          </button>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <Wind className="w-12 h-12 text-slate-600 mx-auto mb-3 animate-spin-slow" />
            <div className="text-base font-bold text-white mb-1">No products match your filter</div>
            <p className="text-xs text-slate-400 mb-4">Try clearing filters or search terms</p>
            <button
              onClick={() => {
                setLocalSearch('');
                onSelectCategory('all');
                setFilterAMCAOnly(false);
                setFilterFireRatedOnly(false);
              }}
              className="btn-secondary text-xs cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isAdded = addedIds[product.id];
              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/50 flex flex-col cursor-pointer group"
                >
                  {/* Image Container with Badges */}
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {product.amcaCertified && (
                        <span className="badge-amca text-[10px] bg-cyan-950/90 backdrop-blur-md">
                          <ShieldCheck className="w-3 h-3" /> AMCA
                        </span>
                      )}
                      {product.fireRating && product.fireRating !== 'Standard' && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-950/90 text-orange-300 border border-orange-500/40 px-2 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-md">
                          <Flame className="w-3 h-3 text-orange-400" /> {product.fireRating.includes('UL') ? 'UL-555' : '250°C Fire'}
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-mono uppercase bg-slate-900/90 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">
                        {product.category}
                      </span>
                    </div>

                    {/* Bottom overlay tag */}
                    <div className="absolute bottom-2 left-3 right-3 text-[11px] text-cyan-300 font-medium truncate">
                      {product.tagline}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-heading font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Specs Matrix */}
                      <div className="bg-slate-950/70 rounded-xl p-3 border border-slate-800/80 text-[11px] space-y-1.5 mb-4 font-mono">
                        {product.airflowRange && (
                          <div className="flex justify-between">
                            <span className="text-slate-500">Airflow:</span>
                            <span className="text-slate-200 truncate max-w-[65%]">{product.airflowRange}</span>
                          </div>
                        )}
                        {product.staticPressure && (
                          <div className="flex justify-between">
                            <span className="text-slate-500">Pressure:</span>
                            <span className="text-slate-200 truncate max-w-[65%]">{product.staticPressure}</span>
                          </div>
                        )}
                        {product.soundLevel && (
                          <div className="flex justify-between">
                            <span className="text-slate-500">Sound:</span>
                            <span className="text-slate-200">{product.soundLevel}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                      <button
                        type="button"
                        onClick={(e) => handleAddProduct(product, e)}
                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 border border-orange-500/40'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Added!
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" /> Add to BOQ
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectProduct(product)}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
                        title="View Detailed Cut-Sheet"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
