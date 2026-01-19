"use client";

import { useState } from "react";

interface FlipCardProps {
  testimonial: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  companyName: string;
  role: string; 
  personName: string;
  personImage: string;
  backgroundColor: string;
}

export function FlipCard({
  testimonial,
  stats,
  companyName,
  role,
  personName,
  personImage,
  backgroundColor,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-96 cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 transform-gpu"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div>
            <p className="text-lg leading-relaxed text-gray-800 mb-8">
              {testimonial}
            </p>
            <div className="flex gap-8">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer with company and role */}
          <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div>
              <p className="font-semibold text-gray-900">{companyName}</p>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full ${backgroundColor} rounded-lg shadow-lg p-8 flex flex-col justify-between text-white`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex-1 flex items-center justify-center relative mb-6">
            <img
              src={personImage || "/placeholder.svg"}
              alt={personName}
              width={200}
              height={200}
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">{personName}</h3>
            <p className="text-white/90">{companyName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
