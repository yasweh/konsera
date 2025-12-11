import type { JSX } from "react";


interface Testimonial {
  id: number;
  image: string;
  name: string;
  title: string;
  testimonialText: string;
  starsImage: string;
}

export const TestimonialsSection = (): JSX.Element => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      image: "/testi1.jpg",
      name: "Verbi Meliala",
      title: "Promotor Konser KPop",
      testimonialText: "Konsera bikin pengalaman nonton konser jadi lebih seru! Gampang cari info event, beli tiket, sampai ketemu teman baru yang satu selera musik.",
      starsImage: "/5-stars.png",
    },
    {
      id: 2,
      image: "/testi2.jpg",
      name: "Andi Pratama",
      title: "Penggemar Musik Rock",
      testimonialText: "Fitur Live Crowd View sangat membantu! Bisa tahu kondisi venue sebelum konser dimulai. Recommended banget buat concert-goers!",
      starsImage: "/5-stars.png",
    },
  ];

  return (
    <section className="w-full py-16 bg-[linear-gradient(96deg,rgba(216,224,255,1)_3%,rgba(255,255,255,1)_48%,rgba(216,224,255,1)_100%)]" id="testimoni">
      <h2 className="text-center font-['Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#001560] text-2xl lg:text-[32px] tracking-[0] leading-[1.4] mb-12">
        Kata Mereka
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-8">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="w-full max-w-[500px] bg-[#001560] rounded-[45px] p-8"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-32 h-32 shrink-0 bg-white rounded-[13px] overflow-hidden">
                <img
                  className="w-full h-fit object-cover"
                  alt={testimonial.name}
                  src={testimonial.image}
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-white text-xl">
                  {testimonial.name}
                </p>
                <div
                  className="w-[166px] h-6 bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.starsImage})` }}
                  role="img"
                  aria-label="5 star rating"
                />
                <p className="font-['Plus_Jakarta_Sans',Helvetica] font-semibold text-[#ffd603] text-base mt-4">
                  {testimonial.title}
                </p>
              </div>
            </div>

            <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-white text-lg leading-normal">
              {testimonial.testimonialText}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};