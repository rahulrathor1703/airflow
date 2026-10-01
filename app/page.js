'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProductCatalog } from '../components/ProductCatalog';
import { ProductDetailModal } from '../components/ProductDetailModal';
import { FanSizerTool } from '../components/FanSizerTool';
import { ApplicationsSection } from '../components/ApplicationsSection';
import { ProjectsShowcase } from '../components/ProjectsShowcase';
import { AboutAndHeritage } from '../components/AboutAndHeritage';
import { BOQUploadModal } from '../components/BOQUploadModal';
import { ERPLoginModal } from '../components/ERPLoginModal';
import { QuotationBasketDrawer } from '../components/QuotationBasketDrawer';
import { Footer } from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [isBOQModalOpen, setIsBOQModalOpen] = useState(false);
  const [isERPModalOpen, setIsERPModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Cart / RFQ items
  const [cartItems, setCartItems] = useState([
    {
      id: 101,
      category: 'fans',
      description: 'Vane Axial Fan (VF-1000) - 250°C/2hr Smoke Spill',
      cfm: '25,000 CFM (42,475 CMH)',
      staticPressure: '450 Pa',
      material: 'Hot-Dip Galvanized / Al Blades',
      quantity: 2
    },
    {
      id: 102,
      category: 'dampers',
      description: 'UL-555 Fire & Smoke Damper with Actuator',
      cfm: 'Size: 1200 x 600 mm',
      staticPressure: 'Class 1A Leakage',
      material: 'Galvanized Steel 1.6mm',
      quantity: 6
    }
  ]);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.description === item.description);
      if (existing) {
        return prev.map((i) =>
          i.id === existing.id ? { ...i, quantity: (i.quantity || 1) + (item.quantity || 1) } : i
        );
      }
      return [...prev, item];
    });
    showToast(`Added "${item.description.slice(0, 32)}..." to BOQ Requirement!`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleNavigateSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    handleNavigateSection('products');
  };

  const handleProceedToBOQ = (itemsToQuote) => {
    setIsCartOpen(false);
    setIsBOQModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-cyan-500/50 text-cyan-300 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-bounce">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          {toastMessage}
        </div>
      )}

      {/* Main Navigation Bar */}
      <Navbar
        onOpenBOQ={() => setIsBOQModalOpen(true)}
        onOpenERP={() => setIsERPModalOpen(true)}
        cartCount={cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={handleSelectCategory}
        onSearch={(query) => {
          setSearchQuery(query);
          handleNavigateSection('products');
        }}
        onNavigateSection={handleNavigateSection}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBOQ={() => setIsBOQModalOpen(true)}
          onOpenERP={() => setIsERPModalOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        {/* 2. Interactive Fan & ADP Sizer Tool */}
        <FanSizerTool
          onAddToCart={handleAddToCart}
          onOpenBOQ={() => setIsBOQModalOpen(true)}
        />

        {/* 3. Product Catalog */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onAddToCart={handleAddToCart}
        />

        {/* 4. Applications Section */}
        <ApplicationsSection
          onSelectSector={(sectorId) => {}}
          onOpenBOQ={() => setIsBOQModalOpen(true)}
        />

        {/* 5. Landmark Projects Showcase */}
        <ProjectsShowcase
          onOpenBOQ={() => setIsBOQModalOpen(true)}
        />

        {/* 6. Company Heritage & AMCA Wind Tunnel Lab */}
        <AboutAndHeritage />
      </main>

      {/* Footer */}
      <Footer
        onOpenBOQ={() => setIsBOQModalOpen(true)}
        onOpenERP={() => setIsERPModalOpen(true)}
        onNavigateSection={handleNavigateSection}
        onSelectCategory={handleSelectCategory}
      />

      {/* Modals & Drawers */}
      {/* BOQ Upload & Fast-Track Requirement Modal */}
      <BOQUploadModal
        isOpen={isBOQModalOpen}
        onClose={() => setIsBOQModalOpen(false)}
        initialItems={cartItems}
      />

      {/* Internal Employee & ERP Login Modal */}
      <ERPLoginModal
        isOpen={isERPModalOpen}
        onClose={() => setIsERPModalOpen(false)}
      />

      {/* Product Spec Sheet Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenBOQ={() => setIsBOQModalOpen(true)}
      />

      {/* Requirement Cart Drawer */}
      <QuotationBasketDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToBOQ={handleProceedToBOQ}
      />
    </div>
  );
}
