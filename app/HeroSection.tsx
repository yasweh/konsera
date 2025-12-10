import type { JSX } from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section
      className="w-full min-h-[700px] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col gap-6 max-w-[600px] z-10">
        <h1
          id="hero-heading"
          className="font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-4xl lg:text-6xl tracking-normal leading-tight"
        >
          Semua kebutuhan konsermu, terkumpul dalam satu aplikasi
        </h1>

        <p className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg lg:text-2xl tracking-[0] leading-[1.4]">
          Mulai dari informasi acara, pembelian tiket,
          <br />
          live crowd view, hingga cari teman konser Konsera bikin pengalaman
          konser jadi mudah dan berkesan!
        </p>
      </div>

      <div className="mt-8 lg:mt-0">
        <img
          className="w-full max-w-[600px] lg:max-w-[700px] h-auto object-contain"
          alt="Hero image showing Konsera app interface with concert features and mascot character"
          src="/hero.png"
        />
      </div>
    </section>
  );
};