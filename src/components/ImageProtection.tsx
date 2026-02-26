'use client';

import { useEffect } from 'react';

const ImageProtection = () => {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            // Check if the target is an image or inside an image container
            const target = e.target as HTMLElement;
            if (target.tagName === 'IMG' || target.closest('.protected-image')) {
                e.preventDefault();
                return false;
            }
        };

        const handleDragStart = (e: DragEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'IMG' || target.closest('.protected-image')) {
                e.preventDefault();
                return false;
            }
        };

        // Add event listeners
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('dragstart', handleDragStart);

        // Cleanup
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('dragstart', handleDragStart);
        };
    }, []);

    return null; // This component doesn't render anything
};

export default ImageProtection;
