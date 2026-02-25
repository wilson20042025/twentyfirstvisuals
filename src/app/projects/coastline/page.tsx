'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShareButton from '@/components/ShareButton';

const MOBILE_HERO_IMAGES = [
    "https://res.cloudinary.com/dgawaxa5e/image/upload/v1771997752/1000319183_11zon_1_n4bdgg.jpg",
    "https://res.cloudinary.com/dgawaxa5e/image/upload/v1771997768/1000319182_11zon_sprtci.jpg"
];

export default function ProjectDetail() {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Auto-change every 10 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % MOBILE_HERO_IMAGES.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    // Swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            setCurrentSlide((prev) => (prev + 1) % MOBILE_HERO_IMAGES.length);
        } else if (isRightSwipe) {
            setCurrentSlide((prev) => (prev - 1 + MOBILE_HERO_IMAGES.length) % MOBILE_HERO_IMAGES.length);
        }
        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">
            {/* Mobile-specific Nav (Replaces global Header for this immersive view on mobile) */}
            <nav className="sticky top-0 z-[70] flex items-center justify-between p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 md:hidden">
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-black dark:text-white"
                >
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
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10"
                />
            </nav>

            {/* Desktop Header shows as normal */}
            <div className="hidden md:block">
                <Header />
            </div>

            <main className="w-full max-w-[1600px] mx-auto">
                {/* Hero section with Mobile Slider / Desktop Static */}
                <div
                    className="relative w-full aspect-[3/4] md:aspect-[21/9] overflow-hidden bg-slate-200 dark:bg-slate-800"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Desktop Hero Image (md and up) */}
                    <img
                        className="hidden md:block w-full h-full object-cover"
                        alt="Aerial view of turquoise ocean waves hitting rocky coastline"
                        src="https://res.cloudinary.com/dgawaxa5e/image/upload/v1771993207/11111_r5r1th.jpg"
                    />

                    {/* Mobile Hero Slider (below md) */}
                    <div className="md:hidden absolute inset-0">
                        {MOBILE_HERO_IMAGES.map((url, idx) => (
                            <img
                                key={idx}
                                src={url}
                                alt={`Coastline slide ${idx + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        ))}
                        {/* Slide indicators for mobile */}
                        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                            {MOBILE_HERO_IMAGES.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1 w-6 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-primary' : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-6 md:px-24 lg:px-32 py-12 md:py-24 space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-black dark:text-white">
                            The Lonely Ant
                        </h1>
                        <p className="text-primary font-medium tracking-wide text-lg uppercase">2023</p>
                    </div>

                    <div className="h-px w-16 bg-primary/40 my-8"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8">
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-light">
                                I captured this image during the morning hours in my backyard garden. What make this photograph a Masterpiece, is because of the detail I was able to notice in Nature. On the entire tree, was only this ant that was alone. Maybe it was lost or insearch of food or probably abandon by it's colony. At its quietest moment was when I captured this.
                            </p>
                        </div>

                        <div className="lg:col-span-4 grid grid-cols-2 gap-8 py-8 lg:py-0 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-white/10 lg:pl-12">
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Category</p>
                                <p className="text-sm font-medium">Nature / Animals</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Location</p>
                                <p className="text-sm font-medium">Paynesville, Monrovia</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="px-6 md:px-24 lg:px-32 py-16 flex flex-col md:flex-row gap-6 border-t border-slate-100 dark:border-white/10">
                    <button className="w-full md:w-auto border border-black/10 dark:border-white/20 font-bold px-12 py-5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all uppercase tracking-widest text-[11px]">
                        Get This Masterpiece
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
