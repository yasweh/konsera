import type { JSX } from "react";

export const HeaderSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Fitur", href: "#fitur" },
    { label: "Mitra", href: "#mitra" },
    { label: "Unduh", href: "#unduh" },
    { label: "Testimoni", href: "#testimoni" },
  ];

  return (
    <header className="w-full h-[75px] bg-[#001560] flex items-center justify-between px-8 lg:px-28 sticky top-0 z-50">
      <div className="font-['Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-6 whitespace-nowrap">
        KONSERA
      </div>

      <nav className="flex gap-6" role="navigation" aria-label="Main navigation">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="font-['Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-6 whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};