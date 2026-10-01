'use client';

import React from 'react';
import { 
  X, 
  FileSpreadsheet, 
  Plus, 
  CheckCircle2
} from 'lucide-react';

export function ProductDetailModal({ product, onClose, onAddToCart, onOpenBOQ }) {
  if (!product) return null;

  const handleAdd = () => {
    onAddToCart({
      id: Date.now(),
      category: product.category,
      description: `${product.name} - Official Specification`,
      cfm: product.airflowRange || 'As per BOQ schedule',
      staticPressure: product.staticPressure || 'Standard',
      material: product.material,
      quantity: 1
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="modal-content-animated relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase bg-cyan-950 text-cyan-400 px-2.5 py-0.5 rounded border border-cyan-800/50">
              {product.category}
            </span>
            {product.amcaCertified && (
              <span className="badge-amca text-[10px]">
                AMCA 210 / 300 Certified
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* Top Info with Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-56 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-black text-white mb-2">
                  {product.name}
                </h2>
                <div className="text-xs font-semibold text-cyan-400 mb-3">
                  {product.tagline}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
                <button
                  onClick={handleAdd}
                  className="btn-primary text-xs flex-1 justify-center py-2.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Add to BOQ Basket
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenBOQ();
                  }}
                  className="btn-boq text-xs py-2.5 px-3 cursor-pointer"
                  title="Upload Full BOQ with this product"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Technical Specs Table */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Technical Specifications & Ratings
            </h3>
            <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/60">
              <table className="dark-table text-xs">
                <tbody>
                  {product.airflowRange && (
                    <tr>
                      <td className="font-semibold text-slate-400 w-1/3">Airflow Capacity</td>
                      <td className="font-mono text-cyan-300">{product.airflowRange}</td>
                    </tr>
                  )}
                  {product.staticPressure && (
                    <tr>
                      <td className="font-semibold text-slate-400">Static Pressure Range</td>
                      <td className="font-mono text-emerald-300">{product.staticPressure}</td>
                    </tr>
                  )}
                  {product.soundLevel && (
                    <tr>
                      <td className="font-semibold text-slate-400">Sound / Acoustic Rating</td>
                      <td className="font-mono text-slate-200">{product.soundLevel}</td>
                    </tr>
                  )}
                  {product.material && (
                    <tr>
                      <td className="font-semibold text-slate-400">Material & Construction</td>
                      <td className="text-slate-200">{product.material}</td>
                    </tr>
                  )}
                  {product.fireRating && (
                    <tr>
                      <td className="font-semibold text-slate-400">Fire / Life Safety Rating</td>
                      <td className="text-orange-400 font-semibold">{product.fireRating}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Engineering Features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Engineering Highlights
              </h3>
              <div className="space-y-2">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications */}
          {product.applications && product.applications.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Recommended Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-lg border border-slate-700"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
