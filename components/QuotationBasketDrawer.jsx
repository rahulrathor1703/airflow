'use client';

import React from 'react';
import { 
  X, 
  Trash2, 
  FileSpreadsheet, 
  ShoppingBag, 
  ArrowRight, 
  Plus, 
  Minus
} from 'lucide-react';

export function QuotationBasketDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedToBOQ }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-heading font-bold text-white">
                  Quotation Requirement Basket
                </h2>
                <p className="text-xs text-slate-400">
                  {cartItems.length} Products Selected
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body: Items List */}
          <div className="p-6 flex-1 overflow-y-auto space-y-3">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 text-slate-500">
                <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="text-sm font-semibold text-slate-400 mb-1">
                  Your requirement basket is empty
                </p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Browse products or use the Fan Sizer tool to add items for quotation.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800/50">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-bold text-white mt-1">
                        {item.description}
                      </h4>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-slate-500 hover:text-red-400 p-1 cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-[11px] text-slate-400 mb-3 space-y-0.5 font-mono">
                    {item.cfm && <div>Airflow: <span className="text-slate-200">{item.cfm}</span></div>}
                    {item.staticPressure && <div>Pressure: <span className="text-slate-200">{item.staticPressure}</span></div>}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                    <span className="text-xs text-slate-400">Quantity:</span>
                    <div className="flex items-center gap-2 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                        className="text-slate-400 hover:text-white cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-white px-2">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                        className="text-slate-400 hover:text-white cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onProceedToBOQ(cartItems);
                }}
                className="btn-boq w-full justify-center py-3 text-xs cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Submit as Formal BOQ RFQ ({cartItems.length} items)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-500">
                Directly sent to Airflow ERP & Greater Noida Plant
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
