'use client';

import React, { useState } from 'react';

const ContactClient = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);

        const formId = process.env.NEXT_PUBLIC_FORMSPREE_KEY || 'your-id';

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    setErrorMessage(data['errors'].map((error: any) => error['message']).join(', '));
                } else {
                    setErrorMessage('Oops! There was a problem submitting your form');
                }
                setStatus('error');
            }
        } catch (error) {
            setErrorMessage('Oops! There was a problem submitting your form');
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="py-20 text-center animate-in fade-in duration-700">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
                </div>
                <h2 className="text-3xl font-extralight mb-4">Message Sent</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-10">
                    Thank you for reaching out. I've received your inquiry and will get back to you as soon as possible.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary hover:opacity-80 transition-opacity"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8 text-left animate-in fade-in duration-700"
        >
            {/* Honeypot for spam protection */}
            <input type="text" name="_gotcha" className="hidden" />

            <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1" htmlFor="name">Full Name</label>
                <input
                    className="w-full bg-transparent border-0 border-b border-slate-200 dark:border-white/10 px-0 py-3 focus:ring-0 focus:border-primary placeholder-slate-300 dark:placeholder-slate-800 transition-all text-sm outline-none"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    required
                />
            </div>

            <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1" htmlFor="email">Email Address</label>
                <input
                    className="w-full bg-transparent border-0 border-b border-slate-200 dark:border-white/10 px-0 py-3 focus:ring-0 focus:border-primary placeholder-slate-300 dark:placeholder-slate-800 transition-all text-sm outline-none"
                    id="email"
                    name="email"
                    placeholder="hello@example.com"
                    type="email"
                    required
                />
            </div>

            <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1" htmlFor="message">Message</label>
                <textarea
                    className="w-full bg-transparent border-0 border-b border-slate-200 dark:border-white/10 px-0 py-3 focus:ring-0 focus:border-primary placeholder-slate-300 dark:placeholder-slate-800 transition-all text-sm resize-none outline-none"
                    id="message"
                    name="message"
                    placeholder="Share your vision..."
                    rows={4}
                    required
                ></textarea>
            </div>

            {status === 'error' && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs rounded-lg">
                    {errorMessage}
                </div>
            )}

            <div className="pt-6 flex justify-center">
                <button
                    className="group relative px-12 py-4 bg-primary text-white text-xs uppercase tracking-[0.3em] font-medium transition-all hover:bg-primary/90 rounded-full shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
            </div>
        </form>
    );
};

export default ContactClient;
