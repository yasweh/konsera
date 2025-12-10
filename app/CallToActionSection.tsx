import React from "react";
import type { JSX } from "react";


export const CallToActionSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full h-[916px]"
      aria-labelledby="cta-heading"
      id="unduh"
    >
      <img
        className="absolute top-[285px] left-1/2 w-[480px] h-[631px] object-cover"
        alt="Konsera mobile app interface showing concert listings"
        src="/cta1.png"
      />

      <img
        className="absolute top-[420px] left-[calc(50%+286px)] w-[432px] h-[496px] object-cover"
        alt="Konsera mobile app interface showing event details"
        src="/cta2.png"
      />

      {/* Text container - vertically centered */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[10%] flex flex-col gap-6">
        <h2
          id="cta-heading"
          className="w-[400px] font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-[32px] tracking-tight leading-[1.1]"
        >
          Siap buat momen<br />konser terbaikmu?
        </h2>

        <p className="w-[400px] font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-[32px] tracking-tight leading-[1.1]">
          Download aplikasi<br />Konsera sekarang!
        </p>

        <div className="flex gap-4 mt-2">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Konsera on the App Store"
            className="w-[189px] h-16"
          >
            <img
              className="w-full h-full object-contain"
              alt="Download on the App Store"
              src="/appstore.png"
            />
          </a>

          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Konsera on Google Play"
            className="w-[198px] h-[60px]"
          >
            <img
              className="w-full h-full object-contain"
              alt="Get it on Google Play"
              src="/gplay.png"
            />
          </a>
        </div>
      </div>
    </section>
  );
};