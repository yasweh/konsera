import { JSX } from "react";

export const FooterSection = (): JSX.Element => {
  const navigationLinks = [
    { label: "Fitur", href: "#fitur" },
    { label: "Mitra", href: "#mitra" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Unduh", href: "#unduh" },
  ];

  const supportLinks = [
    { label: "Customer Support", href: "#customer-support" },
    { label: "Terms & Conditions", href: "#terms-conditions" },
    { label: "Privacy Policy", href: "#privacy-policy" },
  ];

  const socialIcons = [
    { src: "/ig.png", alt: "Instagram", href: "#instagram" },
    { src: "/fb.png", alt: "Facebook", href: "#facebook" },
    { src: "/yt.png", alt: "YouTube", href: "#youtube" },
    { src: "/x.png", alt: "X (Twitter)", href: "#twitter" },
  ];

  return (
    <footer className="w-full bg-[#001560] py-12 px-8 lg:px-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-white text-3xl">
            KONSERA
          </h2>
          <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-white text-sm leading-5">
            Nikmati konser seleramu, gayamu!
          </p>
          <a
            href="#contact"
            className="w-fit px-5 py-2 flex items-center justify-center bg-white rounded-full shadow-sm"
          >
            <span className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#4e68c6] text-xs whitespace-nowrap">
              Ada pertanyaan? Hubungi kami
            </span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4" aria-label="Footer navigation">
          <h3 className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg">
            Navigasi
          </h3>
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-white text-sm leading-5 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Support */}
        <nav className="flex flex-col gap-4" aria-label="Support links">
          <h3 className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg">
            Support
          </h3>
          {supportLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-white text-sm leading-5 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="font-['Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg">
            Langganan
          </h3>
          <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-white text-sm leading-6">
            Dapatkan pemberitahuan
            <br />
            dan kabar terbaru
          </p>
          <button
            className="w-fit px-6 py-2 rounded-full border border-[#435fc5] hover:bg-[#435fc5] transition-colors flex items-center gap-2"
            aria-label="Subscribe to newsletter"
          >
            <span className="font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-sm">
              Subscribe
            </span>
            <svg className="w-4 h-3" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6H14M14 6L9 1M14 6L9 11" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-white text-sm">
          © Konsera 2025, All rights reserved.
        </p>

        <div className="flex gap-4" role="list" aria-label="Social media links">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              className="w-5 h-5 flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label={icon.alt}
            >
              <img className="w-full h-full" alt={icon.alt} src={icon.src} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};