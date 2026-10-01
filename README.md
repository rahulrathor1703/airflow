# Airflow - Next.js Modern Ventilation Platform & Direct BOQ Procurement

A state-of-the-art, component-driven Next.js web application for **Air Flow Pvt. Ltd.** (India's premier aerodynamic HVAC engineering manufacturer since 1973).

Designed for ultra-fast performance, high responsiveness, and instant deployment on **Vercel**.

---

## 🌟 Key Features

### 1. Direct BOQ Upload & Custom Requirement Matrix
- **Drag & Drop Schedule Upload**: Upload tender BOQ spreadsheets (.xlsx, .xls, .csv) and PDF equipment schedules.
- **Intelligent Schedule Parser**: Automatically detects Fan units, Dampers, Diffusers, CFM, and static pressure ratings.
- **Interactive Line-Item Builder**: Custom matrix allowing contractors to edit CFM, static pressure, dimensions, fire ratings, and quantities.
- **Instant RFQ Generation**: Generates automated reference codes (e.g. `AF-BOQ-2026-8942`), downloadable summary sheet, and direct WhatsApp sales engineer connection.

### 2. Internal Employee & Airflow Enterprise ERP Gateway
- **Multi-System Selector**: Single Sign-On gateway for:
  - *Airflow Sales & Estimation ERP*
  - *Airflow Plant & Production Operations ERP*
  - *AirSelect 4.0 Engineering Sizing Portal*
  - *Airflow Dispatch, Quality Assurance & Logistics Portal*
- **Role-Based Fast Redirect**: Direct launch buttons for internal team members.

### 3. Interactive Aerodynamic Fan & ADP Sizer Tool
- **Real-Time Sizing Engine**: Dual-slider for airflow (CFM/CMH) and external static pressure (Pa).
- **Application Selector**: Basement smoke spill, stairwell pressurization, cleanrooms, and car park jet ventilation.
- **Instant Match**: Displays recommended AMCA-certified model, motor power (kW/HP), sound level (dBA), and impeller diameter with 1-click addition to BOQ.

### 4. Comprehensive 28+ Product Engineering Catalog
- Complete range covering:
  - *Heavy Duty & Commercial Fans* (Vane Axial, Axial Flow, Backward/Forward Curved Centrifugal, Plug & Plenum, Bifurcated, Mixed Flow, Jet Fans)
  - *Air Distribution Products* (Architectural Slot Diffusers, Swirl Diffusers, High-Velocity Jet Nozzles, Laminar Flow Cleanroom Diffusers, Plaque Diffusers)
  - *Fire & Smoke Dampers* (UL-555 120/180 Min Fire Rated, AMCA Class 1A Low Leakage, Constant Volume Regulators)
  - *Grilles, Storm Louvers & Valves*
  - *Acoustic Silencers & Vibration Duct Connectors*

### 5. Application Sectors & Landmark Project References
- Tailored solutions for Airports (Delhi T3, Bengaluru T2), Metros & Tunnels (Mumbai Metro Line 3), Commercial IT Parks (DLF CyberCity), Hospitals (AIIMS Cleanrooms), and Refineries (Reliance Jamnagar).

---

## 🚀 Getting Started

### Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel

1. Push your repository to GitHub: `https://github.com/rahulrathor1703/airflow.git`
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Next.js**
4. Click **Deploy**. Vercel will automatically build and assign a global CDN URL!
