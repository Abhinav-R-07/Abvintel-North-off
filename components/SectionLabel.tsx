import React from "react";

interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-6 md:mb-8">
      <div className="h-px w-6 bg-gold"></div>
      <span className="text-xs md:text-sm font-medium tracking-widest text-muted uppercase">
        {text}
      </span>
    </div>
  );
}
