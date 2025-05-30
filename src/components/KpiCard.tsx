import React from "react";

export default function KpiCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-[#27272a] border border-[#a21caf] rounded-xl p-6 shadow-lg shadow-[#a21caf]/20 neon-glow transition hover:scale-105 hover:shadow-[#f472b6]/40">
      <h3 className="text-lg font-bold text-[#f472b6] mb-2">{title}</h3>
      <p className="text-3xl font-extrabold text-[#a21caf]">{content}</p>
    </div>
  );
}