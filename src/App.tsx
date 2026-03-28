import React, { useState } from 'react';
import {
  Home,
  Calendar,
  IndianRupee,
  Hammer,
  MessageSquare,
  BarChart3,
  AlertTriangle,
  Megaphone,
  Info,
  ShieldAlert,
  FileText,
  Camera,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowDown,
  UploadCloud,
  Image as ImageIcon,
  X
} from 'lucide-react';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-warning selection:text-dark">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-dark/95 backdrop-blur-md border-b-2 border-warning shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2 min-w-0">
              <AlertTriangle className="h-6 w-6 text-warning shrink-0" />
              <span className="font-bold text-base lg:text-lg tracking-tight hidden sm:block text-white truncate uppercase">
                Case Documentation
              </span>
            </div>
            <div className="hidden md:flex space-x-6 overflow-x-auto">
              <a href="#summary" className="text-light hover:text-warning text-sm font-bold uppercase tracking-wider transition-colors">Summary</a>
              <a href="#agreement" className="text-light hover:text-warning text-sm font-bold uppercase tracking-wider transition-colors">Agreement</a>
              <a href="#timeline" className="text-light hover:text-warning text-sm font-bold uppercase tracking-wider transition-colors">Timeline</a>
              <a href="#payments" className="text-light hover:text-warning text-sm font-bold uppercase tracking-wider transition-colors">Payments</a>
              <a href="#quality" className="text-light hover:text-warning text-sm font-bold uppercase tracking-wider transition-colors">Quality</a>
              <a href="#communication" className="text-light hover:text-warning text-sm font-bold uppercase tracking-wider transition-colors">Communication</a>
              <a href="#comparison" className="text-light hover:text-warning text-sm font-bold uppercase tracking-wider transition-colors">Comparison</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section id="home" className="relative w-full bg-dark text-white border-b-4 border-warning overflow-hidden">
        {/* Industrial background pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDQwbDQwLTQwSDB2NDB6bTQwIDBWMGwtNDAgNDBoNDB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')", backgroundSize: '40px 40px' }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 flex flex-col items-center text-center">
          
          <div className="mb-8 bg-white p-4 sm:p-6 rounded-md shadow-xl border-4 border-alert inline-block relative transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="absolute -top-4 -right-4 bg-alert text-white text-[10px] sm:text-xs font-black px-3 py-1 uppercase tracking-widest transform rotate-12 shadow-md">
              Subject
            </div>
            <img 
              src="https://lh3.googleusercontent.com/d/1WWQnv1BJuNpxBwq3NYM6XDXd3eaVWGGq" 
              alt="M&Y Construction Builders Logo" 
              className="h-20 sm:h-28 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="inline-block bg-warning text-dark font-black px-4 py-1.5 rounded-sm text-sm sm:text-base tracking-[0.2em] uppercase mb-8 shadow-md text-center">
            PROJECT DELAY & EXECUTION FAILURE. <br />
            CONSTRUCTION SERVICE CONCERNS DOCUMENTED
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 uppercase leading-[1.1] drop-shadow-lg">
            Project Delay & <br className="hidden sm:block" />
            <span className="text-warning">Payment Concern</span>
          </h1>
          
          <div className="flex items-center gap-4 mb-10">
            <div className="h-0.5 w-12 bg-alert"></div>
            <span className="text-2xl sm:text-3xl md:text-4xl text-light font-bold tracking-tight uppercase">Bangalore</span>
            <div className="h-0.5 w-12 bg-alert"></div>
          </div>
          
          <div className="bg-charcoal/80 border-l-4 border-alert p-6 max-w-3xl mx-auto mb-12 shadow-xl backdrop-blur-sm">
            <p className="text-lg sm:text-xl text-light font-medium text-left leading-relaxed">
              A factual documentation of a residential construction project involving <strong className="text-white font-bold">M&Y Construction Builders</strong>.
            </p>
          </div>
          
          <a 
            href="#summary" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-warning hover:bg-warning-dark text-dark font-black text-lg uppercase tracking-wider rounded-sm transition-all shadow-[0_4px_0_#E0A800] hover:shadow-[0_2px_0_#E0A800] hover:translate-y-[2px]"
          >
            View Full Case Details
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
        
        {/* Caution Tape border effect */}
        <div className="absolute bottom-0 left-0 w-full h-3 bg-[repeating-linear-gradient(45deg,#FFC107,#FFC107_20px,#121212_20px,#121212_40px)]"></div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* 2. PROJECT SUMMARY SECTION */}
        <section id="summary" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-charcoal pb-4">
            <Info className="h-8 w-8 text-alert" />
            <h2 className="text-3xl font-black tracking-tight text-charcoal uppercase">Project Summary</h2>
          </div>

          <div className="bg-white rounded-md shadow-lg border-2 border-charcoal overflow-hidden relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-warning"></div>
            <div className="p-6 sm:p-8 pl-8 sm:pl-10">
              <p className="text-charcoal mb-8 leading-relaxed font-medium text-lg">
                This section outlines the core details of my <strong className="font-black text-alert uppercase tracking-wide">bad construction experience Bangalore</strong>. It serves as an objective <strong className="font-black text-alert uppercase tracking-wide">M&Y Construction Builders Bangalore review</strong> based on actual events, payments, and site conditions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                <div className="space-y-6">
                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Contractor</p>
                    <p className="font-black text-charcoal text-xl">M&Y Construction Builders</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Project Type</p>
                    <p className="font-bold text-charcoal text-lg">First Floor Residential Construction (2 BHK)</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Location</p>
                    <p className="font-bold text-charcoal text-lg">Bangalore</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Contract Value</p>
                    <p className="font-black text-charcoal text-xl">₹19,80,000</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded border-2 border-alert relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-alert text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">Alert</div>
                    <p className="text-xs font-bold text-alert-dark uppercase tracking-widest mb-1">Amount Paid</p>
                    <p className="font-black text-alert text-2xl">₹19,30,000</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded border border-slate-200">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Agreed Timeline</p>
                      <p className="font-bold text-charcoal text-lg">3 Months</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded border-2 border-alert relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-alert text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">Alert</div>
                      <p className="text-xs font-bold text-alert-dark uppercase tracking-widest mb-1">Current Status</p>
                      <p className="font-black text-alert text-lg flex items-center gap-1.5 leading-tight">
                        <Clock className="h-5 w-5 text-alert shrink-0" /> Incomplete after 7+ months
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-md shadow-lg border-2 border-charcoal overflow-hidden relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-charcoal"></div>
            <div className="p-6 sm:p-8 pl-8 sm:pl-10">
              <h3 className="text-xl font-black text-charcoal mb-6 border-b-2 border-slate-100 pb-4 uppercase tracking-wide">Contractor Contact Details</h3>
              <div className="flex flex-col gap-8">
                <div className="w-full max-w-4xl mx-auto">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1TSNk2QEeHCAEsC-S_zlq9AmNE3kU8pf_" 
                    alt="Contractor Manjunath Contact Details" 
                    className="w-full rounded-lg border border-slate-200 shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                    referrerPolicy="no-referrer"
                    onClick={() => setSelectedImage("https://lh3.googleusercontent.com/d/1TSNk2QEeHCAEsC-S_zlq9AmNE3kU8pf_")}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-charcoal p-6 rounded border-2 border-alert">
                  <div>
                    <p className="text-xs font-bold text-light uppercase tracking-widest mb-1">Name</p>
                    <p className="font-black text-warning text-xl">Manjunath</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-light uppercase tracking-widest mb-1">Company</p>
                    <p className="font-black text-warning text-xl">M&Y Construction Builders</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-light font-medium text-sm leading-relaxed border-l-2 border-alert pl-4">
                      The image provided contains the contact details of the contractor responsible for this project. This information is documented here for factual record-keeping and consumer awareness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. LEGAL AGREEMENT SECTION */}
        <section id="agreement" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-charcoal pb-4">
            <FileText className="h-8 w-8 text-alert" />
            <h2 className="text-3xl font-black tracking-tight text-charcoal uppercase">Construction Agreement</h2>
          </div>

          <div className="bg-white rounded-md shadow-lg border-2 border-charcoal overflow-hidden relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-warning"></div>
            <div className="p-6 sm:p-8 pl-8 sm:pl-10">
              <p className="text-charcoal mb-6 leading-relaxed font-medium text-lg">
                Below is the embedded legal copy of the construction agreement signed with <strong className="font-black text-alert uppercase tracking-wide">M&Y Construction Builders</strong>.
              </p>
              <div className="w-full h-[600px] sm:h-[800px] border-4 border-charcoal rounded-md overflow-hidden relative bg-slate-100">
                <iframe 
                  src="https://drive.google.com/file/d/1e8iSht2Fvu1k5ZUwv8cM149xbb8gjWF0/preview" 
                  className="absolute top-0 left-0 w-full h-full border-0"
                  title="Construction Agreement PDF"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TIMELINE SECTION */}
        <section id="timeline" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-charcoal pb-4">
            <Calendar className="h-8 w-8 text-alert" />
            <h2 className="text-3xl font-black tracking-tight text-charcoal uppercase">Timeline of Events: <strong className="font-black text-alert">House Construction Delay Bangalore</strong></h2>
          </div>
          
          <div className="bg-white rounded-md shadow-lg border-2 border-charcoal p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-warning"></div>
            <div className="relative border-l-4 border-charcoal ml-3 space-y-8 mt-4">
              
              <div className="relative pl-8">
                <div className="absolute -left-[14px] top-1.5 h-6 w-6 rounded-sm bg-warning border-4 border-charcoal" />
                <h3 className="text-lg font-black text-charcoal uppercase tracking-wide">September 2025</h3>
                <p className="mt-1 text-slate-700 font-medium">Agreement signed with M&Y Construction Builders</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute -left-[14px] top-1.5 h-6 w-6 rounded-sm bg-warning border-4 border-charcoal" />
                <h3 className="text-lg font-black text-charcoal uppercase tracking-wide">Sept–Oct 2025</h3>
                <p className="mt-1 text-slate-700 font-medium">Initial payments made, work reported as started</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[14px] top-1.5 h-6 w-6 rounded-sm bg-warning border-4 border-charcoal" />
                <h3 className="text-lg font-black text-charcoal uppercase tracking-wide">Oct–Dec 2025</h3>
                <p className="mt-1 text-slate-700 font-medium">Progress updates received, payments continued</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[14px] top-1.5 h-6 w-6 rounded-sm bg-charcoal border-4 border-charcoal" />
                <h3 className="text-lg font-black text-charcoal uppercase tracking-wide">December 2025</h3>
                <p className="mt-1 text-slate-700 font-medium">Expected completion period not met</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[14px] top-1.5 h-6 w-6 rounded-sm bg-charcoal border-4 border-charcoal" />
                <h3 className="text-lg font-black text-charcoal uppercase tracking-wide">Jan–Feb 2026</h3>
                <p className="mt-1 text-slate-700 font-medium">Slower progress observed, quality concerns noted</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[14px] top-1.5 h-6 w-6 rounded-sm bg-alert border-4 border-charcoal animate-pulse" />
                <h3 className="text-lg font-black text-alert uppercase tracking-wide">March 2026</h3>
                <p className="mt-1 font-bold text-charcoal bg-red-50 p-3 rounded border border-alert inline-block">Work incomplete, activity stopped, contractor cited financial constraints</p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. PAYMENT SECTION */}
        <section id="payments" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-charcoal pb-4">
            <IndianRupee className="h-8 w-8 text-alert" />
            <h2 className="text-3xl font-black tracking-tight text-charcoal uppercase">Payment Records & <strong className="font-black text-alert">Contractor Payment Dispute India</strong></h2>
          </div>
          
          <div className="bg-white rounded-md shadow-lg border-2 border-charcoal p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-warning"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 pl-4">
              <div className="bg-slate-50 p-5 rounded border border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Contract</p>
                <p className="text-2xl font-black text-charcoal">₹19,80,000</p>
              </div>
              <div className="bg-red-50 p-5 rounded border-2 border-alert relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-alert text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">Alert</div>
                <p className="text-xs font-bold text-alert-dark uppercase tracking-widest mb-1">Paid</p>
                <p className="text-2xl font-black text-alert">₹19,30,000</p>
              </div>
              <div className="bg-slate-50 p-5 rounded border border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Payment Mode</p>
                <p className="text-lg font-bold text-charcoal mt-1">Bank Transfers</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4">
              <div className="border-2 border-dashed border-charcoal/30 rounded p-8 flex flex-col items-center justify-center text-center bg-slate-50 hover:bg-slate-100 hover:border-charcoal transition-colors cursor-pointer group">
                <UploadCloud className="h-8 w-8 text-charcoal/50 group-hover:text-charcoal mb-3 transition-colors" />
                <p className="text-sm font-bold text-charcoal uppercase tracking-wide">Upload Bank Proof</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Click to browse files</p>
              </div>
              <div className="border-2 border-dashed border-charcoal/30 rounded p-8 flex flex-col items-center justify-center text-center bg-slate-50 hover:bg-slate-100 hover:border-charcoal transition-colors cursor-pointer group">
                <UploadCloud className="h-8 w-8 text-charcoal/50 group-hover:text-charcoal mb-3 transition-colors" />
                <p className="text-sm font-bold text-charcoal uppercase tracking-wide">Upload Transaction Records</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Click to browse files</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WORK QUALITY SECTION */}
        <section id="quality" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-charcoal pb-4">
            <Hammer className="h-8 w-8 text-alert" />
            <h2 className="text-3xl font-black tracking-tight text-charcoal uppercase">Work Quality Observations: <strong className="font-black text-alert">House Construction Quality Issues India</strong></h2>
          </div>

          <div className="bg-white rounded-md shadow-lg border-2 border-charcoal p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-warning"></div>
            <ul className="space-y-4 mb-8 text-charcoal pl-4">
              <li className="flex items-start gap-4 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="h-2 w-2 rounded-none bg-alert mt-2 shrink-0 rotate-45" />
                <span className="font-bold text-lg">Incomplete work relative to payments</span>
              </li>
              <li className="flex items-start gap-4 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="h-2 w-2 rounded-none bg-alert mt-2 shrink-0 rotate-45" />
                <span className="font-bold text-lg">Finishing inconsistencies</span>
              </li>
              <li className="flex items-start gap-4 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="h-2 w-2 rounded-none bg-alert mt-2 shrink-0 rotate-45" />
                <span className="font-bold text-lg">Visible structural imperfections</span>
              </li>
              <li className="flex items-start gap-4 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="h-2 w-2 rounded-none bg-alert mt-2 shrink-0 rotate-45" />
                <span className="font-bold text-lg">Alignment issues</span>
              </li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4">
              <div 
                className="group relative aspect-video bg-charcoal rounded border-2 border-charcoal overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage("https://lh3.googleusercontent.com/d/1qWuEzemaUOxKAUq9ryJpIyltV4FmvmLy")}
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1qWuEzemaUOxKAUq9ryJpIyltV4FmvmLy" 
                  alt="Site condition" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-charcoal/90 p-3 border-t-2 border-warning">
                  <span className="text-xs font-bold text-warning uppercase tracking-widest">Site condition image</span>
                </div>
              </div>
              <div 
                className="group relative aspect-video bg-charcoal rounded border-2 border-charcoal overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage("https://lh3.googleusercontent.com/d/18O2BCvSTRy2IKZmfYwGWNlZa_uSuj3y4")}
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/18O2BCvSTRy2IKZmfYwGWNlZa_uSuj3y4" 
                  alt="Incomplete Work" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-charcoal/90 p-3 border-t-2 border-warning">
                  <span className="text-xs font-bold text-warning uppercase tracking-widest">Incomplete Work</span>
                </div>
              </div>
              <div 
                className="group relative aspect-video bg-charcoal rounded border-2 border-charcoal overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage("https://lh3.googleusercontent.com/d/1qcswuDx2H2hY4Z1NQZy2dSfb3WIg0dmF")}
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1qcswuDx2H2hY4Z1NQZy2dSfb3WIg0dmF" 
                  alt="Finishing Inconsistencies" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-charcoal/90 p-3 border-t-2 border-warning">
                  <span className="text-xs font-bold text-warning uppercase tracking-widest">Finishing Inconsistencies</span>
                </div>
              </div>
              <div 
                className="group relative aspect-video bg-charcoal rounded border-2 border-charcoal overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage("https://lh3.googleusercontent.com/d/112oFgfcY7t6-M8hNnUU80jTToUo60iS2")}
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/112oFgfcY7t6-M8hNnUU80jTToUo60iS2" 
                  alt="Structural Imperfections" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-charcoal/90 p-3 border-t-2 border-warning">
                  <span className="text-xs font-bold text-warning uppercase tracking-widest">Structural Imperfections</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. COMMUNICATION SECTION */}
        <section id="communication" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-charcoal pb-4">
            <MessageSquare className="h-8 w-8 text-alert" />
            <h2 className="text-3xl font-black tracking-tight text-charcoal uppercase">Communication Record</h2>
          </div>

          <div className="bg-white rounded-md shadow-lg border-2 border-charcoal p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-warning"></div>
            <div className="space-y-4 mb-8 text-charcoal pl-4">
              <p className="flex items-center gap-3 bg-slate-50 p-3 rounded border border-slate-200"><div className="h-2 w-2 rounded-full bg-alert shrink-0" /> <span className="font-bold">Updates indicated ongoing work</span></p>
              <p className="flex items-center gap-3 bg-slate-50 p-3 rounded border border-slate-200"><div className="h-2 w-2 rounded-full bg-alert shrink-0" /> <span className="font-bold">Payments requested based on updates</span></p>
              <p className="flex items-center gap-3 bg-slate-50 p-3 rounded border border-slate-200"><div className="h-2 w-2 rounded-full bg-alert shrink-0" /> <span className="font-bold">Site observations did not always match updates</span></p>
              <p className="flex items-center gap-3 bg-slate-50 p-3 rounded border border-slate-200"><div className="h-2 w-2 rounded-full bg-alert shrink-0" /> <span className="font-bold">Contractor later communicated financial constraints</span></p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4">
              <div className="border-2 border-dashed border-charcoal/30 rounded p-6 flex flex-col items-center justify-center text-center bg-slate-50 hover:bg-slate-100 hover:border-charcoal transition-colors cursor-pointer group">
                <UploadCloud className="h-6 w-6 text-charcoal/50 group-hover:text-charcoal mb-2 transition-colors" />
                <p className="text-sm font-bold text-charcoal uppercase tracking-wide">Chat screenshots</p>
              </div>
              <div className="border-2 border-dashed border-charcoal/30 rounded p-6 flex flex-col items-center justify-center text-center bg-slate-50 hover:bg-slate-100 hover:border-charcoal transition-colors cursor-pointer group">
                <UploadCloud className="h-6 w-6 text-charcoal/50 group-hover:text-charcoal mb-2 transition-colors" />
                <p className="text-sm font-bold text-charcoal uppercase tracking-wide">Call logs</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONTRACT VS ACTUAL SECTION */}
        <section id="comparison" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-charcoal pb-4">
            <BarChart3 className="h-8 w-8 text-alert" />
            <h2 className="text-3xl font-black tracking-tight text-charcoal uppercase">Contract vs Actual Status</h2>
          </div>

          <div className="bg-white rounded-md shadow-lg border-2 border-charcoal overflow-hidden relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-warning"></div>
            <div className="overflow-x-auto pl-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-charcoal border-b-2 border-charcoal">
                    <th className="py-4 px-6 font-black text-warning uppercase tracking-widest w-1/3">Parameter</th>
                    <th className="py-4 px-6 font-black text-warning uppercase tracking-widest w-1/3">Agreed</th>
                    <th className="py-4 px-6 font-black text-alert uppercase tracking-widest w-1/3">Current</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 text-charcoal font-black uppercase tracking-wide">Timeline</td>
                    <td className="py-5 px-6 text-slate-600 font-medium">3 Months</td>
                    <td className="py-5 px-6 text-alert font-black">7+ Months (Incomplete)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 text-charcoal font-black uppercase tracking-wide">Payment Terms</td>
                    <td className="py-5 px-6 text-slate-600 font-medium">Stage-based</td>
                    <td className="py-5 px-6 text-alert font-black">Majority Paid</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 text-charcoal font-black uppercase tracking-wide">Completion</td>
                    <td className="py-5 px-6 text-slate-600 font-medium">Full</td>
                    <td className="py-5 px-6 text-alert font-black">Partial</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 text-charcoal font-black uppercase tracking-wide">Quality</td>
                    <td className="py-5 px-6 text-slate-600 font-medium">Standard</td>
                    <td className="py-5 px-6 text-alert font-black">Concerns Observed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8. KEY OBSERVATIONS SECTION */}
        <section className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-charcoal pb-4">
            <AlertTriangle className="h-8 w-8 text-alert" />
            <h2 className="text-3xl font-black tracking-tight text-charcoal uppercase">Key Observations</h2>
          </div>

          <div className="bg-white rounded-md shadow-lg border-2 border-charcoal p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-warning"></div>
            <ul className="space-y-4 text-charcoal pl-4">
              <li className="flex items-start gap-4 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="h-2 w-2 rounded-none bg-alert mt-2 shrink-0 rotate-45" />
                <span className="font-bold text-lg">Delay beyond agreed timeline</span>
              </li>
              <li className="flex items-start gap-4 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="h-2 w-2 rounded-none bg-alert mt-2 shrink-0 rotate-45" />
                <span className="font-bold text-lg">Payment vs progress mismatch</span>
              </li>
              <li className="flex items-start gap-4 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="h-2 w-2 rounded-none bg-alert mt-2 shrink-0 rotate-45" />
                <span className="font-bold text-lg">Work incomplete</span>
              </li>
              <li className="flex items-start gap-4 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="h-2 w-2 rounded-none bg-alert mt-2 shrink-0 rotate-45" />
                <span className="font-bold text-lg">Quality concerns observed</span>
              </li>
              <li className="flex items-start gap-4 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="h-2 w-2 rounded-none bg-alert mt-2 shrink-0 rotate-45" />
                <span className="font-bold text-lg">Contractor cited financial limitations</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 9. CONSUMER AWARENESS SECTION */}
        <section className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-charcoal pb-4">
            <Megaphone className="h-8 w-8 text-alert" />
            <h2 className="text-3xl font-black tracking-tight text-charcoal uppercase">Consumer Awareness</h2>
          </div>

          <div className="bg-charcoal rounded-md shadow-lg border-2 border-charcoal p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-warning"></div>
            <p className="text-light mb-8 leading-relaxed font-medium text-lg pl-4">
              If you are reading this <strong className="font-black text-warning uppercase tracking-wide">M&Y Construction Builders experience</strong> to avoid a <strong className="font-black text-warning uppercase tracking-wide">bad construction experience Bangalore</strong>, please consider the following:
            </p>
            <div className="bg-dark p-6 rounded border border-charcoal ml-4">
              <h3 className="text-xl font-black text-warning mb-6 uppercase tracking-wide border-b border-charcoal pb-4">Key takeaways for homeowners:</h3>
              <ul className="space-y-4 text-light">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-warning" />
                  <span className="font-bold text-lg">Verify contractor background</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-warning" />
                  <span className="font-bold text-lg">Use milestone-based payments</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-warning" />
                  <span className="font-bold text-lg">Conduct regular inspections</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-warning" />
                  <span className="font-bold text-lg">Maintain written documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 10. CURRENT STATUS SECTION */}
        <section className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-charcoal pb-4">
            <Info className="h-8 w-8 text-alert" />
            <h2 className="text-3xl font-black tracking-tight text-charcoal uppercase">Current Status</h2>
          </div>

          <div className="bg-white rounded-md shadow-lg border-2 border-charcoal p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-warning"></div>
            <ul className="space-y-4 text-charcoal pl-4">
              <li className="flex items-start gap-4 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="h-2 w-2 rounded-none bg-alert mt-2 shrink-0 rotate-45" />
                <span className="font-bold text-lg">Project incomplete</span>
              </li>
              <li className="flex items-start gap-4 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="h-2 w-2 rounded-none bg-alert mt-2 shrink-0 rotate-45" />
                <span className="font-bold text-lg">Financial exposure present</span>
              </li>
              <li className="flex items-start gap-4 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="h-2 w-2 rounded-none bg-alert mt-2 shrink-0 rotate-45" />
                <span className="font-bold text-lg">Further steps under consideration</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 11. DISCLAIMER SECTION */}
        <section className="scroll-mt-24 pt-8">
          <div className="bg-charcoal text-light rounded-md p-6 sm:p-8 shadow-lg border-2 border-charcoal relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-alert"></div>
            <div className="flex items-center gap-3 mb-6 pl-4 border-b border-slate-700 pb-4">
              <ShieldAlert className="h-8 w-8 text-alert" />
              <h2 className="text-2xl font-black text-white tracking-wide uppercase">Disclaimer</h2>
            </div>
            
            <div className="space-y-4 text-base leading-relaxed pl-4 font-medium">
              <p className="flex items-start gap-3"><div className="h-1.5 w-1.5 rounded-full bg-warning mt-2 shrink-0" /> This website presents a factual account based on available records, communication, and site observations.</p>
              <p className="flex items-start gap-3"><div className="h-1.5 w-1.5 rounded-full bg-warning mt-2 shrink-0" /> Content is shared in good faith for informational purposes only.</p>
              <p className="flex items-start gap-3"><div className="h-1.5 w-1.5 rounded-full bg-warning mt-2 shrink-0" /> No defamatory intent is intended.</p>
              <p className="flex items-start gap-3"><div className="h-1.5 w-1.5 rounded-full bg-warning mt-2 shrink-0" /> Visitors are encouraged to independently verify all information.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-dark border-t-4 border-warning py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-light">
          <p className="font-bold uppercase tracking-widest text-sm text-warning mb-2">Documented for consumer awareness</p>
          <p className="text-xs opacity-70">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center border-4 border-charcoal rounded bg-charcoal p-2 shadow-2xl">
            <button 
              className="absolute -top-16 right-0 text-light hover:text-warning transition-colors bg-dark p-2 rounded-full border-2 border-charcoal"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="max-w-full max-h-[85vh] object-contain rounded shadow-inner"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}


