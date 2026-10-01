'use client';

import React, { useEffect, useRef } from 'react';
import { 
  FileSpreadsheet, 
  SlidersHorizontal, 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  LogIn, 
  Layers
} from 'lucide-react';
import { COMPANY_INFO } from '../data/airflowData';

export function Hero({ onOpenBOQ, onOpenERP, onNavigateSection }) {
  const canvasRef = useRef(null);

  // Aerodynamic Airflow particle streamlines animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = canvas.parentElement ? canvas.parentElement.clientHeight : 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle streamlines
    const particles = [];
    const numParticles = Math.floor(width / 18);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 40 + 20,
        speed: Math.random() * 2.5 + 1.2,
        opacity: Math.random() * 0.5 + 0.15,
        width: Math.random() * 1.5 + 0.5,
        waveFreq: Math.random() * 0.02 + 0.005,
        waveAmp: Math.random() * 15 + 5,
        color: Math.random() > 0.4 ? '#38bdf8' : (Math.random() > 0.5 ? '#06b6d4' : '#818cf8')
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw flowing streamlines
      particles.forEach((p) => {
        p.x += p.speed;
        if (p.x > width + 50) {
          p.x = -50;
          p.y = Math.random() * height;
        }

        // Slight wave motion + mouse deflection
        const waveY = p.y + Math.sin(p.x * p.waveFreq + time) * p.waveAmp;
        
        // Mouse vector push
        const dx = mouse.x - p.x;
        const dy = mouse.y - waveY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let deflectionY = 0;
        if (dist < 150) {
          const force = (1 - dist / 150) * 25;
          deflectionY = dy > 0 ? -force : force;
        }

        const finalY = waveY + deflectionY;

        ctx.beginPath();
        ctx.moveTo(p.x, finalY);
        ctx.lineTo(p.x - p.length, finalY);
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.lineWidth = p.width;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Glowing particle head
        ctx.beginPath();
        ctx.arc(p.x, finalY, p.width * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = p.opacity * 1.4;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/80">
      {/* Dynamic Airflow Canvas Background */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Atmospheric Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="app-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-6 shadow-lg shadow-cyan-950/50">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>AMCA Certified Lab Tested • 50+ Years Engineering Heritage Since 1973</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3.5xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-[1.15] mb-6">
            Engineering Pure <span className="gradient-text">Aerodynamics</span> & Next-Gen <span className="gradient-text-orange">Ventilation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            India's premier manufacturer of high-efficiency industrial fans, UL-555 fire dampers, and architectural air distribution systems. Empowering landmark airports, metros, cleanrooms, and high-rises.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <button
              onClick={onOpenBOQ}
              className="btn-boq text-base px-6 py-3.5 shadow-xl shadow-orange-500/25 cursor-pointer"
            >
              <FileSpreadsheet className="w-5 h-5" />
              <span>Upload BOQ & Instant Quote</span>
              <Sparkles className="w-4 h-4 text-orange-200" />
            </button>

            <button
              onClick={() => onNavigateSection('sizer')}
              className="btn-primary text-base px-6 py-3.5 cursor-pointer"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Interactive Fan Sizer</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateSection('products')}
              className="btn-secondary text-base px-5 py-3.5 cursor-pointer"
            >
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Browse 28+ Products</span>
            </button>

            <button
              onClick={onOpenERP}
              className="btn-erp text-base px-5 py-3.5 cursor-pointer"
            >
              <LogIn className="w-5 h-5 text-indigo-300" />
              <span>Internal ERP Login</span>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {COMPANY_INFO.stats.map((stat, i) => (
              <div 
                key={i} 
                className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-slate-800/80 hover:border-cyan-500/40"
              >
                <div className="text-2xl sm:text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlights Ribbon */}
        <div className="mt-14 pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>AMCA 210 / 300 Certified Wind Tunnel</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>UL 555 & UL 555S Fire Rated (120/180 Min)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>150,000+ Sq. Ft. Greater Noida Facility</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Direct Airflow Enterprise ERP Connected</span>
          </div>
        </div>
      </div>
    </section>
  );
}
