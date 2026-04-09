import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Projetos() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white px-8 bg-feltro">
      {/* Fundo texturizado */}
      <div className="absolute inset-0 bg-[url('/textures/feltro-dark.jpg')] bg-cover bg-center opacity-40"></div>

      <div className="relative z-10 max-w-6xl w-full text-center space-y-12">
        <h2 className="text-4xl font-extrabold tracking-wide text-[#d4af37]">
          Projetos
        </h2>
        <p className="text-lg leading-relaxed text-gray-200 max-w-2xl mx-auto">
          Cada projeto é uma oportunidade de transformar ideias em experiências
          digitais memoráveis.
        </p>

        {/* Carrossel */}
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          loop
          className="rounded-xl overflow-hidden shadow-lg border-2 border-[#d4af37]"
        >
          <SwiperSlide>
            <img
              src="/projeto1.jpg"
              alt="Projeto 1"
              className="w-full h-80 object-cover"
            />
            <div className="p-6 bg-black bg-opacity-70">
              <h3 className="text-2xl font-semibold text-[#d4af37]">
                Projeto 1
              </h3>
              <p className="text-gray-200 mt-2">
                Breve descrição do impacto e sofisticação.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/projeto2.jpg"
              alt="Projeto 2"
              className="w-full h-80 object-cover"
            />
            <div className="p-6 bg-black bg-opacity-70">
              <h3 className="text-2xl font-semibold text-[#d4af37]">
                Projeto 2
              </h3>
              <p className="text-gray-200 mt-2">
                Breve descrição destacando inovação.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/projeto3.jpg"
              alt="Projeto 3"
              className="w-full h-80 object-cover"
            />
            <div className="p-6 bg-black bg-opacity-70">
              <h3 className="text-2xl font-semibold text-[#d4af37]">
                Projeto 3
              </h3>
              <p className="text-gray-200 mt-2">
                Breve descrição mostrando impacto estratégico.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
