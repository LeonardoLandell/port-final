"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [activeMessage, setActiveMessage] = useState<"left" | "right">("left");

  useEffect(() => {
    // scroll suave
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // brilho pulsante na linha
    gsap.to(".linha", {
      boxShadow: "0 0 20px #d4af37",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });

    // parallax aplicado ao fundo texturizado
    gsap.to(".bg-parallax", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",
        scrub: true,
      },
    });

    // listener para posição do mouse
    const handleMouseMove = (e: MouseEvent) => {
      const middle = window.innerWidth / 2;

      if (e.clientX > middle && activeMessage !== "right") {
        gsap.to(".linha", {
          x: 60,
          duration: 0.7,
          ease: "power2.inOut",
          onComplete: () => {
            setActiveMessage("right");
            gsap.to(".linha", { x: 0, duration: 0.7, ease: "power2.inOut" });
          },
        });
      } else if (e.clientX < middle && activeMessage !== "left") {
        gsap.to(".linha", {
          x: -60,
          duration: 0.7,
          ease: "power2.inOut",
          onComplete: () => {
            setActiveMessage("left");
            gsap.to(".linha", { x: 0, duration: 0.7, ease: "power2.inOut" });
          },
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [activeMessage]);

  return (
    <main className="bg-black text-white">
      {/* Hero Section com textura + linha animada */}
      <section className="min-h-screen flex flex-col items-center justify-center relative bg-feltro">
        {/* Linha dourada central */}
        <div className="relative h-[400px] w-[3px] bg-[#d4af37] linha origin-center">
          <AnimatePresence>
            {activeMessage === "left" && (
              <motion.div
                key="left"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute left-[-420px] top-1/2 -translate-y-1/2 text-white text-xl font-medium text-right"
              >
                Bem vindos! <br />
                Este é o portfólio interativo da{" "}
                <span className="font-bold">Landell.Studio</span>
              </motion.div>
            )}

            {activeMessage === "right" && (
              <motion.div
                key="right"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute right-[-420px] top-1/2 -translate-y-1/2 text-white text-xl font-medium text-left"
              >
                Sou <span className="font-bold">Leonardo Landell</span>, <br />
                espero que apreciem a experiência
                <div className="mt-4">
                  <button
                    onClick={() =>
                      document.querySelector(".section2")?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                    className="px-6 py-2 bg-[#d4af37] text-black font-semibold rounded-md hover:bg-yellow-500 transition"
                  >
                    Venha nos conhecer
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Logo chamativa abaixo da linha */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-0.5 flex justify-center"
        >
          <img
            src="/logo.png"
            alt="Logo Landell Studio"
            className="h-100 w-auto max-w-[280px]"
          />
        </motion.div>
      </section>

      {/* Seção 2 - Sobre mim e empresa */}
      <section className="section2 relative min-h-screen flex items-center justify-center text-white px-8">
        <div className="absolute inset-0 bg-[url('/textures/feltro-dark.jpg')] bg-cover bg-center opacity-40 bg-parallax"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start gap-20 max-w-6xl w-full">
          {/* Lateral esquerda */}
          <div className="flex flex-col items-center gap-12 flex-shrink-0">
            <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-[#d4af37] shadow-lg">
              <img
                src="/foto perf.png"
                alt="Foto Leonardo Landell"
                className="w-full h-full object-cover"
              />
            </div>
            <img
              src="/logo.png"
              alt="Logo Landell Studio"
              className="h-90 w-auto"
            />
          </div>

          {/* Textos centrais */}
          <div className="flex-1 text-center md:text-left space-y-14">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold tracking-wide text-[#d4af37]">
                Quem sou eu
              </h2>
              <p className="text-xl leading-relaxed text-gray-100 max-w-2xl mx-auto md:mx-0">
                Sou Leonardo Landell, um criador que transforma ideias em
                experiências digitais capazes de marcar presença e gerar
                autoridade. Minha essência é unir
                <span className="font-semibold text-[#d4af37]">
                  {" "}
                  visão estética refinada{" "}
                </span>
                com{" "}
                <span className="font-semibold text-[#d4af37]">
                  execução impecável
                </span>
                , entregando projetos que não apenas comunicam, mas conquistam.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold tracking-wide text-[#d4af37]">
                Landell.Studio
              </h3>
              <p className="text-xl leading-relaxed text-gray-100 max-w-2xl mx-auto md:mx-0">
                Nosso{" "}
                <span className="font-semibold text-[#d4af37]">propósito</span>{" "}
                é elevar marcas através de design premium e tecnologia de ponta.
                O <span className="font-semibold text-[#d4af37]">sonho</span>é
                ser referência em inovação criativa, e nossas{" "}
                <span className="font-semibold text-[#d4af37]">conquistas</span>
                provam que somos mais que um estúdio: somos parceiros
                estratégicos na construção de legados digitais que inspiram e
                transformam.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Seção 3 - Projetos com carrossel */}
      <section
        id="projetos"
        className="relative min-h-screen flex items-center justify-center text-white px-8"
      >
        <div className="absolute inset-0 bg-[url('/textures/feltro-dark.jpg')] bg-cover bg-center opacity-40"></div>

        <div className="relative z-10 max-w-6xl w-full text-center space-y-12">
          <h2 className="text-4xl font-extrabold tracking-wide text-[#d4af37]">
            Projetos
          </h2>
          <p className="text-lg leading-relaxed text-gray-200 max-w-2xl mx-auto">
            Cada projeto é uma oportunidade de transformar ideias em
            experiências digitais memoráveis.
          </p>

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
                src="/nox.png"
                alt="Dois dj's to cando em uma balada"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-black bg-opacity-70">
                <h3 className="text-2xl font-semibold text-[#d4af37]">
                  NOX — Premium Night Experience Landing Page
                </h3>
                <p className="text-gray-200 mt-2">
                  Landing page premium desenvolvida para uma casa noturna
                  fictícia de alto padrão, focada em conversão e experiência
                  imersiva. O projeto explora animações avançadas, design
                  moderno e estratégias de UX para criar uma sensação de
                  exclusividade e desejo.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/eventos.png"
                alt=""
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
                src="/gal.png"
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
      {/* Seção 4 - Qualificações */}
      <section
        id="qualificacoes"
        className="relative min-h-screen flex items-center justify-center text-white px-8"
      >
        <div className="absolute inset-0 bg-[url('/textures/feltro-dark.jpg')] bg-cover bg-center opacity-40"></div>

        <div className="relative z-10 max-w-6xl w-full text-center space-y-12">
          <h2 className="text-4xl font-extrabold tracking-wide text-[#d4af37]">
            Qualificações
          </h2>
          <p className="text-lg leading-relaxed text-gray-200 max-w-2xl mx-auto">
            Desde o primeiro projeto, acumulamos experiência sólida em diversas
            stacks que nos permitem entregar soluções completas e sofisticadas.
          </p>

          {/* Grid de stacks */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {/* Frontend */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg border border-[#d4af37] shadow-lg">
              <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
                Frontend
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>React.js</li>
                <li>Next.js (App Router)</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg border border-[#d4af37] shadow-lg">
              <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
                Backend
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Prisma ORM</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>

            {/* Infra & DevOps */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg border border-[#d4af37] shadow-lg">
              <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
                Infra & DevOps
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>Docker</li>
                <li>CI/CD (GitHub Actions)</li>
                <li>Vercel / Netlify</li>
                <li>AWS (EC2, S3)</li>
                <li>NGINX</li>
              </ul>
            </div>

            {/* Banco de Dados */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg border border-[#d4af37] shadow-lg">
              <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
                Banco de Dados
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>SQLite</li>
              </ul>
            </div>

            {/* Design & Experiência */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg border border-[#d4af37] shadow-lg">
              <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
                Design & Experiência
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>GSAP</li>
                <li>Lenis (scroll suave)</li>
              </ul>
            </div>

            {/* Outras Tecnologias */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg border border-[#d4af37] shadow-lg">
              <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">
                Outras Tecnologias
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>Git & GitHub</li>
                <li>Jest / Testing Library</li>
                <li>Agile / Scrum</li>
                <li>SEO & Performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative bg-black text-white px-8 py-12 border-t border-[#d4af37]">
        <div className="absolute inset-0 bg-[url('/textures/feltro-dark.jpg')] bg-cover bg-center opacity-30"></div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + Copy */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/logo.png"
              alt="Logo Landell Studio"
              className="h-30 w-auto"
            />
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Landell.Studio — Portfólio de
              Leonardo Landell
            </p>
          </div>

          {/* Links sociais com ícones */}
          <div className="flex gap-6 text-[#d4af37] text-2xl">
            <a
              href="https://wa.link/ki3w1v"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-landell-505a47223/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/LeonardoLandells "
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://vercel.com/seu-projeto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
