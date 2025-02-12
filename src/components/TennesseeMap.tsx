import React from 'react';
import { useNavigate } from 'react-router-dom';

export function TennesseeMap() {
  const navigate = useNavigate();

  const cities = [
    {
      name: 'Hendersonville',
      path: '/research-library/hendersonville',
      coordinates: { x: 200, y: 100 },
    },
    {
      name: 'White House',
      path: '/research-library/white-house',
      coordinates: { x: 180, y: 60 },
    },
    {
      name: 'Gallatin',
      path: '/research-library/gallatin',
      coordinates: { x: 220, y: 80 },
    },
  ];

  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-2xl font-bold mb-2">Market Reports by Location</h2>
      <p className="text-gray-600 mb-4">Click on a city to view detailed market reports</p>
      <div className="relative bg-blue-50 rounded-lg border border-gray-200 p-4">
        <svg
          viewBox="0 0 400 200"
          className="w-full h-auto"
        >
          {/* Base map shape - simplified Tennessee outline */}
          <path
            d="M20,100 L380,100 L380,150 L20,150 Z"
            fill="#e5e7eb"
            stroke="#9ca3af"
            strokeWidth="1"
            className="opacity-50"
          />
          
          {/* City markers */}
          {cities.map((city) => (
            <g
              key={city.name}
              transform={`translate(${city.coordinates.x},${city.coordinates.y})`}
              onClick={() => navigate(city.path)}
              className="cursor-pointer hover:opacity-75 transition-opacity"
            >
              <circle
                r="8"
                fill="#2563eb"
                className="animate-pulse"
              />
              <circle
                r="4"
                fill="#ffffff"
              />
              <text
                x="12"
                y="4"
                fontSize="12"
                fill="#1f2937"
                className="font-medium"
              >
                {city.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
