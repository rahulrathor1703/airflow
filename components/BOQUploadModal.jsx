'use client';

import React, { useState } from 'react';
import { 
  X, 
  UploadCloud, 
  FileSpreadsheet, 
  CheckCircle, 
  Plus, 
  Trash2, 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  PhoneCall, 
  Send,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function BOQUploadModal({ isOpen, onClose, initialItems = [] }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fileAnalysisComplete, setFileAnalysisComplete] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    projectName: '',
    clientName: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: '',
    requiredDate: '',
    projectType: 'Commercial Complex / IT Park',
    amcaTestingReq: true,
    fireRatingReq: true,
    factoryWitness: false,
    coatingPref: 'Standard Galvanized G90',
    additionalNotes: ''
  });

  // Requirement items list
  const [items, setItems] = useState(
    initialItems.length > 0 
      ? initialItems 
      : [
          {
            id: 1,
            category: 'Axial Fans',
            description: 'Vane Axial Smoke Spill Fan (VF Series) - 250°C/2hr',
            cfm: '25,000',
            staticPressure: '450 Pa',
            material: 'GI Heavy Gauge',
            quantity: 4
          },
          {
            id: 2,
            category: 'Dampers',
            description: 'UL-555 Fire & Smoke Damper with Actuator',
            cfm: 'Size: 1200 x 600 mm',
            staticPressure: 'Class 1A Leakage',
            material: 'Galvanized 1.6mm',
            quantity: 12
          },
          {
            id: 3,
            category: 'Diffusers',
            description: 'MDS Linear Slot Diffuser (2-Slot 180° Deflection)',
            cfm: '150 CFM/m',
            staticPressure: '25 Pa',
            material: 'Extruded Aluminium',
            quantity: 45
          }
        ]
  );

  const [rfqNumber, setRfqNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Handle Drag & Drop / File Input
  const handleFileUpload = (e) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file) => {
    setUploadedFile(file);
    setIsAnalyzing(true);
    // Simulate AI / Excel BOQ Parsing
    setTimeout(() => {
      setIsAnalyzing(false);
      setFileAnalysisComplete(true);
      // Auto populate parsed items if not already populated
      setItems((prev) => [
        ...prev,
        {
          id: Date.now(),
          category: 'Jet Fans',
          description: `Extracted from ${file.name}: Impulse Jet Fan 400°C/2hr`,
          cfm: 'Thrust: 55 N',
          staticPressure: 'High Thrust Vectoring',
          material: 'GI Insulated',
          quantity: 8
        }
      ]);
    }, 1200);
  };

  // Add Item Manually
  const handleAddItem = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        category: 'Custom Product',
        description: 'New Ventilation Line Item',
        cfm: '5,000',
        staticPressure: '250 Pa',
        material: 'Galvanized G90',
        quantity: 1
      }
    ]);
  };

  // Remove Item
  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Update Item
  const handleUpdateItem = (id, field, value) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // Final Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRfq = `AF-BOQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setRfqNumber(generatedRfq);
    setIsSubmitted(true);
    
    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti trigger', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="modal-content-animated relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-4 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-heading font-bold text-white flex items-center gap-2">
                Raise Direct Requirement / Upload BOQ
                <span className="text-[11px] font-mono bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded-full">
                  Fast-Track RFQ
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Direct integration with Airflow estimation & engineering division
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

        {/* Step Indicator (when not submitted) */}
        {!isSubmitted && (
          <div className="bg-slate-950/70 border-b border-slate-800 px-6 py-2.5 flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-2 sm:gap-6">
              <button
                onClick={() => setCurrentStep(1)}
                className={`flex items-center gap-1.5 cursor-pointer ${currentStep === 1 ? 'text-orange-400' : 'text-slate-400'}`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 1 ? 'bg-orange-500 text-white' : 'bg-slate-800'}`}>1</span>
                <span>Upload BOQ File</span>
              </button>
              <span className="text-slate-600">→</span>
              <button
                onClick={() => setCurrentStep(2)}
                className={`flex items-center gap-1.5 cursor-pointer ${currentStep === 2 ? 'text-orange-400' : 'text-slate-400'}`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 2 ? 'bg-orange-500 text-white' : 'bg-slate-800'}`}>2</span>
                <span>Project & Client</span>
              </button>
              <span className="text-slate-600">→</span>
              <button
                onClick={() => setCurrentStep(3)}
                className={`flex items-center gap-1.5 cursor-pointer ${currentStep === 3 ? 'text-orange-400' : 'text-slate-400'}`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 3 ? 'bg-orange-500 text-white' : 'bg-slate-800'}`}>3</span>
                <span>Requirement Matrix ({items.length})</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Success & Confirmation View */
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl flex items-center justify-center text-emerald-400 mx-auto mb-4 animate-bounce">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-black text-white mb-2">
                Requirement Submitted Successfully!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                Your Bill of Quantities and engineering requirements have been routed directly to our Sales & Estimation division in Greater Noida.
              </p>

              {/* Reference ID Card */}
              <div className="glass-panel p-5 rounded-xl max-w-md mx-auto mb-6 border border-cyan-500/30 text-left">
                <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-700">
                  <span className="text-xs text-slate-400 font-medium">RFQ Reference Number</span>
                  <span className="text-sm font-mono font-bold text-cyan-400">{rfqNumber}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-400">Project</span>
                  <span className="text-xs font-semibold text-white">{formData.projectName || 'Commercial HVAC Project'}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-400">Total Line Items</span>
                  <span className="text-xs font-semibold text-orange-400">{items.length} Product Entries</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Estimated Turnaround</span>
                  <span className="text-xs font-semibold text-emerald-400">&lt; 4 Business Hours</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919811054321?text=Hi%20Airflow%20Team,%20I%20have%20raised%20RFQ%20${rfqNumber}%20for%20project%20${encodeURIComponent(formData.projectName || 'HVAC')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs bg-emerald-600 hover:bg-emerald-500 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Connect on WhatsApp with Sales Engg
                </a>

                <button
                  onClick={() => {
                    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ rfqNumber, formData, items }, null, 2));
                    const downloadAnchor = document.createElement('a');
                    downloadAnchor.setAttribute("href", dataStr);
                    downloadAnchor.setAttribute("download", `${rfqNumber}-Airflow-Requirement.json`);
                    document.body.appendChild(downloadAnchor);
                    downloadAnchor.click();
                    downloadAnchor.remove();
                  }}
                  className="btn-secondary text-xs cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Summary Sheet
                </button>

                <button
                  onClick={onClose}
                  className="btn-secondary text-xs cursor-pointer"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1: Upload File */}
              {currentStep === 1 && (
                <div>
                  <div className="mb-4">
                    <h3 className="text-base font-bold text-white mb-1">
                      Upload Tender BOQ / Equipment Schedule
                    </h3>
                    <p className="text-xs text-slate-400">
                      Upload your Excel (.xlsx, .xls), PDF, or CSV schedule. Our system will extract fans, dampers, diffusers, and CFM parameters automatically.
                    </p>
                  </div>

                  {/* Drag and drop area */}
                  <label className="relative border-2 border-dashed border-slate-700 hover:border-cyan-500/60 bg-slate-950/60 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all group">
                    <input
                      type="file"
                      accept=".xlsx,.xls,.pdf,.csv,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <div className="w-16 h-16 rounded-2xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                      <UploadCloud className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-semibold text-white mb-1">
                      Click to Browse or Drag & Drop BOQ File
                    </span>
                    <span className="text-xs text-slate-400 max-w-sm mb-4">
                      Supports Excel Sheets (.xlsx, .xls), PDFs, Tender Specs, and AutoCAD (.dwg) schedules up to 50MB.
                    </span>

                    {uploadedFile && (
                      <div className="bg-slate-800/90 border border-cyan-500/40 rounded-xl px-4 py-2.5 flex items-center gap-3 text-xs text-cyan-300">
                        <FileSpreadsheet className="w-4 h-4 text-cyan-400" />
                        <span className="font-semibold">{uploadedFile.name}</span>
                        <span className="text-slate-400">
                          ({(uploadedFile.size / 1024).toFixed(1)} KB)
                        </span>
                        {isAnalyzing ? (
                          <span className="text-amber-400 flex items-center gap-1 font-medium">
                            <span className="animate-spin">⏳</span> Analyzing Line Items...
                          </span>
                        ) : fileAnalysisComplete ? (
                          <span className="text-emerald-400 flex items-center gap-1 font-medium">
                            <CheckCircle className="w-3.5 h-3.5" /> Parsed Successfully
                          </span>
                        ) : null}
                      </div>
                    )}
                  </label>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
                    <span className="text-xs text-slate-500">
                      Don't have a file right now? You can configure requirement line items manually in Step 3.
                    </span>
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="btn-primary text-xs px-5 py-2.5 cursor-pointer"
                    >
                      <span>Proceed to Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Project & Client Details */}
              {currentStep === 2 && (
                <div>
                  <div className="mb-4">
                    <h3 className="text-base font-bold text-white mb-1">
                      Project & Contact Information
                    </h3>
                    <p className="text-xs text-slate-400">
                      Ensure prompt turnaround by providing project location and engineering contact details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Project Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aerocity Commercial Hub / Metro Phase 4"
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        className="input-dark text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Client / MEP Contractor / Consultant Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Voltas / Blue Star / Sterling & Wilson"
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        className="input-dark text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="input-dark text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address (For Official Quotation) *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rajesh@mepcontractor.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-dark text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-dark text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Project Site Location / City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Noida / Mumbai / Bengaluru"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="input-dark text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Required On-Site Delivery Date
                      </label>
                      <input
                        type="date"
                        value={formData.requiredDate}
                        onChange={(e) => setFormData({ ...formData, requiredDate: e.target.value })}
                        className="input-dark text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Project Sector
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="input-dark text-xs"
                      >
                        <option>Commercial Complex / IT Park</option>
                        <option>Airport / Aviation Terminal</option>
                        <option>Metro / Underground Tunnel</option>
                        <option>Hospital / Cleanroom OT</option>
                        <option>Industrial Plant / Factory</option>
                        <option>Hotel / Hospitality Resort</option>
                        <option>Residential Township</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="btn-secondary text-xs cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back to Upload
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="btn-primary text-xs px-5 py-2.5 cursor-pointer"
                    >
                      <span>Proceed to Line Items ({items.length})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Requirement Line-Item Matrix */}
              {currentStep === 3 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-base font-bold text-white mb-0.5">
                        Ventilation & Air Distribution Requirement Matrix
                      </h3>
                      <p className="text-xs text-slate-400">
                        Adjust line items, CFM airflow, static pressure, or add additional units.
                      </p>
                    </div>
                    <button
                      onClick={handleAddItem}
                      className="btn-secondary text-xs py-1.5 px-3 border-cyan-500/40 text-cyan-300 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Line Item
                    </button>
                  </div>

                  {/* Items Table */}
                  <div className="border border-slate-800 rounded-xl overflow-x-auto max-h-60 overflow-y-auto mb-4">
                    <table className="dark-table text-xs">
                      <thead>
                        <tr>
                          <th>Item Description</th>
                          <th>Category</th>
                          <th>Capacity / CFM</th>
                          <th>Pressure / Size</th>
                          <th>Qty</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <input
                                type="text"
                                value={item.description}
                                onChange={(e) => handleUpdateItem(item.id, 'description', e.target.value)}
                                className="bg-slate-800/80 border border-slate-700 rounded px-2 py-1 text-xs w-full text-white"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                value={item.category}
                                onChange={(e) => handleUpdateItem(item.id, 'category', e.target.value)}
                                className="bg-slate-800/80 border border-slate-700 rounded px-2 py-1 text-xs w-28 text-slate-300"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                value={item.cfm}
                                onChange={(e) => handleUpdateItem(item.id, 'cfm', e.target.value)}
                                className="bg-slate-800/80 border border-slate-700 rounded px-2 py-1 text-xs w-24 text-slate-300"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                value={item.staticPressure}
                                onChange={(e) => handleUpdateItem(item.id, 'staticPressure', e.target.value)}
                                className="bg-slate-800/80 border border-slate-700 rounded px-2 py-1 text-xs w-24 text-slate-300"
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => handleUpdateItem(item.id, 'quantity', parseInt(e.target.value) || 1)}
                                className="bg-slate-800/80 border border-slate-700 rounded px-2 py-1 text-xs w-16 text-center text-orange-400 font-bold"
                              />
                            </td>
                            <td>
                              <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-red-400 hover:text-red-300 p-1 cursor-pointer"
                                title="Remove Line"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Technical Directives */}
                  <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 mb-4">
                    <div className="text-xs font-bold uppercase text-slate-400 mb-2">
                      Technical Compliance & Certification Preferences
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-300">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.amcaTestingReq}
                          onChange={(e) => setFormData({ ...formData, amcaTestingReq: e.target.checked })}
                          className="accent-cyan-500 rounded"
                        />
                        <span>AMCA Performance Test Certificate</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.fireRatingReq}
                          onChange={(e) => setFormData({ ...formData, fireRatingReq: e.target.checked })}
                          className="accent-cyan-500 rounded"
                        />
                        <span>Fire Rated (250°C/2hr or UL 555)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.factoryWitness}
                          onChange={(e) => setFormData({ ...formData, factoryWitness: e.target.checked })}
                          className="accent-cyan-500 rounded"
                        />
                        <span>Factory Witness Testing Required</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Bar */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="btn-secondary text-xs cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back to Project Info
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="btn-boq text-xs px-6 py-2.5 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit BOQ & Generate Official RFQ</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
