import Sidebar from "@/components/layout/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-black text-white">
      <Sidebar />
      <div className="flex-1">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}