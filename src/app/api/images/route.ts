import { NextResponse } from 'next/server';
import { getGalleryImages } from '@/lib/images';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const images = await getGalleryImages();
        return NextResponse.json(images);
    } catch (error) {
        console.error('Cloudinary fetch error:', error);
        return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
    }
}
