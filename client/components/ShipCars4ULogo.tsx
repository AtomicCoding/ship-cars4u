export default function ShipCars4ULogo({ className = "", width = 200, height = 50 }: { className?: string; width?: number; height?: number }) {
  return (
    <div className={`flex items-center ${className}`} style={{ width, height }}>
      <svg 
        width={height} 
        height={height} 
        viewBox="0 0 50 50" 
        className="mr-3"
      >
        <rect x="5" y="15" width="30" height="20" rx="3" fill="#00A1EF" />
        <circle cx="15" cy="40" r="4" fill="#082A48" />
        <circle cx="35" cy="40" r="4" fill="#082A48" />
        <rect x="35" y="20" width="10" height="10" rx="2" fill="#082A48" />
        <path d="M10 15 L15 10 L35 10 L40 15" fill="#00A1EF" stroke="#082A48" strokeWidth="1"/>
      </svg>
      <div className="flex flex-col">
        <span className="font-bold text-xl tracking-tight text-gray-900" style={{ fontSize: `${height * 0.3}px` }}>
          ShipCars4U
        </span>
        <span className="text-xs text-gray-600 -mt-1" style={{ fontSize: `${height * 0.18}px` }}>
          AUTO TRANSPORT
        </span>
      </div>
    </div>
  );
}
