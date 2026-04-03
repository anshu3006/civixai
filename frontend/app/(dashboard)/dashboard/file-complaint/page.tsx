"use client";

import { useState } from "react";
import { Mic, Volume2, Trash2 } from "lucide-react";

export default function FileComplaintPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#111]">
            File a Complaint
          </h1>
          <p className="text-sm font-medium text-[#777] mt-1">
            Describe your issue — we'll automatically detect the right department
          </p>
        </div>
        <button className="bg-white border border-[#e8eaed] text-[#555] px-4 py-2 rounded-md shadow-sm font-semibold text-sm hover:bg-[#f9f9f9] transition-colors">
          Trash Draft
        </button>
      </div>

      {/* Stepper */}
      <div className="bg-white rounded-xl shadow-sm border border-[#e8eaed] p-6 mb-6">
        <div className="flex items-center justify-between relative max-w-2xl mx-auto">
          {/* Progress Lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#e0e0e0] -z-10 -translate-y-1/2"></div>
          <div 
             className="absolute top-1/2 left-0 h-0.5 bg-[#4caf50] -z-10 -translate-y-1/2 transition-all duration-300"
             style={{ width: step > 1 ? "50%" : "0%" }}
          ></div>
          <div 
             className="absolute top-1/2 left-1/2 h-0.5 bg-[#4caf50] -z-10 -translate-y-1/2 transition-all duration-300"
             style={{ width: step > 2 ? "50%" : "0%" }}
          ></div>

          {/* Step 1 */}
          <div className="flex items-center gap-2 bg-white px-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step > 1 ? "bg-[#4caf50] text-white" : step === 1 ? "bg-[#e65100] text-white" : "bg-[#f5f5f5] text-[#999]"}`}>
              {step > 1 ? "✓" : "1"}
            </div>
            <span className={`text-sm font-bold ${step === 1 ? "text-[#e65100]" : step > 1 ? "text-[#4caf50]" : "text-[#999]"}`}>Describe</span>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-2 bg-white px-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step > 2 ? "bg-[#4caf50] text-white" : step === 2 ? "bg-[#e65100] text-white" : "bg-[#f5f5f5] text-[#999]"}`}>
              2
            </div>
            <span className={`text-sm font-bold ${step === 2 ? "text-[#e65100]" : "text-[#999]"}`}>Location</span>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-2 bg-white px-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step === 3 ? "bg-[#e65100] text-white" : "bg-[#f5f5f5] text-[#999]"}`}>
              3
            </div>
            <span className={`text-sm font-bold ${step === 3 ? "text-[#e65100]" : "text-[#999]"}`}>Review</span>
          </div>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="bg-white rounded-xl shadow-sm border border-[#e8eaed] p-8 space-y-8">
        
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
            <div className="flex items-center justify-between border-b border-[#f0f0f0] pb-4">
              <div>
                <h2 className="text-lg font-bold text-[#111]">Step 1: Describe Your Issue</h2>
                <p className="text-sm font-medium text-[#777] mt-1">
                  Type or speak your complaint in any language. Our system will automatically identify the department.
                </p>
              </div>
              <button onClick={() => setStep(1)} className="flex items-center gap-1.5 text-sm font-medium text-[#777] border border-[#e0e0e0] px-3 py-1.5 rounded-md hover:bg-[#f5f5f5]">
                <Trash2 className="h-4 w-4" /> Clear Draft
              </button>
            </div>

            <div className="space-y-4 text-[#333]">
              <div>
                <label className="block text-sm font-bold text-[#555] mb-2">Voice Input</label>
                <div className="w-full border-2 border-dashed border-[#d0d0d0] hover:border-[#1a237e] hover:bg-[#f8f9ff] transition-colors rounded-xl p-4 flex items-center justify-center text-[#283593] font-bold cursor-pointer">
                  <span className="flex items-center gap-2 bg-white border border-[#c0c0c0] shadow-sm px-4 py-2 rounded-lg text-[#333]">
                    <span className="bg-[#555] text-white text-[10px] px-1.5 py-0.5 rounded mr-1">MIC</span>
                    Speak in your language
                  </span>
                </div>
                <p className="text-xs text-[#999] font-medium mt-2">Works best in Chrome or Edge browser. Supports all Indian languages.</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-[#555]">
                    Complaint Title <span className="font-normal text-[#999]">(optional — auto-generated if blank)</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <button className="text-xs font-semibold px-2 py-1 border border-[#e0e0e0] rounded bg-[#f5f5f5]">Auto Generate</button>
                    <button className="text-[#888] border border-[#e0e0e0] p-1 rounded-md"><Volume2 className="h-3 w-3" /></button>
                  </div>
                </div>
                <input type="text" placeholder="e.g. Broken street light in HSR Layout" className="w-full border border-[#d0d0d0] rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-[#555]">
                    Describe the Problem <span className="text-red-500">*</span>
                  </label>
                  <button className="text-[#888] border border-[#e0e0e0] p-1 rounded-md"><Volume2 className="h-3 w-3" /></button>
                </div>
                <textarea rows={6} placeholder="Please provide as much detail as possible..." className="w-full border border-[#d0d0d0] rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]"></textarea>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-[#999]">More detail = faster resolution. Include location, duration, impact.</span>
                  <span className="text-xs text-[#999]">0 chars</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#555] mb-2">Add Photos <span className="font-normal text-[#999]">(optional, max 5)</span></label>
                <div className="w-full border-2 border-dashed border-[#ff9800] bg-[#fff8e1] rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#ffecb3] transition-colors">
                  <div className="text-[#283593] font-bold text-lg mb-1 tracking-wide">UPLOAD</div>
                  <div className="text-[#888] text-sm">Click to upload photos of the issue</div>
                  <div className="text-[#999] text-xs font-medium mt-1">0/5 selected • Photos help resolve issues 2x faster</div>
                </div>
              </div>

              <div className="pt-4">
                <button onClick={() => setStep(2)} className="w-full bg-[#e65100] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#ef6c00] transition-colors shadow-sm">
                  Next: Add Location →
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
            <div className="border-b border-[#f0f0f0] pb-4">
              <h2 className="text-lg font-bold text-[#111]">Step 2: Where is the Problem?</h2>
              <p className="text-sm font-medium text-[#777] mt-1">
                Precise location ensures your complaint reaches the correct local authority
              </p>
            </div>

            <div className="space-y-6 text-[#333]">
              <button className="w-full bg-[#1a237e] text-white py-4 rounded-lg font-bold text-base hover:bg-[#283593] transition-colors shadow-md">
                Use My Current Location
              </button>

              <div className="flex items-center justify-center gap-4 text-[#999] text-sm font-medium">
                <div className="h-px bg-[#e0e0e0] flex-1"></div>
                <span>— or select your location manually below —</span>
                <div className="h-px bg-[#e0e0e0] flex-1"></div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#555] mb-2">State <span className="text-red-500">*</span></label>
                  <select className="w-full border border-[#d0d0d0] rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-white text-[#333] appearance-none">
                    <option>Delhi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#555] mb-2">District <span className="text-red-500">*</span></label>
                  <select className="w-full border border-[#d0d0d0] rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-white text-[#333] appearance-none">
                    <option>Select District</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#555] mb-2">Taluka / Block</label>
                  <select className="w-full border border-[#d0d0d0] rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-white text-[#333] appearance-none">
                    <option>Select Taluka</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#555] mb-2">Mandal / Block</label>
                  <select className="w-full border border-[#d0d0d0] rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-white text-[#333] appearance-none">
                    <option>Select Mandal</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#555] mb-2">Landmark / Additional Address Details <span className="text-red-500">*</span></label>
                <textarea rows={4} placeholder="Near Apollo Hospital, opposite to Metro station..." className="w-full border border-[#d0d0d0] rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]"></textarea>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#555] mb-2">Landmark / Additional Address Details</label>
                  <input type="text" placeholder="Near Apollo Hospital, opposite to Metro st." className="w-full border border-[#d0d0d0] rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#555] mb-2">Pincode</label>
                  <input type="text" placeholder="6-digit pincode" className="w-full border border-[#d0d0d0] rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <button onClick={() => setStep(1)} className="w-full bg-white text-[#555] py-4 rounded-lg font-bold text-lg hover:bg-[#f5f5f5] border border-[#e0e0e0] transition-colors">
                  ← Back
                </button>
                <button onClick={() => setStep(3)} className="w-full bg-[#e65100] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#ef6c00] transition-colors shadow-sm">
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
