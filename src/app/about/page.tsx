import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden transition-colors duration-300">
            <Header />
            <main className="flex-grow flex flex-col items-center px-12 md:px-24 lg:px-32 pt-32 pb-32 max-w-[1600px] mx-auto text-center">

                {/* Portrait Container */}
                <div className="mb-12 md:mb-24">
                    <div className="relative inline-block">
                        <div className="w-48 h-64 md:w-64 md:h-80 grayscale overflow-hidden rounded-xl bg-background-light dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 shadow-2xl">
                            <img
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                                alt="Minimalist black and white portrait of Elias Thorne"
                                src="https://res.cloudinary.com/dgawaxa5e/image/upload/v1771994956/IMG_20250203_114856889_f9ke1x.jpg"
                            />
                        </div>
                    </div>
                </div>

                {/* Biography Section */}
                <section className="space-y-12 max-w-2xl mx-auto">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-5xl font-extralight tracking-tight text-black dark:text-white">
                            Fritzgerald Wilson
                        </h1>
                        <p className="text-lg md:text-xl font-light leading-relaxed text-slate-500 dark:text-slate-400">
                            Born and raised in Monrovia, Liberia. Taking simple photographs and playing around with the edit has just been my thing. Fun fact is that, all these available photos on this website are taken with my phone.
                        </p>
                        <br />
                        <p className="text-lg md:text-xl font-light leading-relaxed text-slate-500 dark:text-slate-400">
                            Thank you for viewing my simple photographs.
                        </p>
                    </div>

                    {/* Artist Statement */}
                    <div className="pt-12 border-t border-slate-100 dark:border-white/10 max-w-md mx-auto">
                        <p className="text-sm font-light leading-loose tracking-widest text-slate-400 dark:text-slate-500 italic">
                            "I want Al to do my laundry and dishes so that I can do art and creativity, not for Al to do my art and creativity so that I can do my laundry and dishes."
                        </p>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    );
}
