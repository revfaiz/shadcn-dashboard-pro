import React from "react";

export default function GlitchButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative px-6 py-2 font-bold text-[#f472b6] bg-[#18181b] border border-[#a21caf] rounded-lg overflow-hidden glitch-btn">
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-[#a21caf]/20 animate-glitch" />
    </button>
  );
}