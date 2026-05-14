"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/landing/header/Header";
import Footer from "@/components/landing/footer/Footer";
// import Sidebar from "@/components/layout/Sidebar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define paths that should show the Sidebar instead of Header/Footer
  // We check if the path starts with /dashboard, /drones, etc.
  const isInternalPage = pathname.startsWith("/dashboard") || 
                         pathname.startsWith("/drones") || 
                         pathname.startsWith("/alerts") ||
                         pathname.startsWith("/logs") ||
                         pathname.startsWith("/settings");

  if (isInternalPage) {
  return (
    <div className="flex"> {/* This 'flex' puts sidebar and content in one row */}
      {/* <Sidebar /> */}
      <main className="flex-1 min-h-screen bg-black">
        {children}
      </main>
    </div>
  );
}

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}