import React from 'react';

const Footer = () => {
    return (
        <footer className="py-16 px-12 md:px-24 lg:px-32 flex flex-col items-center bg-background-light dark:bg-background-dark">
            <div className="flex gap-6 mb-8">
                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-xl">share</span>
                </a>
                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-xl">camera_alt</span>
                </a>
                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-xl">mail</span>
                </a>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 text-center">
                © 2026 21st visuals. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
