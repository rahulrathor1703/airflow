// Air Flow Pvt Ltd. - Master Data Catalog & Knowledge Base
// Official product specifications, applications, and ERP integrations for Airflow.in

export const COMPANY_INFO = {
  name: "Air Flow Pvt. Ltd.",
  brandName: "Air Flow",
  tagline: "Your Trusted Ventilation & Aerodynamic Engineering Partner",
  established: 1973,
  yearsOfExcellence: 50,
  headquarters: "Ecotech III, Greater Noida, Uttar Pradesh 201306, India",
  phone: "+91 120 2397000 / +91 98110 54321",
  email: "sales@airflow.in",
  supportEmail: "info@airflow.in",
  certifications: [
    { title: "AMCA Certified", desc: "Sound & Air Performance Certified (AMCA 210 & 300)", badge: "AMCA 210/300" },
    { title: "ISO 9001:2015", desc: "Quality Management System Certified Manufacturing", badge: "ISO 9001" },
    { title: "UL 555 & UL 555S", desc: "Fire and Smoke Damper Rated (120 & 180 Mins)", badge: "UL-555" },
    { title: "Green Building Compliant", desc: "IGBC & LEED High Efficiency EC Motor Ratings", badge: "LEED Gold" },
    { title: "CE Mark", desc: "European Conformity for Aerodynamic Assemblies", badge: "CE Certified" }
  ],
  stats: [
    { value: "50+", label: "Years Legacy (Since 1973)" },
    { value: "10,000+", label: "Projects Completed" },
    { value: "150k+", label: "Sq. Ft. Manufacturing Plant" },
    { value: "100%", label: "AMCA Tested In-House" }
  ]
};

export const ERP_SYSTEMS = [
  {
    id: "airflow-sales-crm",
    name: "Airflow Sales & Estimation ERP",
    desc: "Sales orders, lead pipelines, BOQ estimations, and client quotations portal.",
    role: "Sales & Estimation Engineers",
    badge: "Primary Sales Portal",
    url: "https://erp.airflow.in/sales",
    color: "from-blue-600 to-cyan-600",
    icon: "Briefcase"
  },
  {
    id: "airflow-production",
    name: "Airflow Plant & Production ERP",
    desc: "Shop-floor work orders, raw material inventory, laser & balancing tracking.",
    role: "Plant Ops & Manufacturing",
    badge: "Factory Ops",
    url: "https://erp.airflow.in/production",
    color: "from-emerald-600 to-teal-600",
    icon: "Cpu"
  },
  {
    id: "engineering-sizing",
    name: "AirSelect 4.0 Engineering Sizer",
    desc: "Aerodynamic fan selection, sound attenuation curves & CAD generator.",
    role: "Application & Design Engineers",
    badge: "Engineering Tool",
    url: "https://select.airflow.in/selector",
    color: "from-purple-600 to-indigo-600",
    icon: "Sliders"
  },
  {
    id: "dispatch-logistics",
    name: "Airflow Dispatch & Logistics Portal",
    desc: "Factory test certificates (AMCA), QA clearance, and fleet tracking.",
    role: "QA & Supply Chain",
    badge: "Logistics",
    url: "https://dispatch.airflow.in/tracker",
    color: "from-amber-600 to-orange-600",
    icon: "Truck"
  }
];

export const PRODUCT_CATEGORIES = [
  { id: "all", name: "All Products", count: 28 },
  { id: "fans", name: "Heavy Duty & Commercial Fans", count: 11 },
  { id: "diffusers", name: "Air Diffusers & Jet Nozzles", count: 8 },
  { id: "dampers", name: "Fire, Smoke & Volume Dampers", count: 5 },
  { id: "louvers", name: "Grilles, Louvers & Valves", count: 6 },
  { id: "accessories", name: "Acoustics & Duct Accessories", count: 4 }
];

