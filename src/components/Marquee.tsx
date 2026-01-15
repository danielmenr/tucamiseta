import React from 'react';

interface MarqueeItem {
  value: string;
}

const Marquee: React.FC = () => {
  // En un futuro, estos datos vendrán de tu API (ej. useEffect + fetch)
  const items: MarqueeItem[] = [
    { value: "Made in Cúcuta York" },
    { value: "Calidad Superior // 1.1" },
    { value: "Envíos Nacionales" },
    { value: "sportswear transpirable" },
    { value: "100% algodón" },
    { value: "new drop // 🇨🇴 Selección Colombia 2026" },
  ];

  return (
    <div className="bg-neutral-950 py-8 overflow-hidden">
      <div className="flex animate-marquee w-max items-center">
        {[0, 1].map((groupIndex) => (
          <div key={groupIndex} className="flex items-center">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-12 pr-12">
                <span className={`${index == 0 ? "text-white/40" :  index % 2 === 0 ? "text-white/40" : "text-white/90"} text-xs uppercase tracking-[0.2em] whitespace-nowrap`}>
                  {item.value}
                </span>
                <div className="w-1.5 h-1.5 bg-brand rounded-full shrink-0"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;