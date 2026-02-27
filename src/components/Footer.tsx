import React from 'react';
import ShareButton from './ShareButton';

const Footer = () => {
    return (
        <footer className="py-16 px-12 md:px-24 lg:px-32 flex flex-col items-center bg-background-light dark:bg-background-dark">
            <div className="flex gap-6 mb-8">
                <ShareButton
                    className="text-slate-400 hover:text-primary transition-colors flex items-center justify-center"
                    iconClassName="material-symbols-outlined text-xl"
                />
                <a className="text-slate-400 hover:text-primary transition-colors" href="https://www.instagram.com/twenty_first_visuals" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl">camera_alt</span>
                </a>
                <a className="text-slate-400 hover:text-primary transition-colors" href="mailto:twentyfirstvisual@gmail.com">
                    <span className="material-symbols-outlined text-xl">mail</span>
                </a>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 text-center">
                © 2026 Twenty-First Visuals. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
