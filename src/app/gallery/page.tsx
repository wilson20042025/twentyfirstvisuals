import React from 'react';
import { Metadata } from 'next';
import { getGalleryImages } from '@/lib/images';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
    title: "Gallery | Twenty-First Visuals",
    description: "Explore the full collection of photography by Twenty-First Visuals, featuring portraits, minimalist landscapes, and visual stories.",
};

export const dynamic = 'force-dynamic';

export default async function GalleryPage() {
    const images = await getGalleryImages();

    return <GalleryClient initialImages={images} />;
}
