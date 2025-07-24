export default function ShipCars4ULogo({ className = "", width = 200, height = 50 }: { className?: string; width?: number; height?: number }) {
  return (
    <div className={`flex flex-col ${className}`} style={{ width, height }}>
      <span className="font-bold text-2xl tracking-tight text-shipcar-dark">
        ShipCars4U
      </span>
      <span className="text-sm text-gray-600 -mt-1">
        AUTO TRANSPORT
      </span>
    </div>
  );
}
