"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FilePlus2,
  ListTodo,
  Rss,
  Map,
  Trophy,
  User,
} from "lucide-react";

const SIDEBAR_LINKS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/file-complaint", label: "+ File Complaint", icon: FilePlus2 },
  { href: "/dashboard/my-complaints", label: "My Complaints", icon: ListTodo },
  { href: "/public-feed", label: "Public Feed", icon: Rss },
  { href: "/hotspot-map", label: "Hotspot Map", icon: Map },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/dashboard/profile", label: "My Profile", icon: User },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { user } = useUser();
  const name = user?.fullName || "REDDY RAHUL REDDY";

  return (
    <aside className="w-[280px] bg-white border-r border-[#e0e0e0] flex flex-col h-full flex-shrink-0">
      {/* Profile Box */}
      <div className="p-5 border-b border-[#e0e0e0]">
        <div className="bg-[#f0f2f5] rounded-xl p-4 flex items-center gap-3 shadow-sm border border-[#e8eaed]">
          <div className="bg-[#283593] text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
            {name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#333] leading-tight truncate w-[160px]">
              {name.toUpperCase()}
            </span>
            <span className="text-xs font-medium text-[#777] mt-0.5">Citizen</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 flex-1 overflow-y-auto">
        <h3 className="text-[11px] font-bold text-[#888] tracking-widest pl-3 mb-4 uppercase">
          Navigation
        </h3>
        <nav className="flex flex-col gap-1.5">
          {SIDEBAR_LINKS.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-md text-[14px] font-semibold transition-all duration-200",
                  isActive
                    ? "bg-[#fff3e0] text-[#e65100] border-l-4 border-[#e65100]"
                    : "text-[#555] hover:bg-[#f9f9f9] hover:text-[#333] border-l-4 border-transparent"
                )}
              >
                <Icon className={cn("h-[18px] w-[18px]", isActive ? "text-[#e65100]" : "text-[#777]")} />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-5 border-t border-[#e0e0e0] mt-auto">
        <p className="text-[11px] text-[#999] font-medium">
          JanSamadhan v1.0 — <span className="font-hindi">जन समाधान</span>
        </p>
      </div>
    </aside>
  );
}
