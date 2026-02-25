'use client';

import React, { useState } from 'react';

interface ShareButtonProps {
    url?: string;
    title?: string;
    className?: string;
    iconClassName?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({
    url,
    title = 'Twenty-First Visuals Photography Portfolio',
    className = "",
    iconClassName = "material-symbols-outlined"
}) => {
    const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');

    const handleShare = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const shareUrl = url || typeof window !== 'undefined' ? window.location.href : '';
        const shareData = {
            title: title,
            url: shareUrl,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareUrl);
                setStatus('copied');
                setTimeout(() => setStatus('idle'), 2000);
            }
        } catch (err) {
            console.error('Error sharing:', err);
            // Don't show error if user cancelled
            if ((err as Error).name !== 'AbortError') {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 2000);
            }
        }
    };

    return (
        <button
            onClick={handleShare}
            className={`relative group ${className}`}
            aria-label="Share"
        >
            <span className={iconClassName}>
                {status === 'copied' ? 'check' : status === 'error' ? 'error' : 'share'}
            </span>
            {status === 'copied' && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-100 transition-opacity">
                    Copied!
                </span>
            )}
        </button>
    );
};

export default ShareButton;
