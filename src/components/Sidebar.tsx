import React from "react";
import { Home, BarChart2, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-20 bg-[#18181b] border-r border-[#2e026d] flex flex-col items-center py-8 gap-8 shadow-lg shadow-[#a21caf]/20">
      <SidebarIcon icon={<Home />} label="Home" />
      <SidebarIcon icon={<BarChart2 />} label="Analytics" />
      <SidebarIcon icon={<Settings />} label="Settings" />
    </aside>
  );
}

function SidebarIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer">
      <div className="p-3 rounded-lg bg-[#27272a] group-hover:bg-[#a21caf] transition shadow-md shadow-[#a21caf]/30">
        {icon}
      </div>
      <span className="mt-2 text-xs text-[#f472b6] opacity-0 group-hover:opacity-100 transition">{label}</span>
    </div>
  );
}