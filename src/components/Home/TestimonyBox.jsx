import React from "react";

export default function TestimonyBox({ text, name, role }) {
  return (
    <div className="bg-nav bg-opacity-60 rounded-lg border border-white p-6 h-[310px] w-[500px]">
      <div className="text-white pb-2">
        <p className="text-white text-m">{name}</p>
        <p className="text-sm font-mono text-[#76798d] mb-4">{role}</p>
      </div>
      <div className="relative">
        <p className="tracking-tight text-white text-sm font-medium">&ldquo;{text}&rdquo;</p>
      </div>
    </div>
  );
}