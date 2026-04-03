import Image from "next/image";
import { Volume2 } from "lucide-react";

export default function MyComplaintsPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#111]">
            My Complaints
          </h1>
          <p className="text-sm font-medium text-[#777] mt-1">
            Track status of all your filed complaints
          </p>
        </div>
        <div className="bg-[#fff3e0] text-[#e65100] px-3 py-1.5 rounded-full font-bold text-sm tracking-wide shadow-sm border border-[#ffe0b2]">
          5 total
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-[#e8eaed] p-4 flex flex-wrap gap-4 items-center">
        <input 
          type="text" 
          placeholder="Search by title or ticket..." 
          className="flex-1 min-w-[200px] border border-[#d0d0d0] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]"
        />
        <select className="border border-[#d0d0d0] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-white text-[#333] min-w-[150px]">
          <option>All Statuses</option>
        </select>
        <select className="border border-[#d0d0d0] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-white text-[#333] min-w-[150px]">
          <option>All Categories</option>
        </select>
        <button className="text-[#555] border border-[#e0e0e0] px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#f5f5f5] transition-colors">
          Clear
        </button>
      </div>

      {/* Complaints List */}
      <div className="space-y-6">
        
        {/* Complaint 1 */}
        <div className="bg-white rounded-xl shadow-sm border-2 border-l-4 border-l-[#e65100] border-[#ffe0b2] p-5">
          <div className="flex justify-between items-start mb-3">
             <div className="flex flex-wrap items-center gap-2">
               <span className="bg-[#e8eaf6] text-[#283593] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-widest">
                 #CMP-d6ac475d955091ae
               </span>
               <span className="bg-[#e3f2fd] text-[#1976d2] text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase">
                 ASSIGNED
               </span>
               <span className="bg-[#ffebee] text-[#d32f2f] text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase">
                 CRITICAL
               </span>
               <span className="bg-[#f3e5f5] text-[#7b1fa2] text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase">
                 DUPLICATE
               </span>
             </div>
             <button className="text-[#888] border border-[#e0e0e0] p-1.5 rounded-full hover:bg-[#f5f5f5]"><Volume2 className="h-3 w-3" /></button>
          </div>
          
          <h3 className="text-lg font-bold text-[#111] mb-4">Urgent repair needed for broken bridge in area</h3>
          
          <div className="w-full h-[200px] bg-[#f0f0f0] rounded-lg overflow-hidden relative mb-4">
            <Image 
               src="https://images.unsplash.com/photo-1541888087405-c49b6d6541f5?q=80&w=1200&auto=format&fit=crop" 
               alt="Broken bridge"
               fill
               className="object-cover"
               unoptimized
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-[#888]">
            <span className="bg-[#e8eaf6] text-[#283593] px-2 py-0.5 rounded">Roads</span>
            <span>Reported by: Anonymous</span>
            <span>Location: Tumakuru</span>
            <span>Filed: 3 Apr 2026</span>
            <span>Dept: Bruhat Bengaluru Mahanagara Palike (BBMP)</span>
          </div>

          <div className="mt-4 pt-3 border-t border-[#f0f0f0] flex gap-4 text-xs font-semibold text-[#999]">
            <span>0 upvotes</span>
            <span>0 comments</span>
            <span>SLA: 4/4/2026</span>
          </div>
        </div>

        {/* Complaint 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-[#e8eaed] p-5 border-l-4 border-l-[#ffb300]">
          <div className="flex justify-between items-start mb-3">
             <div className="flex flex-wrap items-center gap-2">
               <span className="bg-[#e8eaf6] text-[#283593] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-widest">
                 #CMP-8cf5b6cf94cacfce
               </span>
               <span className="bg-[#e3f2fd] text-[#1976d2] text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase">
                 ASSIGNED
               </span>
               <span className="bg-[#fff8e1] text-[#f57f17] text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase border border-[#fff59d]">
                 MEDIUM
               </span>
               <span className="bg-[#f3e5f5] text-[#7b1fa2] text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase">
                 DUPLICATE
               </span>
             </div>
             <button className="text-[#888] border border-[#e0e0e0] p-1.5 rounded-full hover:bg-[#f5f5f5]"><Volume2 className="h-3 w-3" /></button>
          </div>
          
          <h3 className="text-lg font-bold text-[#111] mb-2">Repair broken street lights on my street</h3>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-[#888] mt-4">
            <span className="bg-[#e8eaf6] text-[#283593] px-2 py-0.5 rounded">Electricity</span>
            <span>Reported by: Anonymous</span>
            <span>Location: HSR Layout Sector 2</span>
            <span>Filed: 2 Apr 2026</span>
            <span>Dept: BESCOM</span>
          </div>

          <div className="mt-4 pt-3 border-t border-[#f0f0f0] flex gap-4 text-xs font-semibold text-[#999]">
            <span>12 upvotes</span>
            <span>2 comments</span>
            <span>SLA: 5/4/2026</span>
          </div>
        </div>

      </div>
    </div>
  );
}
