"use client";

import { useUser } from "@clerk/nextjs";
import { Badge } from "lucide-react";
import Image from "next/image";
import {
  FileText,
  Clock,
  RefreshCcw,
  CheckCircle2,
  ChevronRight,
  Volume2
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

// Mock Data for Charts
const categoryData = [
  { name: "roads", value: 38 },
  { name: "water supply", value: 20 },
  { name: "law enforcement", value: 20 },
  { name: "other", value: 14 },
  { name: "electricity", value: 18 },
];

const trendData = [
  { month: "Feb", value: 30 },
  { month: "Mar", value: 130 },
  { month: "Apr", value: 25 },
];

const statusData = [
  { name: "Pending", value: 3 },
  { name: "Active", value: 1 },
  { name: "Resolved", value: 16 },
];

const COLORS = ["#ff9800", "#1976d2", "#4caf50"]; // Pending(orange), Active(blue), Resolved(green)

export default function DashboardPage() {
  const { user } = useUser();
  const userName = (user?.firstName || "REDDY").toUpperCase();

  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Header Info */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#111]">
            Welcome, {userName}
          </h1>
          <p className="text-sm font-medium text-[#777] mt-1">
            Your civic engagement dashboard
          </p>
        </div>
        <button className="bg-[#e65100] text-white px-5 py-2.5 rounded-lg shadow-sm font-bold text-sm hover:bg-[#ef6c00] transition-colors">
          + File New Complaint
        </button>
      </div>

      {/* Badge Level Card */}
      <div className="relative bg-[#283593] rounded-2xl p-6 shadow-md overflow-hidden flex items-center justify-between text-white border border-[#1a237e]/20">
        <div className="absolute right-0 top-0 w-[400px] h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
        
        <div className="flex items-center gap-6 z-10 w-full max-w-4xl">
          <div className="bg-[#e65100] p-4 rounded-xl shadow-inner">
            <Badge className="h-8 w-8 text-white fill-current" />
          </div>
          <div className="flex-1">
            <h3 className="text-xs font-bold text-white/70 uppercase tracking-widest mb-1">
              Your Badge Level
            </h3>
            <div className="text-2xl font-black mb-2">Contributor</div>
            <div className="flex items-center gap-4 w-full">
              <span className="text-xs font-medium text-white/80 shrink-0">Progress to Active Citizen</span>
              <div className="flex-1 h-2 bg-[#1a237e] rounded-full overflow-hidden">
                <div className="h-full bg-[#ffd54f] rounded-full w-[48%] shadow-[0_0_10px_rgba(255,213,79,0.5)]"></div>
              </div>
              <span className="text-xs font-bold shrink-0">73 / 150 pts</span>
            </div>
          </div>
        </div>

        <div className="z-10 ml-8 shrink-0 bg-white/10 rounded-xl px-8 py-5 border border-white/20 text-center shadow-inner backdrop-blur-sm">
          <div className="text-3xl font-black text-[#ffd54f] leading-none mb-1 shadow-sm">73</div>
          <div className="text-xs font-bold text-white/80">Total Points</div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e8eaed] flex items-center gap-4">
          <div className="bg-[#e8eaf6] p-4 rounded-xl text-[#3f51b5]">
            <FileText className="h-7 w-7" />
          </div>
          <div>
            <div className="text-2xl font-black text-[#283593] leading-none">171</div>
            <div className="text-[10px] font-bold text-[#888] tracking-widest uppercase mt-1">Total Filed</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e8eaed] flex items-center gap-4">
          <div className="bg-[#fff3e0] p-4 rounded-xl text-[#ff9800]">
            <Clock className="h-7 w-7" />
          </div>
          <div>
            <div className="text-2xl font-black text-[#e65100] leading-none">3</div>
            <div className="text-[10px] font-bold text-[#888] tracking-widest uppercase mt-1">Pending</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e8eaed] flex items-center gap-4">
          <div className="bg-[#e3f2fd] p-4 rounded-xl text-[#2196f3]">
            <RefreshCcw className="h-7 w-7" />
          </div>
          <div>
            <div className="text-2xl font-black text-[#1976d2] leading-none">1</div>
            <div className="text-[10px] font-bold text-[#888] tracking-widest uppercase mt-1">In Progress</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e8eaed] flex items-center gap-4">
          <div className="bg-[#e8f5e9] p-4 rounded-xl text-[#4caf50]">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <div>
            <div className="text-2xl font-black text-[#2e7d32] leading-none">16</div>
            <div className="text-[10px] font-bold text-[#888] tracking-widest uppercase mt-1">Resolved</div>
          </div>
        </div>
      </div>

      {/* Community Overview */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-[15px] font-extrabold text-[#333]">Community Overview</h2>
          <span className="text-[11px] font-medium text-[#999] bg-[#e8eaed] px-2 py-0.5 rounded-full">Current city stats</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Status Breakdown (Doughnut) */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e8eaed]">
            <h3 className="text-xs font-bold text-[#555] mb-4">Status Breakdown</h3>
            <div className="h-[200px] w-full flex items-center justify-center relative">
               <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              {/* Fake legend overlay */}
              <div className="absolute right-0 bottom-4 flex flex-col gap-1.5 text-[10px] font-semibold text-[#666]">
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-[#ff9800]"></div> Pending</div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-[#1976d2]"></div> Active</div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-[#4caf50]"></div> Resolved</div>
              </div>
            </div>
          </div>

          {/* Top Categories */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e8eaed]">
            <h3 className="text-xs font-bold text-[#555] mb-4">Top Categories</h3>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#888" }} axisLine={false} tickLine={false} angle={-25} textAnchor="end" />
                  <YAxis tick={{ fontSize: 10, fill: "#888" }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: "#f5f5f5" }} contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }} />
                  <Bar dataKey="value" fill="#5c6bc0" radius={[4, 4, 0, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Trend */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e8eaed]">
            <h3 className="text-xs font-bold text-[#555] mb-4">Monthly Trend</h3>
            <div className="h-[200px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                   <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#888" }} axisLine={false} tickLine={false} />
                   <YAxis tick={{ fontSize: 10, fill: "#888" }} axisLine={false} tickLine={false} />
                   <Tooltip contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }} />
                   <Line type="monotone" dataKey="value" stroke="#3f51b5" strokeWidth={3} dot={{ r: 4, fill: "#fff", stroke: "#3f51b5", strokeWidth: 2 }} activeDot={{ r: 6 }} />
                 </LineChart>
               </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#e65100] rounded-xl p-5 shadow-sm text-white cursor-pointer hover:-translate-y-0.5 transition-transform">
          <h3 className="font-bold text-lg leading-tight mb-1">File Complaint</h3>
          <p className="text-xs text-white/80 font-medium">Report a new civic issue</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e8eaed] cursor-pointer hover:-translate-y-0.5 transition-transform hover:border-gray-300">
          <h3 className="font-bold text-lg leading-tight text-[#333] mb-1">Track Complaints</h3>
          <p className="text-xs text-[#777] font-medium">View status of your complaints</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e8eaed] cursor-pointer hover:-translate-y-0.5 transition-transform hover:border-gray-300">
          <h3 className="font-bold text-lg leading-tight text-[#333] mb-1">View Hotspot Map</h3>
          <p className="text-xs text-[#777] font-medium">See issues in your area</p>
        </div>
      </div>

      {/* Recent Complaints */}
      <div className="bg-white rounded-xl shadow-sm border border-[#e8eaed] overflow-hidden">
        <div className="p-5 border-b border-[#e8eaed] flex items-center justify-between">
          <h3 className="font-bold text-[15px] text-[#333]">Recent Complaints</h3>
          <button className="text-sm font-bold text-[#e65100] hover:text-[#ef6c00] transition-colors flex items-center gap-1">
            View All <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        
        <div className="p-6 border-l-4 border-[#e65100] bg-white m-4 rounded-r-xl shadow-sm border-t border-b border-r border-[#e8eaed]">
          {/* Card Top */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
             <div className="flex flex-wrap items-center gap-2">
               <span className="bg-[#e8eaf6] text-[#283593] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-widest">
                 #CMP-d6ac475d955091ae
               </span>
               <span className="bg-[#e3f2fd] text-[#1976d2] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase">
                 Assigned
               </span>
               <span className="bg-[#ffebee] text-[#d32f2f] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase">
                 Critical
               </span>
               <span className="bg-[#f3e5f5] text-[#7b1fa2] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase">
                 Duplicate
               </span>
             </div>
             
             <button className="p-1.5 text-[#888] hover:bg-[#f5f5f5] rounded-md transition-colors">
               <Volume2 className="h-4 w-4" />
             </button>
          </div>

          <h4 className="text-lg font-bold text-[#111] mb-4">
            Urgent repair needed for broken bridge in area
          </h4>

          {/* Placeholder Image container mimicking the bridge */}
          <div className="relative w-full h-[260px] rounded-xl overflow-hidden bg-[#e0e0e0]">
             <Image 
                src="https://images.unsplash.com/photo-1541888087405-c49b6d6541f5?q=80&w=1200&auto=format&fit=crop" 
                alt="Broken bridge"
                fill
                className="object-cover"
                unoptimized
             />
          </div>
        </div>
      </div>
      
    </div>
  );
}
