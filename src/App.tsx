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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-lg tracking-tight hidden sm:block text-slate-800">
                Case Documentation
              </span>
            </div>
            <div className="hidden md:flex space-x-6 overflow-x-auto">
              <a href="#summary" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">Summary</a>
              <a href="#timeline" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">Timeline</a>
              <a href="#payments" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">Payments</a>
              <a href="#quality" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">Quality</a>
              <a href="#communication" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">Communication</a>
              <a href="#comparison" className="text-slate-600 hover:text-blue-600 text-sm font-medium transition-colors">Comparison</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        
        {/* 1. HERO SECTION */}
        <section id="home" className="scroll-mt-24 relative rounded-3xl overflow-hidden mb-12 shadow-sm border border-slate-200">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/d/1uu9p7coekkIB9GcjTB6pSvr-3aSMO3eV')" }}
          />
          <div className="absolute inset-0 z-10 bg-black/50" />
          
          <div className="relative z-20 pt-16 pb-20 px-6 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6 border border-white/20 shadow-sm backdrop-blur-md">
              <Home className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              M&Y Construction Builders Experience <br className="hidden sm:block" />
              <span className="text-blue-300">Bangalore Case Documentation</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              A factual <strong className="font-bold text-red-400">construction contractor Bangalore review</strong> and <strong className="font-bold text-red-400">contractor delay case study India</strong>, documenting a residential construction project to raise awareness about <strong className="font-bold text-red-400">residential construction issues Bangalore</strong>.
            </p>
            <a 
              href="#summary" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              View Full Case Details
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* 2. PROJECT SUMMARY SECTION */}
        <section id="summary" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <Info className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-800">Project Summary</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 sm:p-8">
              <p className="text-slate-600 mb-8 leading-relaxed">
                This section outlines the core details of my <strong className="font-bold text-red-600">bad construction experience Bangalore</strong>. It serves as an objective <strong className="font-bold text-red-600">M&Y Construction Builders Bangalore review</strong> based on actual events, payments, and site conditions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Contractor</p>
                    <p className="font-medium text-slate-900 text-lg">M&Y Construction Builders</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Project Type</p>
                    <p className="font-medium text-slate-900">First Floor Residential Construction (2 BHK)</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="font-medium text-slate-900">Bangalore</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Contract Value</p>
                    <p className="font-medium text-slate-900 text-lg">₹19,80,000</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Amount Paid</p>
                    <p className="font-bold text-red-600 text-lg">₹19,30,000</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Agreed Timeline</p>
                      <p className="font-medium text-slate-900">3 Months</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Current Status</p>
                      <p className="font-bold text-red-600 flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-red-600" /> Incomplete after 7+ months
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-6 border-b border-slate-100 pb-4">Contractor Contact Details</h3>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-red-50 p-6 rounded-lg border border-red-100">
                  <div>
                    <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-1">Name</p>
                    <p className="font-bold text-red-700 text-lg">Manjunath</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-1">Company</p>
                    <p className="font-bold text-red-700 text-lg">M&Y Construction Builders</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-red-700 font-bold text-sm leading-relaxed">
                      The image provided contains the contact details of the contractor responsible for this project. This information is documented here for factual record-keeping and consumer awareness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TIMELINE SECTION */}
        <section id="timeline" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-800">Timeline of Events: <strong className="font-bold text-red-600">House Construction Delay Bangalore</strong></h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="relative border-l-2 border-slate-100 ml-3 space-y-8">
              
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-100 border-2 border-blue-500" />
                <h3 className="text-base font-semibold text-slate-900">September 2025</h3>
                <p className="mt-1 text-slate-600">Agreement signed with M&Y Construction Builders</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-100 border-2 border-blue-500" />
                <h3 className="text-base font-semibold text-slate-900">Sept–Oct 2025</h3>
                <p className="mt-1 text-slate-600">Initial payments made, work reported as started</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-100 border-2 border-blue-500" />
                <h3 className="text-base font-semibold text-slate-900">Oct–Dec 2025</h3>
                <p className="mt-1 text-slate-600">Progress updates received, payments continued</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-100 border-2 border-slate-400" />
                <h3 className="text-base font-semibold text-slate-900">December 2025</h3>
                <p className="mt-1 text-slate-600">Expected completion period not met</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-100 border-2 border-slate-400" />
                <h3 className="text-base font-semibold text-slate-900">Jan–Feb 2026</h3>
                <p className="mt-1 text-slate-600">Slower progress observed, quality concerns noted</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-100 border-2 border-slate-400" />
                <h3 className="text-base font-semibold text-slate-900">March 2026</h3>
                <p className="mt-1 text-slate-600">Work incomplete, activity stopped, contractor cited financial constraints</p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. PAYMENT SECTION */}
        <section id="payments" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <IndianRupee className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-800">Payment Records & <strong className="font-bold text-red-600">Contractor Payment Dispute India</strong></h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                <p className="text-sm font-medium text-slate-500 mb-1">Total Contract</p>
                <p className="text-2xl font-semibold text-slate-900">₹19,80,000</p>
              </div>
              <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <p className="text-sm font-bold text-red-600 mb-1">Paid</p>
                <p className="text-2xl font-bold text-red-700">₹19,30,000</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                <p className="text-sm font-medium text-slate-500 mb-1">Payment Mode</p>
                <p className="text-lg font-medium text-slate-900 mt-1">Bank Transfers</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
                <UploadCloud className="h-8 w-8 text-slate-400 mb-3" />
                <p className="text-sm font-medium text-slate-700">Upload Bank Proof</p>
                <p className="text-xs text-slate-500 mt-1">Click to browse files</p>
              </div>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
                <UploadCloud className="h-8 w-8 text-slate-400 mb-3" />
                <p className="text-sm font-medium text-slate-700">Upload Transaction Records</p>
                <p className="text-xs text-slate-500 mt-1">Click to browse files</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WORK QUALITY SECTION */}
        <section id="quality" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <Hammer className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-800">Work Quality Observations: <strong className="font-bold text-red-600">House Construction Quality Issues India</strong></h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <ul className="space-y-3 mb-8 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>Incomplete work relative to payments</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>Finishing inconsistencies</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>Visible structural imperfections</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>Alignment issues</span>
              </li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div 
                className="group relative aspect-video bg-slate-100 rounded-lg border border-slate-200 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage("https://lh3.googleusercontent.com/d/1uu9p7coekkIB9GcjTB6pSvr-3aSMO3eV")}
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1uu9p7coekkIB9GcjTB6pSvr-3aSMO3eV" 
                  alt="Site condition" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                  <span className="text-sm font-medium text-white">Site condition image</span>
                </div>
              </div>
              <div 
                className="group relative aspect-video bg-slate-100 rounded-lg border border-slate-200 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage("https://lh3.googleusercontent.com/d/1uu9p7coekkIB9GcjTB6pSvr-3aSMO3eV")}
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1uu9p7coekkIB9GcjTB6pSvr-3aSMO3eV" 
                  alt="Construction progress" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                  <span className="text-sm font-medium text-white">Construction progress image</span>
                </div>
              </div>
              <div 
                className="group relative aspect-video bg-slate-100 rounded-lg border border-slate-200 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage("https://lh3.googleusercontent.com/d/1uu9p7coekkIB9GcjTB6pSvr-3aSMO3eV")}
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1uu9p7coekkIB9GcjTB6pSvr-3aSMO3eV" 
                  alt="Observed surface irregularities" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                  <span className="text-sm font-medium text-white">Observed surface irregularities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. COMMUNICATION SECTION */}
        <section id="communication" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-800">Communication Record</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="space-y-4 mb-8 text-slate-700">
              <p>• Updates indicated ongoing work</p>
              <p>• Payments requested based on updates</p>
              <p>• Site observations did not always match updates</p>
              <p>• Contractor later communicated financial constraints</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
                <UploadCloud className="h-6 w-6 text-slate-400 mb-2" />
                <p className="text-sm font-medium text-slate-700">Chat screenshots</p>
              </div>
              <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
                <UploadCloud className="h-6 w-6 text-slate-400 mb-2" />
                <p className="text-sm font-medium text-slate-700">Call logs</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONTRACT VS ACTUAL SECTION */}
        <section id="comparison" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-800">Contract vs Actual Status</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-4 px-6 font-semibold text-slate-900 w-1/3">Parameter</th>
                    <th className="py-4 px-6 font-semibold text-slate-900 w-1/3">Agreed</th>
                    <th className="py-4 px-6 font-semibold text-slate-900 w-1/3">Current</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 text-slate-700 font-medium">Timeline</td>
                    <td className="py-4 px-6 text-slate-600">3 Months</td>
                    <td className="py-4 px-6 text-slate-900">7+ Months (Incomplete)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 text-slate-700 font-medium">Payment Terms</td>
                    <td className="py-4 px-6 text-slate-600">Stage-based</td>
                    <td className="py-4 px-6 text-slate-900">Majority Paid</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 text-slate-700 font-medium">Completion</td>
                    <td className="py-4 px-6 text-slate-600">Full</td>
                    <td className="py-4 px-6 text-slate-900">Partial</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 text-slate-700 font-medium">Quality</td>
                    <td className="py-4 px-6 text-slate-600">Standard</td>
                    <td className="py-4 px-6 text-slate-900">Concerns Observed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8. KEY OBSERVATIONS SECTION */}
        <section className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-800">Key Observations</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>Delay beyond agreed timeline</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>Payment vs progress mismatch</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>Work incomplete</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>Quality concerns observed</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>Contractor cited financial limitations</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 9. CONSUMER AWARENESS SECTION */}
        <section className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <Megaphone className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-800">Consumer Awareness</h2>
          </div>

          <div className="bg-slate-100 rounded-xl border border-slate-200 p-6 sm:p-8">
            <p className="text-slate-700 mb-6 leading-relaxed">
              If you are reading this <strong className="font-bold text-red-600">M&Y Construction Builders experience</strong> to avoid a <strong className="font-bold text-red-600">bad construction experience Bangalore</strong>, please consider the following:
            </p>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Key takeaways for homeowners:</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-slate-500" />
                Verify contractor background
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-slate-500" />
                Use milestone-based payments
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-slate-500" />
                Conduct regular inspections
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-slate-500" />
                Maintain written documentation
              </li>
            </ul>
          </div>
        </section>

        {/* 10. CURRENT STATUS SECTION */}
        <section className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <Info className="h-7 w-7 text-blue-600" />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-800">Current Status</h2>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>Project incomplete</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>Financial exposure present</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                <span>Further steps under consideration</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 11. DISCLAIMER SECTION */}
        <section className="scroll-mt-24 pt-8">
          <div className="bg-slate-800 text-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="h-6 w-6 text-slate-400" />
              <h2 className="text-lg font-semibold text-white tracking-wide">Disclaimer</h2>
            </div>
            
            <div className="space-y-3 text-sm leading-relaxed">
              <p>This website presents a factual account based on available records, communication, and site observations.</p>
              <p>Content is shared in good faith for informational purposes only.</p>
              <p>No defamatory intent is intended.</p>
              <p>Visitors are encouraged to independently verify all information.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>Documented for consumer awareness. &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}


