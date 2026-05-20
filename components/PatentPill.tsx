import React from "react";

interface PatentPillProps {
  label: string;
  value: string;
}

export default function PatentPill({ label, value }: PatentPillProps) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold rounded-none bg-transparent">
      <span className="text-xs tracking-widest uppercase text-muted font-medium">
        {label}
      </span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}
