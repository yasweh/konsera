import type { JSX } from "react";
import Image from "next/image";

export const HeaderSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Fitur", href: "#fitur" },
    { label: "Mitra", href: "#mitra" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Unduh", href: "#unduh" },
  ];

  return (
    <header className="w-full h-[75px] bg-[#001560] flex items-center justify-between px-8 lg:px-28 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo konsera typescript.png"
          alt="Konsera Logo"
          width={100}
          height={35}
          priority
        />
      </div>

      <nav className="flex gap-6" role="navigation" aria-label="Main navigation">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-white text-sm tracking-[0] leading-6 whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
