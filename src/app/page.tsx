'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HERO_SLIDES = [
  {
    image: "https://res.cloudinary.com/dgawaxa5e/image/upload/v1771993207/11111_r5r1th.jpg", // Coastline updated
    mobileImage: "https://res.cloudinary.com/dgawaxa5e/image/upload/v1771996046/1000319173_11zon_d2c0rp.jpg",
    title: "VISUALIZE",
    subtitle: "SIGHT BEGINS FROM THE MIND & ENDS THE CAMERA"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC02H3tCmV0XW_8Nfu4L3sxL3ETvbjLS54NzhFu0O8L0FnNvD62CwkBW0m2niHXWA-tdiE462tYT3sSfz5-ooALERJD7vNs-UTuU2aQsQMjeN2OSZtNYg0jA4Rj_se2vNZXp4hdQmrke_2bKkOkcJ7nKgHqO1SmyDc8pjLWXqNc427WuWV-C74tZJ1ty0zK--qYmg9RNGX9MBi2VHfBd-1l5oj53VCSC_jssGO6Qlug9UcefCd2z3TWDjveT9IZiZ6uYBHHOYnLg2qA", // Form & Light
    mobileImage: "https://res.cloudinary.com/dgawaxa5e/image/upload/v1771995846/1000319170_11zon_1_mi1bqm.jpg",
    title: "CREATIVITY",
    subtitle: "USING WHAT YOU HAVE TO BRING OUT THE BEST"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMD9MGl6YNGpOCvYQGljdlYpwKmNwKCiHOrvlHYD14qvGXUJBJAC9MWfYp-0yzKCwuVubgJEsXwVkWBLkZAHVhWtXcv8PJpp3cKsvXtaAC6H0yf3GzUUuB7Xq2SEYrDx5xq5lvWWDQ6CvulWRTm0edsQTcpgS1RKhGfV9XE3u2qUQlhG4SW7QPZFdi-0jmFNESy_LY_Rxw8eFPrS4gk4ALpqBWioi9W6aas1KMHWlGSHFtrIfNyXFWwX0qDKVdwUM-x7QNmc2vsDse", // Morning Mist
    mobileImage: "https://res.cloudinary.com/dgawaxa5e/image/upload/v1771995663/comp1_to7tcw.jpg",
    title: "BOLD SPIRIT",
    subtitle: "Expression all of the unseen through arts"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-background-light dark:bg-background-dark">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[90vh] w-full overflow-hidden bg-black">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
                }`}
            >
              {/* Desktop Background */}
              <div
                className="absolute inset-0 bg-cover bg-center hidden md:block"
                style={{ backgroundImage: `url('${slide.image}')` }}
              ></div>
              {/* Mobile Background */}
              <div
                className="absolute inset-0 bg-cover bg-center md:hidden"
                style={{ backgroundImage: `url('${slide.mobileImage}')` }}
              ></div>
            </div>
          ))}

          {/* Constant Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-background-light/20 dark:to-black/20"></div>

          {/* Hero Content - Animated relative to current slide */}
          <div className="relative h-full flex flex-col items-center justify-center text-white px-8 text-center pt-24 z-10 transition-colors duration-500">
            <div className="overflow-hidden">
              <h1
                key={`title-${currentSlide}`}
                className="text-4xl md:text-6xl font-extralight tracking-[0.3em] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000"
              >
                {HERO_SLIDES[currentSlide].title}
              </h1>
            </div>
            <div className="w-12 h-px bg-white/50 mb-6"></div>
            <div className="overflow-hidden">
              <p
                key={`sub-${currentSlide}`}
                className="text-[10px] md:text-sm uppercase tracking-[0.5em] font-light opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150"
              >
                {HERO_SLIDES[currentSlide].subtitle}
              </p>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 flex gap-3">
              {HERO_SLIDES.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-0.5 w-6 transition-all duration-500 ${idx === currentSlide ? 'bg-white w-10' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Selected Works Section */}
        <section className="py-24 px-12 md:px-24 lg:px-32 bg-background-light dark:bg-background-dark">
          <div className="max-w-screen-md mx-auto text-center mb-20">
            <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 mx-auto mb-8"></div>
            <h2 className="text-[11px] uppercase tracking-[0.5em] text-slate-400 font-bold">My Favourite Works</h2>
          </div>

          <div className="space-y-32 md:space-y-48 max-w-[1600px] mx-auto">
            {/* Work 1 */}
            <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-1"></div>
              <div className="md:col-span-6">
                <Link href="/projects/coastline" className="block">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-background-light dark:bg-white/5 shadow-2xl group cursor-pointer transition-transform duration-500 hover:scale-[0.98]">
                    <img
                      alt="The Coastline"
                      className="w-full h-full object-cover transition-all duration-1000 grayscale hover:grayscale-0 scale-[1.1] group-hover:scale-100"
                      src="https://res.cloudinary.com/dgawaxa5e/image/upload/v1771993207/11111_r5r1th.jpg"
                    />
                  </div>
                </Link>
              </div>
              <div className="md:col-span-4 text-center md:text-left mt-8 md:mt-0">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-2">01 — Nature</h3>
                <p className="font-serif italic text-2xl md:text-3xl text-slate-800 dark:text-slate-100">The Lonely Ant, 2023</p>
              </div>
            </article>

            {/* Work 2 */}
            <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-order-2 md:col-span-1"></div>
              <div className="md:col-order-1 md:col-span-4 text-center md:text-right order-2 md:order-1 mt-8 md:mt-0">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-2">02 — African Teen</h3>
                <p className="font-serif italic text-2xl md:text-3xl text-slate-800 dark:text-slate-100">Twin & Win, 2025</p>
              </div>
              <div className="md:col-span-6 order-1 md:order-2">
                <Link href="/projects/form-light" className="block">
                  <div className="aspect-square overflow-hidden rounded-xl bg-background-light dark:bg-white/5 shadow-2xl group cursor-pointer transition-transform duration-500 hover:scale-[0.98]">
                    <img
                      alt="Twin & Win Desktop"
                      className="w-full h-full object-cover transition-all duration-1000 grayscale hover:grayscale-0 translate-x-4 group-hover:translate-x-0 hidden md:block"
                      src="https://res.cloudinary.com/dgawaxa5e/image/upload/v1772022844/1000261574_11zon_sfxlr8.jpg"
                    />
                    <img
                      alt="Form & Light Mobile"
                      className="w-full h-full object-cover transition-all duration-1000 grayscale hover:grayscale-0 md:hidden"
                      src="https://res.cloudinary.com/dgawaxa5e/image/upload/v1772022844/1000261574_11zon_sfxlr8.jpg"
                    />
                  </div>
                </Link>
              </div>
            </article>

            {/* Work 3 */}
            <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3"></div>
              <div className="md:col-span-5">
                <Link href="/projects/morning-mist" className="block">
                  <div className="aspect-square overflow-hidden rounded-xl bg-background-light dark:bg-white/5 shadow-2xl group cursor-pointer transition-transform duration-500 hover:scale-[0.98]">
                    <img
                      alt="Wallpaper Shotz Desktop"
                      className="w-full h-full object-cover transition-all duration-1000 grayscale hover:grayscale-0 scale-[1.1] group-hover:scale-100 hidden md:block"
                      src="https://res.cloudinary.com/dgawaxa5e/image/upload/v1772027314/1000319517_11zon_q2zmnz.jpg"
                    />
                    <img
                      alt="Wallpaper Shotz Mobile"
                      className="w-full h-full object-cover transition-all duration-1000 grayscale hover:grayscale-0 md:hidden"
                      src="https://res.cloudinary.com/dgawaxa5e/image/upload/v1772027314/1000319517_11zon_q2zmnz.jpg"
                    />
                  </div>
                </Link>
              </div>
              <div className="md:col-span-4 text-center md:text-left mt-8 md:mt-0">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-2">03 — Portraits</h3>
                <p className="font-serif italic text-2xl md:text-3xl text-slate-800 dark:text-slate-100">Wallpaper Shotz, 2023</p>
              </div>
            </article>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-32 px-12 bg-background-light dark:bg-background-dark border-y border-slate-100 dark:border-white/10 text-center">
          <blockquote className="mb-16 max-w-2xl mx-auto">
            <p className="font-serif italic text-slate-400 dark:text-slate-500 text-xl md:text-2xl leading-relaxed">
              "Photography is the art of observation. It has little to do with the things you see and everything to do with the way you see them."
            </p>
          </blockquote>
          <a
            className="inline-block bg-primary text-white px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-primary/90 transition-all rounded-full shadow-xl shadow-primary/20"
            href="mailto:hello@eliasthorne.com"
          >
            Inquire for Commissions
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
