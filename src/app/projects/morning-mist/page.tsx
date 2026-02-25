'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShareButton from '@/components/ShareButton';

export default function ProjectDetail() {
    const router = useRouter();

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <nav className="sticky top-0 z-[70] flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 md:hidden">
                <button onClick={() => router.back()} className="flex items-center text-black dark:text-white">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span className="ml-2 text-sm font-medium">Back</span>
                </button>
                <div className="flex items-center gap-1">
                    <span className="uppercase tracking-[0.3em] text-[10px] sm:text-xs font-normal text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Twenty-First Visuals</span>
                    <div className="h-6 w-auto flex items-center">
                        <img src="/logo-dark.png" alt="TF VISUAL" className="h-6 w-auto block dark:hidden" />
                        <img src="/logo-light.png" alt="TF VISUAL" className="h-6 w-auto hidden dark:block" />
                    </div>
                </div>
                <ShareButton
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 text-black dark:text-white"
                />
            </nav>

            <div className="hidden md:block">
                <Header />
            </div>

            <main className="w-full max-w-[1600px] mx-auto">
                <div className="w-full aspect-[3/4] md:aspect-[21/9] overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img
                        className="w-full h-full object-cover"
                        alt="Wallpaper Shotz Portrait"
                        src="https://res.cloudinary.com/dgawaxa5e/image/upload/v1772027314/1000319517_11zon_q2zmnz.jpg"
                    />
                </div>

                <div className="px-6 md:px-24 lg:px-32 py-12 md:py-24 space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-black dark:text-white uppercase italic font-serif">
                            Wallpaper Shotz
                        </h1>
                        <p className="text-primary font-medium tracking-widest text-lg uppercase">2024</p>
                    </div>

                    <div className="h-px w-16 bg-primary/40 my-8"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8">
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-light">
                                A curated collection of portraits designed for visual impact and vertical depth. This series explores the intersection of personality and minimalist framing, creating captures that function as both art and immersive digital backdrops.
                            </p>
                        </div>

                        <div className="lg:col-span-4 grid grid-cols-2 gap-8 py-8 lg:py-0 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-white/10 lg:pl-12">
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Category</p>
                                <p className="text-sm font-medium">Portrait / Minimalism</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Location</p>
                                <p className="text-sm font-medium">Monrovia, Liberia</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="px-6 md:px-24 lg:px-32 pb-24 space-y-12 md:space-y-24">
                    {/* Editorial Imagery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                        <div className="rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5 aspect-[3/4] md:aspect-[4/5] shadow-lg">
                            <img
                                src="https://res.cloudinary.com/dgawaxa5e/image/upload/v1772027314/1000319516_11zon_nngamw.jpg"
                                alt="Wallpaper Study I"
                                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5 aspect-[3/4] md:mt-24 shadow-lg">
                            <img
                                src="https://res.cloudinary.com/dgawaxa5e/image/upload/v1772027314/1000319515_11zon_kds3uq.jpg"
                                alt="Wallpaper Study II"
                                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                            />
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div >
    );
}