export const PRODUCTS = [
  // Heavy Duty Fans
  {
    id: "vane-axial-fans",
    name: "Vane Axial Fans (VF Series)",
    category: "fans",
    slug: "vane-axial-fans",
    tagline: "High-Efficiency Aerodynamic Impeller for Large Volume Air",
    description: "Engineered for high static pressure and heavy-duty ventilation in tunnels, airports, and industrial complexes. Features cast aluminium aerofoil blades with adjustable pitch.",
    airflowRange: "1,500 – 160,000 CFM (2,500 – 270,000 CMH)",
    staticPressure: "Up to 1,500 Pa",
    soundLevel: "62 – 88 dBA",
    material: "Heavy-gauge Hot-Dip Galvanized Steel / SS 304",
    amcaCertified: true,
    fireRating: "250°C / 2 hrs, 300°C / 2 hrs, 400°C / 2 hrs",
    applications: ["Airports", "Tunnels & Metros", "Basement Smoke Spill", "Industrial Plants"],
    features: [
      "Aerodynamically profiled stator guide vanes for maximum pressure recovery",
      "High-efficiency cast aluminium adjustable pitch aerofoil blades",
      "Direct drive and belt drive configurations with Class H insulation motors",
      "AMCA 210 certified for air performance and AMCA 300 for sound"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "axial-flow-fans",
    name: "Axial Flow Fans (AF Series)",
    category: "fans",
    slug: "axial-flow-fans",
    tagline: "High Reliability Smoke Spill & General Ventilation",
    description: "Versatile cylindrical cased axial flow fans designed for ventilation, cooling, and emergency smoke extraction. Certified for high temperature operation.",
    airflowRange: "800 – 120,000 CFM",
    staticPressure: "Up to 800 Pa",
    soundLevel: "55 – 82 dBA",
    material: "Galvanized Steel / Epoxy Coated / Stainless Steel",
    amcaCertified: true,
    fireRating: "250°C / 2 hrs & 300°C / 2 hrs",
    applications: ["Basement Exhaust", "Lift Well Pressurization", "Stairwell Pressurization", "Car Parks"],
    features: [
      "Dynamically balanced impellers complying with ISO 1940 Grade G2.5",
      "Aerofoil shaped die-cast aluminium blades for whisper-quiet efficiency",
      "IP55/IP65 ingress protection rated high-efficiency IE3/IE4 motors"
    ],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "centrifugal-backward-curved",
    name: "Backward Curved Centrifugal Fans (BC Series)",
    category: "fans",
    slug: "backward-curve",
    tagline: "Non-Overloading High Static Pressure Cleanroom & Industrial Blower",
    description: "Designed for industrial exhaust systems, HVAC air handling units, and cleanroom air recirculation where non-overloading power characteristics are required.",
    airflowRange: "1,000 – 90,000 CFM",
    staticPressure: "Up to 3,000 Pa",
    soundLevel: "58 – 85 dBA",
    material: "Heavy Gauge Mild Steel / Galvanized / SS 316",
    amcaCertified: true,
    fireRating: "Standard / High Temp 250°C",
    applications: ["Cleanrooms", "Pharmaceutical Labs", "Kitchen Scrubbers", "Industrial HVAC"],
    features: [
      "Backward curved high efficiency non-overloading wheel",
      "Self-aligning heavy duty pillow block bearings with grease nipples",
      "Available in single width single inlet (SWSI) and double width double inlet (DWDI)"
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "centrifugal-forward-curved",
    name: "Forward Curved Centrifugal Fans (FC Series)",
    category: "fans",
    slug: "forward-curve",
    tagline: "Compact, Low Sound Level Fan for Air Handling Units",
    description: "Ideal for low to medium pressure commercial air handling units, package air conditioners, and supply air systems requiring quiet operation.",
    airflowRange: "500 – 45,000 CFM",
    staticPressure: "Up to 900 Pa",
    soundLevel: "50 – 74 dBA",
    material: "Pre-galvanized G90 Steel Housing",
    amcaCertified: true,
    fireRating: "Standard",
    applications: ["AHU Supply Fans", "Fan Coil Units", "Commercial Offices", "Hospitals"],
    features: [
      "Precision punched forward curved multiblade impeller wheel",
      "Double inlet double width (DIDW) aerodynamic scroll housing",
      "Permanently lubricated sealed ball bearings"
    ],
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "plug-plenum-fans",
    name: "Plug & Plenum Fans (PPF Series)",
    category: "fans",
    slug: "plug-plenum-fans",
    tagline: "Direct-Drive Unhoused AHU Fan with EC Motor Options",
    description: "Direct-drive plug fans engineered for modern modular air handling units. Eliminates belts, sheaves, and belt dust while providing multi-fan array redundancy.",
    airflowRange: "1,200 – 60,000 CFM",
    staticPressure: "Up to 2,200 Pa",
    soundLevel: "54 – 79 dBA",
    material: "Aluminium / High Strength Welded Steel",
    amcaCertified: true,
    fireRating: "Standard",
    applications: ["Modular AHU Fan Walls", "Data Centers", "Hospital Cleanrooms", "Commercial IT Parks"],
    features: [
      "Compact unhoused plug design with aerodynamically contoured inlet cone",
      "Compatible with high efficiency PM / EC brushless motors and VFDs",
      "Zero maintenance direct drive configuration"
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bifurcated-cabinet-fans",
    name: "Bifurcated Cabinet Fans (BCF Series)",
    category: "fans",
    slug: "bifurcated-cabinet-fans",
    tagline: "Motor Isolated from Airstream for Corrosive & High Temp Fumes",
    description: "The motor is situated in an isolated tunnel insulated from the exhaust air stream, allowing safe extraction of hot air, moisture, aggressive fumes, and kitchen grease.",
    airflowRange: "800 – 35,000 CFM",
    staticPressure: "Up to 800 Pa",
    soundLevel: "58 – 78 dBA",
    material: "Double Skin Acoustic Cabinet / SS 304 / Galvanized",
    amcaCertified: true,
    fireRating: "200°C Continuous / 400°C 2 hrs",
    applications: ["Commercial Kitchen Exhaust", "Industrial Fume Extraction", "Foundries", "Chemical Plants"],
    features: [
      "Isolated central tunnel venting ambient motor cooling air",
      "Double skin galvanized panel with 25mm high-density acoustic PUF insulation",
      "Removable service access panels with quick release latches"
    ],
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cabinet-inline-fans",
    name: "Acoustic Cabinet Inline Fans (CIF Series)",
    category: "fans",
    slug: "cabinet-inline-fans",
    tagline: "Ultra-Low Noise Double-Skin In-Duct Booster Units",
    description: "Designed for false ceiling concealed installations where extremely low breakout noise is critical, such as hotel rooms, executive boardrooms, and auditoriums.",
    airflowRange: "400 – 25,000 CFM",
    staticPressure: "Up to 750 Pa",
    soundLevel: "42 – 68 dBA",
    material: "Aluminium Extruded Pentapost Frame + GI Double Skin",
    amcaCertified: true,
    fireRating: "Standard",
    applications: ["Luxury Hotels", "Corporate Boardrooms", "Sound Studios", "Residential Suites"],
    features: [
      "Thermal break pentapost frame with rockwool/PUF sound insulation",
      "Direct drive mixed flow or backward curved centrifugal wheel",
      "Built-in vibration isolators and circular/rectangular spigot collars"
    ],
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "impulse-jet-fans",
    name: "Impulse & Induction Jet Fans (JF Series)",
    category: "fans",
    slug: "impulse-jet-fans",
    tagline: "Ductless Car Park & Tunnel Ventilation System",
    description: "High-thrust impulse and induction jet fans that generate a high velocity air stream, moving massive air volumes across basement car parks and tunnels without costly ductwork.",
    airflowRange: "Thrust: 35 N – 120 N (Airflow 3,000 – 12,000 CFM)",
    staticPressure: "High Velocity Thrust Vectoring",
    soundLevel: "58 – 76 dBA",
    material: "Galvanized Steel with Internal Acoustic Silencer Liners",
    amcaCertified: true,
    fireRating: "300°C / 2 hrs & 400°C / 2 hrs",
    applications: ["Underground Car Parks", "Road & Rail Tunnels", "Basement Smoke Evacuation"],
    features: [
      "Slim profile low-height design for tight car park ceiling clearances",
      "Integrated dual acoustic silencers at inlet and outlet for low sound",
      "Reversible thrust options and directional discharge deflectors"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "silent-mixed-flow-fans",
    name: "Silent Mixed Flow Inline Fans (SMF Series)",
    category: "fans",
    slug: "silent-mixed-flow-fans",
    tagline: "Acoustic Encapsulated Compact In-Duct Fan",
    description: "High pressure capability of centrifugal fans combined with high airflow of axial fans, encased in a sound-absorbent polymer/metal body with easy duct clamp removal.",
    airflowRange: "150 – 3,500 CFM",
    staticPressure: "Up to 550 Pa",
    soundLevel: "28 – 48 dBA (Whisper Quiet)",
    material: "Sound Dampening Composite / Powder Coated GI",
    amcaCertified: true,
    fireRating: "Class B/F insulation",
    applications: ["Apartments", "Hospital Suites", "Office Cabins", "Restrooms"],
    features: [
      "Perforated internal inner shell with sound-absorbing glass wool layer",
      "Two-speed / Three-speed motor with thermal overload protection",
      "Central body pulls out effortlessly without dismantling ductwork"
    ],
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "circular-inline-fans",
    name: "Circular Inline Duct Fans",
    category: "fans",
    slug: "circular-inline-fans",
    tagline: "Compact Round Duct In-Line Exhaust & Supply Fans",
    description: "Pressed galvanized steel casing designed to fit standard spiral round ducts directly. Ideal for continuous residential and commercial ventilation.",
    airflowRange: "100 – 2,200 CFM (Duct Dia 100mm – 315mm)",
    staticPressure: "Up to 450 Pa",
    soundLevel: "36 – 54 dBA",
    material: "Galvanized Pressed Steel",
    amcaCertified: true,
    fireRating: "Standard",
    applications: ["Toilet Exhaust", "Retail Stores", "Gymnasiums", "Modular Kitchens"],
    features: [
      "External rotor motor with backward curved centrifugal impeller",
      "Standard duct diameters from 100mm to 315mm",
      "IP44 rating with IP54 terminal box"
    ],
    image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "air-washer-scrubber",
    name: "Cabinet Air Washer & Wet Scrubber Sections",
    category: "fans",
    slug: "cabinet-fan-section-air-washer-air-scrubber",
    tagline: "Industrial Evaporative Cooling & Pollution Scrubbing",
    description: "Engineered double-skin air washer sections featuring CELdek/PVC evaporative pads, stainless steel water basin, mist eliminators, and integrated high-pressure fans.",
    airflowRange: "3,000 – 80,000 CFM",
    staticPressure: "Custom Built",
    soundLevel: "60 – 78 dBA",
    material: "Aluminium Frame + Stainless Steel SS 304 Basin",
    amcaCertified: true,
    fireRating: "Standard",
    applications: ["Industrial Factories", "Textile Mills", "Food Processing", "Commercial Kitchens"],
    features: [
      "High saturation efficiency evaporative cellulose cooling pads",
      "Corrosion-proof heavy gauge SS 304 / SS 316 water tank and piping",
      "Multi-stage PVC droplet eliminator blades"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },

  // Air Distribution Products (Diffusers)
  {
    id: "slot-diffuser",
    name: "MDS Architectural Linear Slot Diffuser",
    category: "diffusers",
    slug: "slot-diffuser",
    tagline: "Continuous Architectural Ceiling Slot Air Distribution",
    description: "Designed for premium modern architectural interiors. Features adjustable aerodynamic pattern control blades for horizontal, vertical, or angle airflow deflection.",
    airflowRange: "50 – 600 CFM per meter (1 to 8 Slots)",
    staticPressure: "10 – 60 Pa",
    soundLevel: "NC 18 – NC 35",
    material: "High-grade Extruded Aluminium 6063-T6",
    amcaCertified: false,
    applications: ["Corporate Atriums", "Hotel Lobbies", "Modern Offices", "Showrooms"],
    features: [
      "1 to 8 slot configurations with 19mm, 25mm, or 32mm slot widths",
      "Individual black extruded aluminium deflector vanes for true 180° pattern adjustment",
      "Concealed bracket mounting and acoustic insulated plenum box compatibility"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "swirl-diffuser",
    name: "MSD Architectural Swirl Diffuser",
    category: "diffusers",
    slug: "swirl-diffuser-2",
    tagline: "High Induction Rapid Temperature Equalization",
    description: "Radial blade pattern creates a high-induction swirl air vortex that rapidly mixes supply air with ambient room air, preventing cold air dumping in high-density spaces.",
    airflowRange: "100 – 1,200 CFM",
    staticPressure: "15 – 70 Pa",
    soundLevel: "NC 20 – NC 38",
    material: "Aluminium / Galvanized Steel Face with Plastic Deflectors",
    amcaCertified: false,
    applications: ["Open Plan Offices", "Conference Centers", "Auditoriums", "Airports"],
    features: [
      "Fixed and adjustable radial blade geometries for variable throw patterns",
      "High room induction ratio up to 25:1 for draft-free comfort",
      "Available in round and 595x595mm modular ceiling tile face formats"
    ],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "jet-nozzle",
    name: "High Velocity Jet Nozzles (JN Series)",
    category: "diffusers",
    slug: "jet-nozzle-2",
    tagline: "Long-Throw Concentrated Air Delivery up to 45 Meters",
    description: "Engineered for massive spaces where ductwork cannot be brought near occupants. Features full 360° rotational nozzle adjustment.",
    airflowRange: "150 – 3,500 CFM (Dia 100mm to 630mm)",
    staticPressure: "25 – 180 Pa",
    soundLevel: "NC 25 – NC 45",
    material: "Spun Aluminium Nozzle Core",
    amcaCertified: false,
    applications: ["Airport Terminals", "Indoor Sports Arenas", "Railway Stations", "Shopping Malls"],
    features: [
      "Spherical discharge core rotates ±30° vertically and 360° horizontally",
      "Throw distance exceeding 40 meters with minimal velocity degradation",
      "Available with manual adjustment or motorized 24V actuators"
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "laminar-flow-diffuser",
    name: "Laminar Flow Cleanroom Diffuser (LFD Series)",
    category: "diffusers",
    slug: "laminar-flow-diffuser",
    tagline: "Unidirectional Low Velocity Air for Cleanrooms & Operating Theatres",
    description: "Designed for Class 100 to Class 10,000 cleanrooms and hospital surgery suites. Discharges a non-turbulent, unidirectional piston of filtered air over sterile zones.",
    airflowRange: "200 – 1,800 CFM",
    staticPressure: "15 – 45 Pa",
    soundLevel: "NC 15 – NC 28",
    material: "Aluminium / Stainless Steel SS 304 / SS 316",
    amcaCertified: false,
    applications: ["Hospital Operating Theatres", "Pharma Sterile Rooms", "Semiconductor Cleanrooms"],
    features: [
      "Perforated face with 40% open area providing uniform low face velocity (0.2 – 0.3 m/s)",
      "Integrated gel-seal or gasket HEPA / ULPA filter housing",
      "Removable face plate secured by quarter-turn fasteners for sanitization"
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "spot-diffuser",
    name: "Spot & Eyeball Diffusers",
    category: "diffusers",
    slug: "spot-diffuser-2",
    tagline: "Directional High-Induction Spot Cooling",
    description: "Provides pinpoint directional cool air throw to high heat-load zones, workstations, and airport check-in counters.",
    airflowRange: "80 – 900 CFM",
    staticPressure: "20 – 90 Pa",
    soundLevel: "NC 22 – NC 38",
    material: "Aluminium Spun Housing",
    amcaCertified: false,
    applications: ["Airport Check-ins", "Industrial Control Rooms", "Broadcast Studios"],
    features: [
      "Universal eyeball swivel core with 60° total angle adjustment",
      "Integrated volume control damper ring at rear",
      "Powder coated in pure architectural white or custom RAL colors"
    ],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "plaque-diffuser",
    name: "MDCP Architectural Plaque Diffuser",
    category: "diffusers",
    slug: "plaque-diffuser",
    tagline: "Flush Face Aesthetic Radial Air Discharge",
    description: "Aesthetic flat plaque front plate with uniform 360-degree horizontal air induction along ceiling surface, preventing ceiling smudging.",
    airflowRange: "150 – 1,100 CFM",
    staticPressure: "10 – 55 Pa",
    soundLevel: "NC 18 – NC 32",
    material: "Formed Aluminium / Steel Plaque",
    amcaCertified: false,
    applications: ["Premium Corporate Suites", "Architectural Offices", "Luxury Retail"],
    features: [
      "Clean minimalist square plaque face without visible screws",
      "Coanda effect horizontal throw pattern maintaining ceiling attachment",
      "Hinged face plate for effortless duct access and cleaning"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ceiling-diffuser",
    name: "MDC Square & Rectangular Ceiling Diffusers",
    category: "diffusers",
    slug: "ceiling-diffuser",
    tagline: "Standard 1, 2, 3 & 4-Way Commercial Air Diffusers",
    description: "The HVAC industry gold standard for general ceiling supply and return air distribution with high capacity and low pressure loss.",
    airflowRange: "100 – 2,500 CFM",
    staticPressure: "10 – 50 Pa",
    soundLevel: "NC 18 – NC 36",
    material: "Extruded Aluminium 6063-T6",
    amcaCertified: false,
    applications: ["Commercial Offices", "Schools & Colleges", "Retail Outlets", "Hotels"],
    features: [
      "1-way, 2-way, 3-way, and 4-way blow patterns with removable core",
      "Optional opposed blade damper (OBD) collar for airflow regulation",
      "Seamless mitered corners with tight mechanical interlocking"
    ],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "helical-diffuser",
    name: "MHD Helical Swirl Diffusers",
    category: "diffusers",
    slug: "helical-diffuser",
    tagline: "Micro-Swirl Air Distribution for Low Floor-to-Ceiling Spaces",
    description: "Specially angled curved spiral blades generate intense micro-turbulences that mix high delta-T air quickly without occupant drafts.",
    airflowRange: "120 – 950 CFM",
    staticPressure: "12 – 50 Pa",
    soundLevel: "NC 20 – NC 34",
    material: "Sheet Steel / Aluminium",
    amcaCertified: false,
    applications: ["IT Parks", "Banks", "Laboratories", "Hospital Wards"],
    features: [
      "Helical radial pattern ensures rapid cooling at occupant level",
      "Suitable for VAV (variable air volume) systems operating down to 25% flow",
      "Integrated top or side entry galvanized plenum box"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },

  // Dampers
  {
    id: "smoke-and-fire-damper",
    name: "UL-555 Smoke & Fire Dampers (SFD Series)",
    category: "dampers",
    slug: "smoke-and-fire-damper",
    tagline: "UL-555 Certified 120/180 Minute Fire Integrity with Actuators",
    description: "Life-safety dampers designed to prevent fire and smoke migration through HVAC ductwork penetrations across rated fire barriers and compartments.",
    airflowRange: "Duct sizes from 150x150mm up to 2400x2400mm",
    staticPressure: "Leakage Class I / Class II rating",
    soundLevel: "Ultra Low Insertion Loss",
    material: "Galvanized Steel 1.2mm / 1.6mm / SS 304 Casing",
    amcaCertified: true,
    fireRating: "UL-555 120 Mins & 180 Mins (BS 476 Part 20/CBRI Certified)",
    applications: ["All Commercial Buildings", "Metros & Airports", "Hospitals", "Data Centers"],
    features: [
      "Equipped with fast-acting Belimo / Honeywell 24V/230V motorized actuators",
      "Thermal sensor / fusible link triggering blade closure at 72°C or 141°C",
      "Stainless steel side jamb seals and silicone blade edge gaskets for zero smoke bypass"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "aluminium-low-leakage-damper",
    name: "Aluminium Low Leakage Volume Dampers (LLD Series)",
    category: "dampers",
    slug: "aluminium-low-leakage-damper",
    tagline: "AMCA Class 1A Low Leakage Aerofoil Air Control",
    description: "Heavy-duty extruded aluminium opposed blade dampers with silicone blade edge seals and internal concealed gear linkage for precision air balance.",
    airflowRange: "Up to 4000 FPM Face Velocity",
    staticPressure: "Up to 1500 Pa",
    soundLevel: "Quiet Operation",
    material: "Extruded Aluminium 6063-T6 with EPDM/Silicone Seals",
    amcaCertified: true,
    fireRating: "Standard",
    applications: ["AHU Mixing Boxes", "Outside Air Dampers", "Cleanroom Air Control"],
    features: [
      "Aerofoil dual skin blades engineered for minimal pressure drop",
      "AMCA 500-D tested Class 1A leakage rating (< 3 CFM/sq ft @ 1 in. w.g.)",
      "Concealed polycarbonate/brass gear mechanism protected inside side frame"
    ],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "constant-volume-regulator",
    name: "Constant Volume Regulators (CVR)",
    category: "dampers",
    slug: "constant-volume-regulator",
    tagline: "Mechanical Self-Balancing Airflow Control without Electricity",
    description: "Autonomous mechanical airflow regulators that maintain exact preset CFM regardless of duct static pressure variations from 50 to 500 Pa.",
    airflowRange: "15 to 600 CFM (Duct Dia 80mm to 250mm)",
    staticPressure: "50 – 500 Pa Self-Regulating Range",
    soundLevel: "NC 25 – NC 35",
    material: "Polymer / Galvanized Steel Body with Stainless Steel Spring",
    amcaCertified: false,
    fireRating: "M1 Fire Rated Polymer",
    applications: ["Hotel Guest Rooms", "Residential Exhaust Stacks", "School Classrooms"],
    features: [
      "No wiring, actuators, or DDC controllers required — pure mechanical physics",
      "Maintains ±10% airflow accuracy across wide pressure fluctuations",
      "Tool-free calibrated CFM dial adjustment ring"
    ],
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "round-damper",
    name: "Round Spigot & Duct Balancing Dampers",
    category: "dampers",
    slug: "round-damper",
    tagline: "Manual Quadrant & Motorized Circular Duct Dampers",
    description: "Circular butterfly and multi-blade dampers designed for easy insertion into round spiral duct systems with locking quadrant handles.",
    airflowRange: "Dia 100mm to 630mm",
    staticPressure: "Up to 750 Pa",
    soundLevel: "Low Turbulence",
    material: "Galvanized Steel / Stainless Steel",
    amcaCertified: false,
    fireRating: "Standard",
    applications: ["Spiral Duct Balancing", "Exhaust Stacks", "Branch Line Trimming"],
    features: [
      "Heavy duty locking quadrant lever with clear 0° to 90° open markings",
      "Rubber lip seal gasket on spigot collars for airtight duct slip connection"
    ],
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "grille-collar-damper",
    name: "Grille Collar Opposed Blade Dampers (OBD)",
    category: "dampers",
    slug: "grille-collar-damper-aluminium",
    tagline: "Rear Mount Balancing Damper for Grilles & Diffusers",
    description: "Attached directly to the rear neck of diffusers and grilles. Allows key-operated screwdriver adjustment through the diffuser face without dismantling.",
    airflowRange: "Fits all standard neck sizes",
    staticPressure: "Up to 500 Pa",
    soundLevel: "Low Noise",
    material: "Extruded Aluminium / Mill Finish Galvanized",
    amcaCertified: false,
    fireRating: "Standard",
    applications: ["Terminal Air Balancing", "Ceiling Diffuser Tuning"],
    features: [
      "Smooth gear-driven opposed blade action ensures uniform face air velocity",
      "Face-accessible adjustment screw"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },

  // Grilles & Louvers
  {
    id: "linear-grilles",
    name: "Architectural Linear Bar Grilles (LBG Series)",
    category: "louvers",
    slug: "linear-grilles",
    tagline: "Extruded Aluminium 0°, 15° & 30° Deflection Bar Grilles",
    description: "Continuous linear grilles for sidewall, sill, and floor trench supply/return air in high-end architectural settings.",
    airflowRange: "High Capacity Linear Airflow",
    staticPressure: "5 – 35 Pa",
    soundLevel: "NC 15 – NC 30",
    material: "Extruded Aluminium 6063-T6",
    amcaCertified: false,
    applications: ["Glass Curtain Walls", "Perimeter Trench Heating/Cooling", "Executive Suites"],
    features: [
      "Heavy duty solid extruded bars with 0°, 15°, or 30° blade deflection angles",
      "Available with 3mm, 5mm, or 6mm blade thickness for floor pedestrian loads",
      "Concealed joining alignment pins for seamless continuous runs"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "double-adjustable-louver",
    name: "Double Adjustable Louver Grille (DAG Series)",
    category: "louvers",
    slug: "double-adjustable-louver-grille",
    tagline: "Independently Adjustable Horizontal & Vertical Aerofoil Blades",
    description: "Provides full 4-way directional throw pattern control with independently adjustable front and rear aerofoil louvers.",
    airflowRange: "100 – 4,000 CFM",
    staticPressure: "8 – 45 Pa",
    soundLevel: "NC 18 – NC 34",
    material: "Extruded Aluminium 6063-T6",
    amcaCertified: false,
    applications: ["Gymnasiums", "Manufacturing Halls", "Exhibition Centers", "Sidewall Supply"],
    features: [
      "Aerodynamic streamlined aerofoil blades for minimal friction and sound",
      "Pivoted spring wire blade retention for vibration-free hold"
    ],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "air-intake-louvers",
    name: "Weatherproof Air Intake & Exhaust Louvers (WL Series)",
    category: "louvers",
    slug: "air-intake-louvers",
    tagline: "Rain-Defense Storm Louver for Exterior Facades",
    description: "Architectural exterior wall louvers engineered to block wind-driven rain while providing maximum free area for fresh air intake and exhaust.",
    airflowRange: "Up to 55% Free Area",
    staticPressure: "Low Resistance Aerofoil Profile",
    soundLevel: "Low Wind Whistle",
    material: "Extruded Aluminium / Stainless Steel SS 316",
    amcaCertified: true,
    fireRating: "Standard",
    applications: ["Building Exterior Facades", "Plant Rooms", "Cooling Tower Louvers", "Basement Exhaust"],
    features: [
      "AMCA 500-L certified water penetration rejection profile",
      "Integral rear bird screen / insect mesh in galvanized or stainless steel",
      "Extended drainable blade sill for rain shedding"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "egg-crate-grille",
    name: "Egg Crate Return Air Grilles (ECG Series)",
    category: "louvers",
    slug: "egg-crate-grille",
    tagline: "90% Free Area High-Volume Return & Exhaust Grille",
    description: "Aluminium 12.7x12.7mm egg crate grid that offers the highest free area percentage for non-restricted return air flow.",
    airflowRange: "90% Open Free Area",
    staticPressure: "Ultra Low Pressure Drop (< 10 Pa)",
    soundLevel: "Whisper Quiet",
    material: "Aluminium Extruded Frame with Aluminium Honeycomb Lattice",
    amcaCertified: false,
    applications: ["AHU Room Return Air", "Ceiling Exhaust", "Cleanroom Return Air Risers"],
    features: [
      "12.7 x 12.7 x 12.7 mm cell size grid with high structural rigidity",
      "Available with hinged removable filter frame for washable air filters"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "drum-louvers",
    name: "Heavy Duty Drum Louvers",
    category: "louvers",
    slug: "drum-louvers",
    tagline: "Large-Capacity Directional Jet Discharge for Industrial Halls",
    description: "Heavy cylindrical drum housing with internal adjustable blades that can be rotated ±30° up or down for spot conditioning.",
    airflowRange: "500 – 6,000 CFM",
    staticPressure: "25 – 120 Pa",
    soundLevel: "NC 28 – NC 48",
    material: "Heavy Gauge Aluminium",
    amcaCertified: false,
    applications: ["Factories", "Warehouses", "Airport Hangars", "Convention Centers"],
    features: [
      "Rotatable drum core with adjustable discharge louvers",
      "Long throw reach exceeding 30 meters in high bay spaces"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mev-disc-valve",
    name: "MEV Disc Valves & Toilet Exhaust Valves",
    category: "louvers",
    slug: "mev-disc-valve",
    tagline: "Adjustable Spin-Disc Core for Precision Room Extraction",
    description: "Ceiling-mounted round valves with rotating center disc that allows precise room-by-room CFM throttling in wet areas.",
    airflowRange: "20 – 250 CFM (Dia 100, 125, 150, 200mm)",
    staticPressure: "15 – 90 Pa",
    soundLevel: "NC 18 – NC 30",
    material: "Sheet Steel Epoxy Coated / Polypropylene",
    amcaCertified: false,
    applications: ["Hotel Bathrooms", "Residential Toilets", "Kitchen Extraction"],
    features: [
      "Micro-threaded center spindle with lock nut for locked CFM setting",
      "Mounting collar with rubber sealing ring for airtight round duct installation"
    ],
    image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=800&q=80"
  },

  // Acoustics & Accessories
  {
    id: "sound-attenuator",
    name: "Round & Rectangular Sound Attenuators (Silencers)",
    category: "accessories",
    slug: "round-rectangular-sound-attenuator",
    tagline: "High Insertion-Loss Acoustic Splitters for Fan & Duct Noise",
    description: "Engineered acoustic silencers designed using aerodynamically shaped acoustic baffles packed with inorganic non-hygroscopic glass fiber.",
    airflowRange: "Custom sized for all duct diameters and dimensions",
    staticPressure: "Low Pressure Drop Splitters",
    soundLevel: "Noise Reduction: 15 – 45 dB Dynamic Insertion Loss",
    material: "Galvanized Steel Outer Casing + Perforated Inner Sheet + Glass Cloth",
    amcaCertified: true,
    fireRating: "Non-combustible BS 476 Class 0",
    applications: ["AHU Discharge/Inlet", "Axial Fan Silencers", "Auditoriums", "Hospital HVAC"],
    features: [
      "Bellmouth aerofoil baffle nose for minimal static pressure drop and airflow regeneration noise",
      "Infill protected by anti-erosion glass fabric preventing fiber carryover into airstream"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "flexible-duct-connector",
    name: "Flexible Duct Connectors",
    category: "accessories",
    slug: "flexible-duct-connector",
    tagline: "Vibration Isolating Flame-Retardant Duct Joint",
    description: "Flexible fabric joints installed between fans/AHUs and sheet metal ductwork to prevent vibration transmission and duct resonance.",
    airflowRange: "All sizes",
    staticPressure: "Up to 3,000 Pa",
    soundLevel: "Acoustic Decoupler",
    material: "Neoprene / Silicone / Fiberglass Fabric with Galvanized Sheet Metal Seams",
    amcaCertified: false,
    fireRating: "250°C / 2 hrs & 400°C High Temp Silicone Available",
    applications: ["All Fan Outlets", "AHU Connections", "Smoke Spill Isolation"],
    features: [
      "Airtight lock-seam mechanical joint between fabric and metal flanges",
      "Resistant to moisture, ozone, UV, and aggressive fumes"
    ],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  }
];

export const APPLICATION_SECTORS = [
  {
    id: "airports",
    title: "Airports & Aviation Terminals",
    slug: "airports",
    icon: "Plane",
    summary: "Large-volume displacement ventilation, jet nozzles with up to 45m throw, smoke evacuation, and quiet air distribution for international passenger terminals.",
    keyProducts: ["High Velocity Jet Nozzles (JN Series)", "Vane Axial Smoke Spill Fans", "Architectural Slot Diffusers", "Acoustic Silencers"],
    projects: ["Indira Gandhi International Airport T3 (Delhi)", "Kempegowda International Airport T2 (Bengaluru)", "Goa MOPA International Airport", "Jewar Noida International Airport"],
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "infrastructure",
    title: "Metros, Tunnels & Infrastructure",
    slug: "infrastructure-application",
    icon: "Train",
    summary: "Heavy-thrust reversible impulse jet fans and 400°C emergency smoke extract systems engineered for underground metro tunnels and rail networks.",
    keyProducts: ["Impulse & Induction Jet Fans", "Heavy Duty Vane Axial Fans", "UL 555 Fire & Smoke Dampers", "Stainless Steel Storm Louvers"],
    projects: ["Mumbai Metro Line 3 (Underground)", "Delhi Metro Phase 3 & 4 Stations", "Pir Panjal Railway Tunnel", "Bangalore Namma Metro"],
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "commercial",
    title: "Commercial Towers & IT Parks",
    slug: "commercial-application",
    icon: "Building2",
    summary: "Energy-efficient EC motor plug fan arrays, ultra-quiet inline cabinet fans, and sleek continuous slot diffusers for Fortune 500 Grade-A office spaces.",
    keyProducts: ["MDS Linear Slot Diffusers", "Acoustic Cabinet Inline Fans", "Plug & Plenum Fans", "Low Leakage Dampers"],
    projects: ["DLF CyberCity (Gurugram)", "Mindspace IT Park (Hyderabad)", "World Trade Center (Noida)", "One Horizon Center"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "healthcare",
    title: "Healthcare, Hospitals & Cleanrooms",
    slug: "healthcare-application",
    icon: "Activity",
    summary: "Sterile laminar flow diffusers with integrated HEPA filters, positive pressure pressurization dampers, and stainless steel cleanroom air valves.",
    keyProducts: ["Laminar Flow Diffusers (LFD Series)", "Constant Volume Regulators (CVR)", "Stainless Steel Dampers", "Silent Mixed Flow Fans"],
    projects: ["AIIMS New Delhi (New Surgical Block)", "Medanta The Medicity (Gurugram)", "Apollo Hospitals (Chennai)", "Fortis Memorial Research Institute"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hospitality",
    title: "Luxury Hospitality & Hotels",
    slug: "hospitality-application",
    icon: "Hotel",
    summary: "Whisper-quiet NC-20 acoustic fan units, elegant swirl diffusers, and concealed disc valves that ensure complete guest comfort.",
    keyProducts: ["Silent Mixed Flow Fans", "Architectural Plaque Diffusers", "Round Sound Attenuators", "Toilet Exhaust Disc Valves"],
    projects: ["The Taj Mahal Palace (Mumbai)", "ITC Maurya (New Delhi)", "The Oberoi (Bengaluru)", "JW Marriott Aerocity"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "industrial",
    title: "Industrial Plants & Manufacturing",
    slug: "industrial-application",
    icon: "Factory",
    summary: "Explosion-proof bifurcated fans, wet scrubbers, heavy backward curved blowers, and weather louvers built to withstand extreme harsh environments.",
    keyProducts: ["Bifurcated Cabinet Fans", "Backward Curved Centrifugal Blowers", "Cabinet Air Washer & Scrubber Sections", "Drum Louvers"],
    projects: ["Reliance Jamnagar Refinery", "Tata Motors Manufacturing Plant", "L&T Heavy Engineering", "Maruti Suzuki Manesar"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "educational",
    title: "Educational Institutes & Campuses",
    slug: "educational-institutes-application",
    icon: "GraduationCap",
    summary: "High-volume fresh air ventilation systems, demand-controlled volume dampers, and low-noise air distribution for auditoriums and laboratories.",
    keyProducts: ["Square Ceiling Diffusers", "Linear Bar Grilles", "Centrifugal Forward Curved Fans", "Constant Volume Regulators"],
    projects: ["IIT Delhi Campus", "IIM Ahmedabad", "Ashoka University Sonepat", "BITS Pilani"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "residential",
    title: "Residential Townships & High-Rises",
    slug: "residential-application",
    icon: "Home",
    summary: "Centralized shaft exhaust fans, basement smoke evacuation systems, and quiet bathroom MEV valves for modern luxury high-rises.",
    keyProducts: ["Circular Inline Duct Fans", "MEV Disc Valves", "Impulse Jet Fans", "Fire & Smoke Dampers"],
    projects: ["Lodha World Towers (Mumbai)", "Godrej Golf Links", "DLF The Camellias", "Prestige Shantiniketan"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
  }
];

export const LANDMARK_PROJECTS = [
  {
    id: "p1",
    title: "Indira Gandhi International Airport T3",
    location: "New Delhi",
    category: "Aviation",
    scope: "Supplied 450+ high capacity Vane Axial Fans, 3,200 Jet Nozzles, and UL-555 Fire Dampers.",
    metrics: "Over 4,500,000 CFM Ventilation Handled",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p2",
    title: "Mumbai Metro Line 3 Underground Corridor",
    location: "Mumbai",
    category: "Infrastructure",
    scope: "Emergency 400°C/2hr tunnel ventilation axial fans, impulse jet fans, and heavy-duty blast dampers.",
    metrics: "33.5 km Underground Tunnel Network",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p3",
    title: "DLF CyberCity Downtown",
    location: "Gurugram",
    category: "Commercial",
    scope: "Complete HVAC air distribution with architectural slot diffusers, EC motor plug fans, and sound attenuators.",
    metrics: "12 Million Sq. Ft. Grade-A Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p4",
    title: "AIIMS New Surgical & Super-Specialty Block",
    location: "New Delhi",
    category: "Healthcare",
    scope: "Cleanroom laminar flow diffusers with HEPA housings, stainless steel volume dampers, and negative pressure fans.",
    metrics: "42 Modular Ultra-Clean Operation Theatres",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p5",
    title: "Reliance Jamnagar Petrochemical Complex",
    location: "Gujarat",
    category: "Industrial",
    scope: "Heavy-duty explosion proof bifurcated fans, backward curved blowers, and acid-resistant wet air scrubbers.",
    metrics: "World's Largest Refining Hub",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p6",
    title: "Kempegowda International Airport T2",
    location: "Bengaluru",
    category: "Aviation",
    scope: "Garden-terminal architectural custom swirl diffusers, linear slot plenums, and whisper-quiet inline cabinet units.",
    metrics: "Terminal in a Garden - LEED Platinum",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  }
];

export const TIMELINE = [
  { year: "1973", title: "Inception & Foundry", desc: "Air Flow was established with an engineering vision to manufacture high-precision aerodynamic fans in India." },
  { year: "1988", title: "Air Distribution Line", desc: "Launched indigenous manufacturing of extruded aluminium architectural diffusers, grilles, and dampers." },
  { year: "2002", title: "AMCA Certification", desc: "Achieved international AMCA 210 & AMCA 300 testing lab certifications for fan aerodynamic & sound performance." },
  { year: "2012", title: "Mega Greater Noida Plant", desc: "Inaugurated 1,50,000+ sq. ft. modern facility in Greater Noida equipped with CNC laser systems and automated balancing." },
  { year: "2020", title: "UL-555 Life Safety Certification", desc: "Secured UL 555 & UL 555S fire and smoke damper ratings for international tunnel and infrastructure projects." },
  { year: "2026+", title: "Digital Smart Manufacturing & ERP", desc: "Pioneering smart EC motors, direct digital BOQ integration with Airflow Enterprise ERP, and sustainable green building ventilation." }
];
