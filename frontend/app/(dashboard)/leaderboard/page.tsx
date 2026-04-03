import { Trophy, Medal, Building2, MapPin, Map, Star, TreePine, Leaf } from "lucide-react";

export default function LeaderboardPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Trophy className="h-8 w-8 text-[#e65100]" />
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#111]">
              Leaderboard
            </h1>
            <p className="text-sm font-medium text-[#777] mt-1">
              Rankings across all levels — officers, departments & regions
            </p>
          </div>
        </div>
        <div className="flex items-center border border-[#d0d0d0] rounded-md overflow-hidden bg-white px-3 py-1.5 shadow-sm">
          <span className="text-[10px] font-bold text-[#888] mr-2">IN</span>
          <select className="text-sm font-bold text-[#333] bg-transparent focus:outline-none appearance-none cursor-pointer pr-4">
            <option>All India</option>
          </select>
        </div>
      </div>

      {/* Hero Explainer Banner */}
      <div className="bg-[#1a237e] rounded-xl p-6 shadow-md text-white border border-[#283593] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 relative z-10 text-sm font-semibold text-white/90">
          <div className="flex items-center gap-2">
            <Medal className="h-4 w-4 text-[#ffd54f]" /> Officers earn points per complaint resolved (priority-based)
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-[#90caf9]" /> Departments ranked monthly by resolution rate
          </div>
          <div className="flex items-center gap-2 md:col-span-2">
            <MapPin className="h-4 w-4 text-[#ef5350]" /> Area/District — inter-level competition for best performance
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-[#e0e0e0] flex items-center gap-8 px-2 overflow-x-auto">
        <button className="flex items-center gap-2 pb-3 border-b-2 border-[#e65100] text-[#e65100] font-bold text-[15px] whitespace-nowrap">
          <Medal className="h-4 w-4" /> Officers <span className="text-[10px] bg-[#fff3e0] text-[#e65100] px-1.5 py-0.5 rounded-full">20</span>
        </button>
        <button className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-[#777] font-semibold text-[15px] hover:text-[#333] whitespace-nowrap transition-colors">
          <Building2 className="h-4 w-4" /> Departments
        </button>
        <button className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-[#777] font-semibold text-[15px] hover:text-[#333] whitespace-nowrap transition-colors">
          <MapPin className="h-4 w-4 text-[#ef5350]" /> Area-wise
        </button>
        <button className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-[#777] font-semibold text-[15px] hover:text-[#333] whitespace-nowrap transition-colors">
          <Map className="h-4 w-4 text-[#2196f3]" /> District-wise <span className="text-[10px] bg-[#f5f5f5] text-[#888] px-1.5 py-0.5 rounded-full">19</span>
        </button>
      </div>

      {/* Point System Banner */}
      <div className="bg-[#e8f5e9] text-[#2e7d32] px-4 py-2.5 rounded-lg border border-[#c8e6c9] text-xs font-bold flex items-center shadow-sm">
        <Medal className="h-4 w-4 mr-2" />
        Points: Critical resolved +25 • High +20 • Medium +15 • Low +10 • Within SLA bonus +10
      </div>

      {/* Leaderboard Cards */}
      <div className="space-y-4 pt-2">
        
        {/* Officer 1 - Highlight */}
        <div className="bg-[#fffde7] rounded-xl border border-[#fff59d] shadow-sm p-4 flex items-center justify-between relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#fbc02d]"></div>
          
          <div className="flex items-center gap-4 pl-3">
             <div className="bg-[#fbc02d] text-white w-10 h-10 rounded-full flex flex-col items-center justify-center font-bold text-shadow shadow-sm shadow-[#fbc02d]/50">
               <span className="text-[10px] leading-none mb-0.5">#</span>
               <span className="text-lg leading-none">1</span>
             </div>
             
             <div>
               <h3 className="text-lg font-bold text-[#111]">Kavita Rao (SI)</h3>
               <p className="text-xs font-medium text-[#777] mt-0.5">
                 BSES / TPDDL — Electricity Distribution • <span className="text-[#2e7d32] font-bold">☑ 1 resolved</span>
               </p>
               <div className="mt-2 inline-flex items-center gap-1 bg-[#fff8e1] px-2 py-1 rounded text-[#f57f17] text-[10px] font-bold shadow-sm border border-[#fff59d]">
                 <Star className="h-3 w-3 fill-current" /> 30 pts
               </div>
             </div>
          </div>
          
          <div className="flex flex-col items-center justify-center pr-4 text-center">
             <TreePine className="h-6 w-6 text-[#4caf50] mb-0.5" />
             <span className="text-[9px] font-bold text-[#888] tracking-widest uppercase">new officer</span>
          </div>
        </div>

        {/* Officer 2 */}
        <div className="bg-[#fcfcfc] rounded-xl border border-[#e8eaed] shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-4 pl-3">
             <div className="bg-[#cfd8dc] text-[#546e7a] w-10 h-10 rounded-full flex flex-col items-center justify-center font-bold shadow-inner border border-[#b0bec5]">
               <span className="text-[10px] leading-none mb-0.5">#</span>
               <span className="text-lg leading-none">2</span>
             </div>
             
             <div>
               <h3 className="text-lg font-bold text-[#333]">Dr. Seema Kapoor (MO)</h3>
               <p className="text-xs font-medium text-[#777] mt-0.5">
                 Health & Family Welfare — Delhi • <span className="text-[#2e7d32] font-bold">☑ 0 resolved</span>
               </p>
               <div className="mt-2 inline-flex items-center gap-1 bg-[#f5f5f5] px-2 py-1 rounded text-[#777] text-[10px] font-bold border border-[#e0e0e0]">
                 <Star className="h-3 w-3" /> 0 pts
               </div>
             </div>
          </div>
          
          <div className="flex flex-col items-center justify-center pr-4 text-center">
             <Leaf className="h-6 w-6 text-[#689f38] mb-0.5" />
             <span className="text-[9px] font-bold text-[#888] tracking-widest uppercase">field officer</span>
          </div>
        </div>

      </div>
    </div>
  );
}
