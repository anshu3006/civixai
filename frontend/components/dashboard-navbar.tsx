"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Bell } from "lucide-react";

function FlagIcon() {
  return (
    <div className="flex flex-col h-[18px] w-[26px] rounded-[2px] overflow-hidden border border-white/20">
      <div className="flex-1 bg-[#FF9933]"></div>
      <div className="flex-1 bg-white flex items-center justify-center">
        <div className="h-2 w-2 rounded-full border border-[#000080] flex items-center justify-center">
          <div className="h-[2px] w-[2px] rounded-full bg-[#000080]"></div>
        </div>
      </div>
      <div className="flex-1 bg-[#138808]"></div>
    </div>
  );
}

export function DashboardNavbar() {
  return (
    <header className="w-full bg-[#1a237e] text-white z-50 shadow-md">
      {/* Top Accessibility Row */}
      <div className="w-full bg-[#11185b] border-b border-white/10 text-[11px] font-medium py-1.5 px-6 hidden sm:flex justify-end gap-5">
         <button className="hover:text-white/80 transition-colors">Skip to main content</button>
         <button className="hover:text-white/80 transition-colors">High Contrast</button>
         <div className="flex items-center gap-1.5">
           <span>Text Size:</span>
           <button className="px-1 hover:text-white/80 transition-colors font-bold">A-</button>
           <button className="px-1 hover:text-white/80 transition-colors font-bold">A</button>
           <button className="px-1 hover:text-white/80 transition-colors font-bold">A+</button>
         </div>
      </div>

      {/* Main Nav */}
      <div className="flex h-[72px] items-center justify-between px-6">
        
        {/* Left Section: Logos */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5">
            <FlagIcon />
            <div className="flex flex-col">
              <span className="text-[10px] leading-tight font-bold tracking-widest text-white/90">सत्यमेव जयते</span>
              <span className="text-xs leading-tight font-extrabold tracking-wide">GOVT. OF INDIA</span>
            </div>
          </div>
          
          <div className="h-10 w-px bg-white/20 mx-2 hidden sm:block"></div>

          <Link href="/" className="flex flex-col hover:opacity-90 transition-opacity">
            <span className="text-xl font-bold tracking-tight text-[#ffd54f]">JanSamadhan</span>
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-white/80 tracking-widest uppercase mt-0.5">
              <span>जन समाधान</span>
              <span>—</span>
              <span>CITIZEN PORTAL</span>
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold select-none">
          <Link href="/public-feed" className="hover:text-[#ffd54f] transition-colors">
            Public Feed
          </Link>
          <Link href="/hotspot-map" className="hover:text-[#ffd54f] transition-colors">
            Hotspot Map
          </Link>
          <Link href="/leaderboard" className="hover:text-[#ffd54f] transition-colors">
            Leaderboard
          </Link>
        </nav>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-1 text-sm font-semibold bg-[#2a3699] px-3 py-1.5 rounded border border-white/10 cursor-pointer hover:bg-[#3442a8] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-languages"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
            <span className="ml-1">EN English</span>
          </div>

          <div className="relative cursor-pointer hover:text-white/80 transition-colors p-2 bg-[#2a3699] rounded-md border border-white/10 hidden sm:block">
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute top-1 right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white shadow-sm ring-2 ring-[#1a237e]">
              8
            </span>
          </div>

          <Link href="/dashboard/file-complaint" className="hidden sm:flex text-sm font-bold bg-[#e65100] text-white px-4 py-2 rounded shadow hover:bg-[#ef6c00] transition-colors border border-transparent">
            + File Complaint
          </Link>

          <UserButton
             afterSignOutUrl="/"
             appearance={{
               elements: { avatarBox: "h-9 w-9 border-2 border-[#ffd54f] shadow-sm ml-2" },
             }}
          />
        </div>
      </div>
    </header>
  );
}
