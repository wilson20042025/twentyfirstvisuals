'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black border-b border-black/5 dark:border-white/5 transition-all duration-300">
                <div className="max-w-[1600px] mx-auto px-5 md:px-12 py-3 flex justify-between items-center">
                    {/* Logo Area */}
                    <a href="/" className="flex items-center gap-4 group">
                        <div className="h-10 w-auto flex items-center relative">
                            <Image
                                src="/logo-dark.png"
                                alt="TF VISUAL Logo"
                                height={40}
                                width={120}
                                className="h-10 w-auto block dark:hidden object-contain"
                            />
                            <Image
                                src="/logo-light.png"
                                alt="TF VISUAL Logo"
                                height={40}
                                width={120}
                                className="h-10 w-auto hidden dark:block object-contain"
                            />
                        </div>
                        <span className="uppercase tracking-[0.3em] text-[10px] sm:text-xs font-normal text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Twenty-First Visuals</span>
                    </a>

                    <div className="flex items-center gap-6 md:gap-10">
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
                            {['Home', 'Gallery', 'About', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    className="text-[10px] uppercase tracking-[0.25em] font-medium text-slate-500 hover:text-primary transition-all relative group"
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 group"
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined text-xl group-hover:text-primary transition-colors">
                                {theme === 'light' ? 'dark_mode' : 'light_mode'}
                            </span>
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-slate-800 dark:text-slate-100 focus:outline-none z-50"
                            aria-label="Toggle Menu"
                        >
                            <div className="space-y-1.5">
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Drawer Overlay */}
                <div className={`fixed inset-0 z-[60] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
                    {/* Backdrop */}
                    <div
                        className={`absolute inset-0 bg-black/30 dark:bg-white/5 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    {/* Drawer Content */}
                    <div className={`absolute right-0 top-0 h-full w-[85%] max-w-xs bg-white dark:bg-black shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="flex flex-col h-full">
                            {/* Drawer Header */}
                            <div className="flex justify-between items-center px-6 py-5 border-b border-black/5 dark:border-white/5">
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">You're Welcome</span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 text-black dark:text-white"
                                >
                                    <span className="material-symbols-outlined text-2xl">close</span>
                                </button>
                            </div>

                            {/* Drawer Links */}
                            <nav className="flex-grow flex flex-col pt-12 px-8">
                                <ul className="space-y-8">
                                    {['Home', 'Gallery', 'About', 'Contact'].map((item, idx) => (
                                        <li key={item} className="overflow-hidden">
                                            <a
                                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`group flex items-baseline gap-5 transition-all duration-700 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                                                style={{ transitionDelay: `${idx * 100}ms` }}
                                            >
                                                <span className="text-[10px] font-bold text-primary tabular-nums">0{idx + 1}</span>
                                                <span className="text-2xl uppercase tracking-[0.1em] font-extralight group-hover:text-primary group-hover:translate-x-2 transition-all duration-300">
                                                    {item}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Drawer Footer */}
                            <div className="p-8 border-t border-black/5 dark:border-white/5 space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Theme</span>
                                    <button
                                        onClick={toggleTheme}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider"
                                    >
                                        <span className="material-symbols-outlined text-lg">
                                            {theme === 'light' ? 'dark_mode' : 'light_mode'}
                                        </span>
                                        {theme === 'light' ? 'Dark' : 'Light'}
                                    </button>
                                </div>
                                <a href="mailto:twentyfirstvisual@gmail.com" className="block text-[9px] uppercase tracking-[0.3em] font-bold text-primary">
                                    Inquire for Commissions →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
