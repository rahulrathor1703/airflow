'use client';

import React, { useState, useMemo } from 'react';
import { 
  SlidersHorizontal, 
  Wind, 
  Gauge, 
  Volume2, 
  Zap, 
  PlusCircle, 
  Check, 
  FileSpreadsheet, 
  Sparkles
} from 'lucide-react';

export function FanSizerTool({ onAddToCart, onOpenBOQ }) {
  const [cfm, setCfm] = useState(15000);
  const [staticPressure, setStaticPressure] = useState(350);
  const [application, setApplication] = useState('basement-smoke');
  const [fireRating, setFireRating] = useState('250c-2hr');
  const [soundCritical, setSoundCritical] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Conversion calculations
  const cmh = Math.round(cfm * 1.699);
  const staticInches = (staticPressure / 249.08).toFixed(2);

  // Aerodynamic sizing computation
  const sizingResult = useMemo(() => {
    const qM3s = cmh / 3600;
    const airPowerKw = (qM3s * staticPressure) / 1000;
    const assumedEfficiency = 0.72;
    const motorPowerKw = (airPowerKw / assumedEfficiency * 1.15).toFixed(1);

    let matchedModel = 'Vane Axial Fan (VF-1000)';
    let matchedProductId = 'vane-axial-fans';
    let soundDba = Math.round(58 + Math.log10(cfm) * 6 + (staticPressure / 100));
    let impellerDiaMm = 400;

    if (cfm < 2000 && soundCritical) {
      matchedModel = 'Silent Mixed Flow Fan (SMF-315)';
      matchedProductId = 'silent-mixed-flow-fans';
      soundDba = 38;
      impellerDiaMm = 315;
    } else if (application === 'kitchen-fumes') {
      matchedModel = 'Bifurcated Cabinet Fan (BCF-630)';
      matchedProductId = 'bifurcated-cabinet-fans';
      soundDba = 68;
      impellerDiaMm = 630;
    } else if (application === 'cleanroom' || staticPressure > 800) {
      matchedModel = 'Backward Curved Centrifugal Fan (BC-800)';
      matchedProductId = 'centrifugal-backward-curved';
      soundDba = 74;
      impellerDiaMm = 800;
    } else if (application === 'car-park-thrust') {
      matchedModel = 'Impulse Jet Fan 50N (JF-50-2P)';
      matchedProductId = 'impulse-jet-fans';
      soundDba = 71;
      impellerDiaMm = 400;
    } else if (cfm <= 5000) {
      matchedModel = 'Acoustic Cabinet Inline Fan (CIF-450)';
      matchedProductId = 'cabinet-inline-fans';
      soundDba = 52;
      impellerDiaMm = 450;
    } else if (cfm <= 30000) {
      matchedModel = 'Vane Axial Flow Fan (VF-800)';
      matchedProductId = 'vane-axial-fans';
      impellerDiaMm = 800;
    } else {
      matchedModel = 'Heavy Duty Vane Axial Fan (VF-1400)';
      matchedProductId = 'vane-axial-fans';
      impellerDiaMm = 1400;
    }

    return {
      modelName: matchedModel,
      productId: matchedProductId,
      motorPowerKw: Math.max(0.75, parseFloat(motorPowerKw)),
      soundDba,
      impellerDiaMm,
      airVelocity: ((cfm * 0.4719) / (Math.PI * Math.pow(impellerDiaMm / 2000, 2) * 100)).toFixed(1),
      amcaRating: 'AMCA 210 Air & AMCA 300 Sound'
    };
  }, [cfm, staticPressure, application, soundCritical]);

  const handleAddSizingToCart = () => {
    onAddToCart({
      id: Date.now(),
      category: 'Sized Fan Unit',
      description: `${sizingResult.modelName} - ${cfm.toLocaleString()} CFM @ ${staticPressure} Pa`,
      cfm: `${cfm.toLocaleString()} CFM (${cmh.toLocaleString()} CMH)`,
      staticPressure: `${staticPressure} Pa (${staticInches}" w.g.)`,
      material: 'Galvanized / Cast Al Blades',
      quantity: 1
    });
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2500);
  };

  return (
    <section id="sizer" className="py-16 lg:py-24 border-b border-slate-800/80 relative">
      <div className="app-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Airflow Engineering Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight mb-4">
            Interactive Fan & ADP <span className="text-cyan-400">Sizing Selector</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Compute aerodynamic power, static pressure recovery, and optimal AMCA-certified fan models in real-time. Direct one-click import into your BOQ requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-700/80">
            <h3 className="text-lg font-heading font-bold text-white mb-6 flex items-center gap-2 pb-3 border-b border-slate-800">
              <Gauge className="w-5 h-5 text-cyan-400" />
              <span>Operating Duty Parameters</span>
            </h3>

            {/* Application Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Select Application Duty
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'basement-smoke', label: 'Basement Smoke Spill' },
                  { id: 'lift-pressurization', label: 'Stair / Lift Pressurization' },
                  { id: 'cleanroom', label: 'Cleanroom / AHU Supply' },
                  { id: 'kitchen-fumes', label: 'Kitchen Grease Exhaust' },
                  { id: 'car-park-thrust', label: 'Car Park Jet Ventilation' },
                  { id: 'general-commercial', label: 'Commercial Low-Noise' }
                ].map((app) => (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => setApplication(app.id)}
                    className={`p-2.5 text-xs font-medium rounded-xl border text-left transition-all cursor-pointer ${
                      application === app.id
                        ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-950'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {app.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Airflow Slider */}
            <div className="mb-6 bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Wind className="w-4 h-4 text-cyan-400" />
                  2. Required Airflow (Q)
                </span>
                <div className="text-right">
                  <span className="text-lg font-heading font-extrabold text-cyan-400">
                    {cfm.toLocaleString()} <span className="text-xs font-normal text-slate-400">CFM</span>
                  </span>
                  <span className="text-xs text-slate-500 ml-2">
                    ({cmh.toLocaleString()} CMH)
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={cfm}
                onChange={(e) => setCfm(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>500 CFM</span>
                <span>25,000 CFM</span>
                <span>50,000 CFM</span>
                <span>100,000 CFM</span>
              </div>
            </div>

            {/* Static Pressure Slider */}
            <div className="mb-6 bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Gauge className="w-4 h-4 text-emerald-400" />
                  3. External Static Pressure (Ps)
                </span>
                <div className="text-right">
                  <span className="text-lg font-heading font-extrabold text-emerald-400">
                    {staticPressure} <span className="text-xs font-normal text-slate-400">Pa</span>
                  </span>
                  <span className="text-xs text-slate-500 ml-2">
                    ({staticInches}" w.g.)
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="50"
                max="1500"
                step="25"
                value={staticPressure}
                onChange={(e) => setStaticPressure(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />

              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>50 Pa</span>
                <span>350 Pa</span>
                <span>750 Pa</span>
                <span>1,500 Pa</span>
              </div>
            </div>

            {/* Checkboxes & Extra Conditions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <input
                  type="checkbox"
                  checked={soundCritical}
                  onChange={(e) => setSoundCritical(e.target.checked)}
                  className="accent-cyan-500 rounded"
                />
                <span>Acoustic-Critical (Ultra Low dBA)</span>
              </label>

              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <input
                  type="checkbox"
                  checked={fireRating === '250c-2hr'}
                  onChange={(e) => setFireRating(e.target.checked ? '250c-2hr' : 'standard')}
                  className="accent-orange-500 rounded"
                />
                <span className="text-orange-300">Smoke Rated 250°C/2hr High Temp</span>
              </label>
            </div>
          </div>

          {/* Results Output Column (5 Cols) */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/40 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-cyan-950/40 shadow-2xl shadow-cyan-950/50">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-cyan-500/20">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Recommended Equipment Match
              </span>
              <span className="badge-amca">
                AMCA 210
              </span>
            </div>

            {/* Recommended Model Title */}
            <div className="mb-6">
              <div className="text-2xl font-heading font-black text-white mb-1">
                {sizingResult.modelName}
              </div>
              <p className="text-xs text-slate-400">
                Optimized aerofoil impeller geometry with heavy duty IE3 efficiency motor.
              </p>
            </div>

            {/* Metric Specs Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1 mb-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Estimated Motor Power
                </div>
                <div className="text-lg font-heading font-bold text-white">
                  {sizingResult.motorPowerKw} <span className="text-xs font-normal text-slate-400">kW</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  ~{(sizingResult.motorPowerKw * 1.341).toFixed(1)} HP (IE3 / IE4)
                </div>
              </div>

              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1 mb-1">
                  <Volume2 className="w-3.5 h-3.5 text-sky-400" />
                  Sound Power (dBA)
                </div>
                <div className="text-lg font-heading font-bold text-white">
                  {sizingResult.soundDba} <span className="text-xs font-normal text-slate-400">dBA @ 3m</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  AMCA 300 Certified
                </div>
              </div>

              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 mb-1">Impeller Nominal Dia</div>
                <div className="text-lg font-heading font-bold text-white">
                  Ø {sizingResult.impellerDiaMm} <span className="text-xs font-normal text-slate-400">mm</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  Die-Cast Aluminium
                </div>
              </div>

              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                <div className="text-[11px] text-slate-400 mb-1">Discharge Velocity</div>
                <div className="text-lg font-heading font-bold text-white">
                  {sizingResult.airVelocity} <span className="text-xs font-normal text-slate-400">m/s</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  Optimal Static Regain
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5">
              <button
                onClick={handleAddSizingToCart}
                className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  addedSuccess
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    : 'bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white shadow-lg shadow-cyan-600/30'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Requirement List!</span>
                  </>
                ) : (
                  <>
                    <PlusCircle className="w-4 h-4" />
                    <span>Add this Fan Selection to BOQ Basket</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenBOQ}
                className="btn-boq w-full justify-center text-xs py-2.5 cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Upload Tender Schedule for Full Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
