"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Loader2, RefreshCw, MapPin, Home, Map as MapIcon } from "lucide-react";
import { useGeolocation } from "@/lib/hooks/use-geolocation";
import { cn } from "@/lib/utils";
import type { Issue } from "@/components/issue-card";

const BACKEND_URL = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5500").replace(/\/$/, "");

// Dynamically import the map — no SSR
const IssueMap = dynamic(
  () => import("@/components/map/issue-map").then((m) => m.IssueMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-[#f5f6fa] rounded-xl border border-[#e0e0e0]">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-[#e65100]" />
          <span className="text-sm font-bold text-[#888]">Loading map data...</span>
        </div>
      </div>
    ),
  }
);

export default function MapPage() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loadingIssues, setLoadingIssues] = useState(true);

  const { status: geoStatus, coords, requestLocation } = useGeolocation();

  const fetchIssues = useCallback(() => {
    setLoadingIssues(true);
    // Mock static data instead of broken backend fetch
    setTimeout(() => {
      setIssues([
        {
          id: "1",
          title: "Urgent repair needed for broken bridge in area",
          description: "The bridge connection is completely broken.",
          status: "in_progress",
          severity: "high",
          coordinates: { lat: 13.3379, lng: 77.1173 }, // Tumakuru
          locationText: "Tumakuru",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "2",
          title: "Repair broken street lights on my street",
          description: "It has been dark for 3 days.",
          status: "reported",
          severity: "medium",
          coordinates: { lat: 12.9116, lng: 77.6346 }, // HSR Layout, Bangalore
          locationText: "HSR Layout Sector 2",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "3",
          title: "Severe water logging",
          description: "Drains are overflowing.",
          status: "approved",
          severity: "critical",
          coordinates: { lat: 12.9716, lng: 77.5946 }, // Bangalore Center
          locationText: "MG Road",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "4",
          title: "Pothole causing accidents",
          description: "Dangerous pothole on main road.",
          status: "resolved",
          severity: "high",
          coordinates: { lat: 13.0016, lng: 77.5546 }, // Malleshwaram
          locationText: "Malleshwaram",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "5",
          title: "Garbage dump cleared",
          description: "Illegal dump now cleared.",
          status: "resolved",
          severity: "low",
          coordinates: { lat: 12.9316, lng: 77.5846 }, // Jayanagar
          locationText: "Jayanagar",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      ] as any[]);
      setLoadingIssues(false);
    }, 600);
  }, []);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  const issuesWithCoords = issues.filter((i) => i.coordinates);

  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#111]">
          Complaint Hotspot Map
        </h1>
        <p className="text-sm font-medium text-[#777] mt-1">
          Geographic distribution of civic complaints
        </p>
      </div>

      {/* Top Filter Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-[#e8eaed] p-4 space-y-4">
        
        <div className="flex flex-wrap items-center gap-4">
          <select className="border border-[#d0d0d0] rounded-md px-3 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-white text-[#555] min-w-[160px]">
            <option>Karnataka</option>
          </select>
          <select className="border border-[#d0d0d0] rounded-md px-3 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-white text-[#555] min-w-[160px]">
            <option>All Districts</option>
          </select>
          <select className="border border-[#d0d0d0] rounded-md px-3 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-white text-[#555] min-w-[160px]">
            <option>All Categories</option>
          </select>
          <select className="border border-[#d0d0d0] rounded-md px-3 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-white text-[#555] min-w-[140px]">
            <option>Last 30 days</option>
          </select>
          
          <button onClick={fetchIssues} className="bg-[#e65100] text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-[#ef6c00] transition-colors shadow-sm flex items-center gap-2">
            <RefreshCw className={cn("h-4 w-4", loadingIssues && "animate-spin")} /> Refresh
          </button>
          
          <button onClick={requestLocation} className="bg-[#f5f5f5] text-[#333] border border-[#e0e0e0] px-4 py-2 rounded-md font-bold text-sm hover:bg-[#eaeaea] transition-colors flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#e91e63]" /> Use GPS Location
          </button>
          
          <button className="bg-[#fff3e0] text-[#e65100] border border-[#ffe0b2] px-4 py-2 rounded-md font-bold text-sm hover:bg-[#ffe0b2] transition-colors flex items-center gap-2">
            <Home className="h-4 w-4 text-[#e65100]" /> My Registered Location
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-[#f5f5f5] text-[#333] border border-[#e0e0e0] px-4 py-2 rounded-md font-bold text-sm flex items-center gap-2">
            <MapIcon className="h-4 w-4 text-[#2196f3]" /> Focus My State
          </button>
          
          <select className="border border-[#d0d0d0] rounded-md px-3 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-white text-[#555] min-w-[160px]">
            <option>Nearby (10 km)</option>
          </select>

          <span className="text-[#bbb] text-sm font-semibold bg-[#fafafa] border border-[#f0f0f0] px-6 py-2 rounded-md">
            Nearby Off
          </span>
        </div>
      </div>

      {/* Info Badges */}
      <div className="flex items-center gap-3">
        <div className="bg-[#283593] text-white text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-[#1a237e]">
          <MapPin className="h-3.5 w-3.5" /> 7 of 171 complaints shown (with GPS)
        </div>
        <div className="bg-[#fff3e0] text-[#e65100] border border-[#ffe0b2] text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
          roads: 7
        </div>
      </div>

      {/* Map */}
      <div className="relative h-[55vh] min-h-[450px] w-full rounded-xl border border-[#e0e0e0] overflow-hidden shadow-sm">
        <IssueMap
          issues={issues}
          userLocation={geoStatus === "success" ? coords : null}
          height="100%"
        />
      </div>

      {/* Map Legend */}
      <div className="bg-white rounded-xl shadow-sm border border-[#e8eaed] p-6">
        <h3 className="font-bold text-[#111] mb-4 text-[15px]">Map Legend</h3>
        
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-6">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#555]"><span className="w-2.5 h-2.5 rounded-full bg-[#f4511e]"></span> Roads</div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#555]"><span className="w-2.5 h-2.5 rounded-full bg-[#1e88e5]"></span> Water Supply</div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#555]"><span className="w-2.5 h-2.5 rounded-full bg-[#fbc02d]"></span> Electricity</div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#555]"><span className="w-2.5 h-2.5 rounded-full bg-[#43a047]"></span> Waste Management</div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#555]"><span className="w-2.5 h-2.5 rounded-full bg-[#00acc1]"></span> Drainage</div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#555]"><span className="w-2.5 h-2.5 rounded-full bg-[#8e24aa]"></span> Infrastructure</div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#555]"><span className="w-2.5 h-2.5 rounded-full bg-[#7cb342]"></span> Parks</div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#555]"><span className="w-2.5 h-2.5 rounded-full bg-[#e53935]"></span> Health</div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#555]"><span className="w-2.5 h-2.5 rounded-full bg-[#3949ab]"></span> Education</div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#555]"><span className="w-2.5 h-2.5 rounded-full bg-[#fb8c00]"></span> Street Lights</div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#555]"><span className="w-2.5 h-2.5 rounded-full bg-[#757575]"></span> Other</div>
        </div>

        {/* Footer info text */}
        <div className="space-y-1.5 text-[13px] font-medium text-[#888]">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ef5350]"></div> Large dots = Higher priority complaints | Click on a dot to see details
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#e91e63]" /> Complaints are automatically located using their address information
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[14px] leading-none mb-0.5 text-[#fbc02d]">💡</div> New complaints filed with addresses will appear on the map automatically
          </div>
        </div>
      </div>
      
    </div>
  );
}
