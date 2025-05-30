import React from "react";

export default function DashboardChart() {
  // Simple SVG bar chart for demo
  return (
    <div className="bg-[#18181b] border border-[#a21caf] rounded-xl p-6 shadow-lg shadow-[#a21caf]/20 neon-glow">
      <h3 className="text-lg font-bold text-[#f472b6] mb-4">User Growth</h3>
      <svg width="100%" height="80" viewBox="0 0 200 80">
        <rect x="10" y="40" width="20" height="30" fill="#a21caf" className="animate-pulse" />
        <rect x="40" y="20" width="20" height="50" fill="#f472b6" className="animate-pulse" />
        <rect x="70" y="10" width="20" height="60" fill="#a21caf" className="animate-pulse" />
        <rect x="100" y="30" width="20" height="40" fill="#f472b6" className="animate-pulse" />
        <rect x="130" y="25" width="20" height="45" fill="#a21caf" className="animate-pulse" />
      </svg>
    </div>
  );
}