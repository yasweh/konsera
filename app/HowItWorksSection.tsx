interface FeatureCard {
  image: string;
  alt: string;
  description: string;
}

export const HowItWorksSection = () => {
  const topFeatures: FeatureCard[] = [
    {
      image: "/concert.png",
      alt: "Pick concert",
      description:
        "Temukan konser yang relevan lewat rekomendasi personal berdasarkan preferensi musik dan artis favoritmu.",
    },
    {
      image: "/buy-ticket.png",
      alt: "Buy ticket",
      description:
        "Beli tiket resmi dengan proses yang cepat, aman, dan terintegrasi dengan promotor.",
    },
    {
      image: "/match.png",
      alt: "Harmony match",
      description:
        "Temukan teman baru yang satu selera denganmu buat konser bareng melalui fitur Harmony Match",
    },
  ];

  const bottomFeatures: FeatureCard[] = [
    {
      image: "/crowd.png",
      alt: "Live crowd",
      description:
        "Navigasi konser dengan mudah menggunakan Live Crowd View dan venue map interaktif.",
    },
    {
      image: "/review.png",
      alt: "Concert review",
      description:
        "Bagikan pengalamanmu lewat Concert Review untuk bantu penonton lain dan komunitas musik.",
    },
  ];

  return (
    <section
      className="w-full"
      aria-labelledby="how-it-works-heading"
      id="fitur"
    >
      {/* Blue section with title and top half of images */}
      <div className="bg-[#001560] pt-12 pb-40">
        <h2
          id="how-it-works-heading"
          className="text-center font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-2xl lg:text-[32px] tracking-[0] leading-[1.4] mb-12 px-4"
        >
          Semua Tahapan Pengalaman Konser dalam Satu Aplikasi
        </h2>
      </div>

      {/* White section that overlaps blue section */}
      <div className="bg-white rounded-t-[90px] -mt-32 pt-8 pb-20 px-8 lg:px-20">
        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {topFeatures.map((card, index) => (
            <article key={index} className="flex flex-col items-center text-center">
              <img
                className="w-full max-w-[350px] h-auto object-contain mb-6"
                alt={card.alt}
                src={card.image}
              />
              <p className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#001560] text-lg lg:text-[22px] tracking-[0] leading-[1.4] max-w-[340px]">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
          {bottomFeatures.map((card, index) => (
            <article key={index} className="flex flex-col items-center text-center">
              <img
                className="w-full max-w-[400px] h-auto object-contain mb-6"
                alt={card.alt}
                src={card.image}
              />
              <p className="font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#001560] text-lg lg:text-[22px] tracking-[0] leading-[1.4] max-w-[340px]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
