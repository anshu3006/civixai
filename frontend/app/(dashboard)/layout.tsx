import { DashboardNavbar } from "@/components/dashboard-navbar";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { UserSync } from "@/components/user-sync";
import { AdminRedirect } from "@/components/admin/admin-redirect";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#f5f6fa]">
      <UserSync />
      {/* Silently redirects admins to the admin panel */}
      <AdminRedirect />
      
      {/* Top Navbar spans full width */}
      <div className="flex-shrink-0">
        <DashboardNavbar />
      </div>

      {/* Main layout with Sidebar and content pane */}
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar />
        <main className="flex-1 overflow-y-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
