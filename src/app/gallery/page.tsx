'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fallbackImages = [
    {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSas8UOr6nYQl1CFXECMfbt55A2WbywJZYjyFY3G3niL5aUw921GbNDSo5mQGEocL19wCJ1jpZqOhmSx62HLt4KmeVpJTOCuodm_OKFE-0Da7RAp0aLQKlLCjwwQgYrFQE2Ggsud2nXi1-CB08rn-lX-T_Waqx5zKgnunubziDsSWqidCnJKLpk_iK4qvMGlT5oHL80_Fn4Xjs4CuCO5jfH-beDzzUN8UgaqRcJGUZGrYEXLVJBeqYZ2RuC6vbHFMEA5FeidInaUtD',
        title: 'Vertical Silence',
        meta: 'San Francisco • 2024',
        type: 'item-tall'
    }
];

interface CloudinaryImage {
    url: string;
    title: string;
    meta: string;
    type: string;
}

export default function Gallery() {
    const [images, setImages] = useState<CloudinaryImage[]>(fallbackImages);
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile for pagination constraints
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/images');
                const data = await response.json();
                if (data && Array.isArray(data) && data.length > 0) {
                    setImages(data);
                }
            } catch (error) {
                console.error('Failed to fetch gallery images:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchImages();
    }, []);

    const itemsPerPage = isMobile ? 5 : 20;
    const totalPages = Math.ceil(images.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedImages = images.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const closeModal = () => setSelectedIdx(null);
    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIdx !== null) setSelectedIdx((selectedIdx + 1) % images.length);
    };
    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIdx !== null) setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
    };

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <Header />

                <main className="flex flex-col max-w-[1600px] mx-auto w-full px-12 md:px-24 lg:px-32 pt-32 pb-12">
                    {/* Loading State */}
                    {isLoading && images === fallbackImages && (
                        <div className="flex items-center justify-center py-20">
                            <span className="material-symbols-outlined animate-spin text-primary text-4xl">progress_activity</span>
                        </div>
                    )}

                    <section className="gallery-grid gap-6">
                        {paginatedImages.map((img, idx) => {
                            const globalIdx = startIndex + idx;
                            return (
                                <div
                                    key={globalIdx}
                                    onClick={() => setSelectedIdx(globalIdx)}
                                    className={`${img.type} group relative overflow-hidden rounded-xl bg-background-light dark:bg-white/5 cursor-pointer`}
                                >
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${img.url}')` }}
                                    ></div>
                                </div>
                            );
                        })}
                    </section>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center py-12 gap-2">
                            <button
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="flex size-10 items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors disabled:opacity-20"
                            >
                                <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">chevron_left</span>
                            </button>

                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`text-sm font-bold flex size-10 items-center justify-center rounded-full transition-all ${currentPage === i + 1
                                            ? 'bg-primary text-white'
                                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="flex size-10 items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors disabled:opacity-20"
                            >
                                <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">chevron_right</span>
                            </button>
                        </div>
                    )}
                </main>
                <Footer />
            </div>

            {/* Lightbox Overlay Container */}
            {selectedIdx !== null && (
                <div className="fixed inset-0 z-[100] flex bg-background-light dark:bg-background-dark backdrop-blur-md animate-in fade-in duration-300 overflow-hidden">
                    {/* Main Content Area (Left/Center) */}
                    <div className="flex-grow flex flex-col relative h-full">
                        {/* Top Navigation / Header (Absolute) */}
                        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 md:px-12 md:py-8 pointer-events-none">
                            <div className="flex items-center gap-3 pointer-events-auto">
                                <div className="text-primary">
                                    <span className="material-symbols-outlined text-2xl">filter_vintage</span>
                                </div>
                                <h1 className="text-sm font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400">{images[selectedIdx].title}</h1>
                            </div>
                            <button
                                onClick={closeModal}
                                className="group flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-slate-200/50 dark:hover:bg-slate-800/50 pointer-events-auto"
                            >
                                <span className="material-symbols-outlined text-slate-900 dark:text-slate-100 transition-transform group-hover:scale-110">close</span>
                            </button>
                        </header>

                        {/* Main Display Area */}
                        <main className="relative flex-grow flex items-center justify-center p-4 md:p-10 overflow-hidden h-full">
                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-slate-200/20 text-slate-900 dark:text-slate-100 hover:bg-white/20 transition-all"
                            >
                                <span className="material-symbols-outlined">arrow_back_ios_new</span>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-slate-200/20 text-slate-900 dark:text-slate-100 hover:bg-white/20 transition-all"
                            >
                                <span className="material-symbols-outlined">arrow_forward_ios</span>
                            </button>

                            {/* Central Large Image */}
                            <div className="relative w-full h-full flex flex-col items-center justify-center group cursor-default">
                                <div
                                    className="w-full h-full mt-10 mb-10 bg-center bg-no-repeat bg-contain transition-all duration-500"
                                    style={{ backgroundImage: `url('${images[selectedIdx].url}')` }}
                                ></div>
                                {/* Caption Showing Only Location/Date on Hover */}
                                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-full pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-full inline-block border border-white/10 shadow-2xl">
                                        <p className="text-[11px] tracking-[0.3em] font-medium text-white/95 uppercase">
                                            {images[selectedIdx].meta}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>

                    {/* Vertical Thumbnail Sidebar (Right) */}
                    <aside className="w-20 md:w-24 h-full border-l border-white/10 dark:border-white/5 flex flex-col items-center py-10 overflow-y-auto no-scrollbar gap-6 md:block hidden bg-white/5 backdrop-blur-sm">
                        <div className="flex flex-col items-center gap-6 px-4">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedIdx(idx)}
                                    className={`relative flex-shrink-0 group cursor-pointer transition-all duration-300 ${selectedIdx === idx ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-100'}`}
                                >
                                    <div
                                        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-center bg-cover border transition-all ${selectedIdx === idx ? 'border-primary ring-2 ring-primary/20' : 'border-transparent'}`}
                                        style={{ backgroundImage: `url('${img.url}')` }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                        {/* Progress Dots in Sidebar */}
                        <div className="mt-12 flex flex-col items-center gap-2">
                            {images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`rounded-full transition-all duration-300 ${selectedIdx === idx ? 'h-2 w-2 bg-primary' : 'h-1.5 w-1.5 bg-slate-300 dark:bg-slate-700'}`}
                                ></div>
                            ))}
                        </div>
                    </aside>
                </div>
            )}
        </div>
    );
}
