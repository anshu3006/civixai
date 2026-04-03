import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import { Navbar } from "@/components/navbar";
import { UserSync } from "@/components/user-sync";
import { RoleRedirect } from "@/components/role-redirect";

function IndianFlag() {
  return (
    <div className="flex flex-col h-[20px] w-[30px] rounded-[2px] overflow-hidden border border-white/20">
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

function Hero() {
  return (
    <section className="relative flex flex-col items-center px-6 pt-28 pb-32 text-center z-10 w-full flex-1 justify-center">
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="mb-4">
          <IndianFlag />
        </div>
        <h1 className="text-4xl font-black tracking-tight text-[#ffd54f] sm:text-5xl md:text-5xl drop-shadow-md">
          JanSamadhan
        </h1>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-5xl drop-shadow-md">
          Smart Grievance Portal for Citizens
        </h2>
      </div>
      <p className="mt-6 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl font-medium leading-relaxed drop-shadow">
        Report civic issues, track resolutions, and hold local government
        accountable. From Gram Panchayat to State — every complaint
        reaches the right authority.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <SignUpButton mode="modal">
          <button className="rounded-md bg-[#e65100] px-8 py-3.5 text-base font-bold text-white shadow-md hover:bg-[#ef6c00] transition-colors">
            Register as Citizen
          </button>
        </SignUpButton>
        <Link
          href="/public-feed"
          className="rounded-md border-2 border-white/60 px-8 py-3 text-base font-bold text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          View Public Feed
        </Link>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="bg-[#e65100] w-full py-8 mt-auto relative z-10 border-t border-[#ff7043]/30 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        <div className="flex flex-col items-center justify-center space-y-1">
          <span className="text-4xl font-black drop-shadow-sm text-white">50+</span>
          <span className="text-sm font-medium text-white/90 tracking-wide">Districts Covered</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-1">
          <span className="text-4xl font-black drop-shadow-sm text-white">12</span>
          <span className="text-sm font-medium text-white/90 tracking-wide">Govt Departments</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-1">
          <span className="text-4xl font-black drop-shadow-sm text-white">7 Levels</span>
          <span className="text-sm font-medium text-white/90 tracking-wide">Location Hierarchy</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-1">
          <span className="text-4xl font-black drop-shadow-sm text-white">14</span>
          <span className="text-sm font-medium text-white/90 tracking-wide">Complaint Categories</span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a237e] relative flex flex-col font-sans selection:bg-[#ffd54f] selection:text-[#1a237e]">
      {/* Background pattern (plus signs) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 19v-4h2v4h4v2h-4v4h-2v-4h-4v-2h4z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "40px"
        }}
      ></div>
      
      <UserSync />

      {/* Signed-in users are redirected to their dashboard immediately */}
      <SignedIn>
        <RoleRedirect />
      </SignedIn>

      {/* Only show the landing page to visitors who are NOT signed in */}
      <SignedOut>
        <Navbar />
        <main className="flex-1 flex flex-col items-center w-full min-h-[calc(100vh-130px)]">
          <Hero />
          <StatsBar />
        </main>
      </SignedOut>
    </div>
  );
}
