import './globals.css';

export const metadata = {
  title: 'Airflow | Precision HVAC Ventilation, AMCA Fans, Dampers & Air Distribution',
  description: "Airflow Pvt. Ltd. - India's leading HVAC and ventilation engineering manufacturer since 1973. AMCA certified axial & centrifugal fans, jet fans, fire dampers, diffusers, and louvers. Upload BOQ directly for instant quotation.",
  keywords: 'Airflow, ventilation fans, AMCA certified fans, fire damper UL 555, slot diffusers, jet fans car park, axial flow fans, centrifugal fans, HVAC India',
  authors: [{ name: 'Air Flow Pvt. Ltd.' }],
  openGraph: {
    title: 'Air Flow - Your Trusted Ventilation Partner',
    description: 'Delivering efficient ventilation product solutions for industrial, residential, and commercial projects since 1973.',
    url: 'https://airflow.in',
    siteName: 'Air Flow',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
