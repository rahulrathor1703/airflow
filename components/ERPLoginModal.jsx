'use client';

import React, { useState } from 'react';
import { 
  X, 
  LogIn, 
  Briefcase, 
  Cpu, 
  Sliders, 
  Truck, 
  ExternalLink, 
  ArrowRight,
  Lock,
  CheckCircle
} from 'lucide-react';
import { ERP_SYSTEMS } from '../data/airflowData';

export function ERPLoginModal({ isOpen, onClose }) {
  const [selectedSystem, setSelectedSystem] = useState(ERP_SYSTEMS[0]);
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Sales & Estimation Engineer');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLaunchDirect = (erp) => {
    window.open(erp.url, '_blank');
  };

  const handleSSOSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setAuthSuccess(true);
      setTimeout(() => {
        window.open(selectedSystem.url, '_blank');
        onClose();
      }, 1000);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="modal-content-animated relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-indigo-950/60 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-6 py-4 border-b border-indigo-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <LogIn className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-heading font-bold text-white flex items-center gap-2">
                Internal Employee & ERP Gateway
                <span className="text-[11px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                  Airflow Enterprise SSO
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Single Sign-On access for Sales Engineers, Plant Operations & Technical Teams
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* ERP System Selector Cards */}
          <div className="mb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
              <span>Select Target ERP System</span>
              <span className="text-indigo-400 font-normal normal-case text-[11px]">
                Click card to select or launch directly ↗
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ERP_SYSTEMS.map((erp) => {
                const isSelected = selectedSystem.id === erp.id;
                return (
                  <div
                    key={erp.id}
                    onClick={() => setSelectedSystem(erp)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-indigo-950/50 border-indigo-500/80 shadow-lg shadow-indigo-950/50 ring-1 ring-indigo-500/50'
                        : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${erp.color} flex items-center justify-center text-white text-xs font-bold`}>
                          {erp.id === 'airflow-sales-crm' ? <Briefcase className="w-4 h-4" /> :
                           erp.id === 'airflow-production' ? <Cpu className="w-4 h-4" /> :
                           erp.id === 'engineering-sizing' ? <Sliders className="w-4 h-4" /> :
                           <Truck className="w-4 h-4" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">
                            {erp.name}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {erp.role}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLaunchDirect(erp);
                        }}
                        className="text-slate-400 hover:text-indigo-300 p-1 hover:bg-slate-800 rounded cursor-pointer"
                        title="Open ERP in New Tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 mb-2.5 leading-relaxed">
                      {erp.desc}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px]">
                      <span className="font-mono text-slate-500">{erp.url}</span>
                      <span className="text-indigo-400 font-semibold flex items-center gap-1">
                        {isSelected ? '✓ Selected' : 'Select'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick SSO Login Box */}
          <div className="bg-slate-950/70 border border-indigo-900/40 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-white">
                  Direct Login to {selectedSystem.name}
                </span>
              </div>
              <span className="text-[10px] bg-indigo-950 text-indigo-400 border border-indigo-800/40 px-2 py-0.5 rounded-full font-mono">
                Encrypted Session
              </span>
            </div>

            {authSuccess ? (
              <div className="text-center py-4 text-emerald-400 flex flex-col items-center gap-2">
                <CheckCircle className="w-8 h-8 animate-bounce" />
                <div className="text-sm font-bold">Authentication Verified!</div>
                <div className="text-xs text-slate-400">Redirecting to {selectedSystem.name}...</div>
              </div>
            ) : (
              <form onSubmit={handleSSOSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Employee Email / Airflow ID
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. engineer@airflow.in"
                      value={employeeId}
                      onChange={(e) => setEmployeeId(e.target.value)}
                      className="input-dark text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Password / Security PIN
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-dark text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Access Role / Department
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="input-dark text-xs"
                    >
                      <option>Sales & Estimation Engineer</option>
                      <option>Project Manager & Delivery Lead</option>
                      <option>Greater Noida Factory Operations</option>
                      <option>Quality Assurance & AMCA Lab</option>
                      <option>System Administrator / Director</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      disabled={isAuthenticating}
                      className="btn-erp w-full justify-center py-2.5 text-xs font-bold cursor-pointer"
                    >
                      {isAuthenticating ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin">⏳</span> Authenticating...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <LogIn className="w-3.5 h-3.5" />
                          <span>Login & Redirect to ERP</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
              <span>Having trouble logging in? Contact IT Support at it-helpdesk@airflow.in</span>
              <button
                type="button"
                onClick={() => handleLaunchDirect(selectedSystem)}
                className="text-indigo-400 hover:text-indigo-300 underline flex items-center gap-1 font-medium cursor-pointer"
              >
                Launch {selectedSystem.name} URL directly ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
