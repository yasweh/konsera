import { CallToActionSection } from "./CallToActionSection";
import { FooterSection } from "./FooterSection";
import { HeaderSection } from "./HeaderSection";
import { HeroSection } from "./HeroSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { TestimonialsSection } from "./TestimonialsSection";


const partnersData = [
  { id: 1, name: "JGTC", image: "/jgtc.webp" },
  { id: 2, name: "Black Pink", image: "/blackpink-seeklogo.png" },
  { id: 3, name: "The Weeknd", image: "/weeknd.png" },
  { id: 4, name: "Coldplay", image: "/coldplay-seeklogo.png" },
  { id: 5, name: "Coachella", image: "/coachella-seeklogo.png" },
  { id: 6, name: "BTS", image: "/bts-seeklogo.png" },
  { id: 7, name: "Tomorrowland", image: "/tomorrow-land-seeklogo.png" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[linear-gradient(62deg,rgba(0,21,96,1)_0%,rgba(67,96,197,1)_77%)]">
      <HeaderSection />
      <HeroSection />
      <HowItWorksSection />
      
      {/* Partners Section with Infinite Scroll */}
      <section className="w-full py-16 bg-[#4e68c6] overflow-hidden" id="mitra">
        <h2 className="text-center font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-2xl lg:text-[32px] tracking-[0] leading-[1.4] mb-12 px-4">
          Dipercaya oleh Band, Promotor, dan Event Musik Terkemuka
        </h2>

        {/* Infinite scrolling container */}
        <div className="relative">
          <div className="flex animate-scroll gap-8">
            {/* First set */}
            {partnersData.map((partner) => (
              <div 
                key={partner.id} 
                className="shrink-0 w-[280px] lg:w-[320px] h-[220px] lg:h-[260px] flex items-center justify-center bg-white rounded-[30px]"
              >
                <img
                  className="max-w-[180px] max-h-[180px] object-contain"
                  alt={partner.name}
                  src={partner.image}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partnersData.map((partner) => (
              <div 
                key={`dup-${partner.id}`} 
                className="shrink-0 w-[280px] lg:w-[320px] h-[220px] lg:h-[260px] flex items-center justify-center bg-white rounded-[30px]"
              >
                <img
                  className="max-w-[180px] max-h-[180px] object-contain"
                  alt={partner.name}
                  src={partner.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}
