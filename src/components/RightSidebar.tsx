import { Bell, User, Settings } from "lucide-react";

export default function RightSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-[#18181b] border-l border-[#2e026d] p-6 gap-8 neon-glow">
      <div>
        <h2 className="text-lg font-bold text-[#a21caf] mb-4">Quick Actions</h2>
        <button className="w-full mb-2 glitch-btn">Create Report</button>
        <button className="w-full glitch-btn">Add Widget</button>
      </div>
      <div>
        <h2 className="text-lg font-bold text-[#a21caf] mb-4">Notifications</h2>
        <div className="flex items-center gap-2 mb-2 text-[#f472b6]">
          <Bell size={18} /> New user signed up!
        </div>
        <div className="flex items-center gap-2 text-[#f472b6]">
          <Bell size={18} /> Data export completed.
        </div>
      </div>
      <div className="mt-auto">
        <h2 className="text-lg font-bold text-[#a21caf] mb-4">User</h2>
        <div className="flex items-center gap-3">
          <User size={32} className="text-[#f472b6]" />
          <div>
            <div className="font-bold">Jane Doe</div>
            <div className="text-xs text-[#a21caf]">Admin</div>
          </div>
          <Settings size={20} className="ml-auto cursor-pointer text-[#a21caf] hover:text-[#f472b6]" />
        </div>
      </div>
    </aside>
  );
}