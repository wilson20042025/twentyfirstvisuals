import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShareButton from '@/components/ShareButton';
import MorningMistClient from './MorningMistClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Wallpaper Shotz",
    description: "A curated collection of portraits designed for visual impact and vertical depth, exploring personality and minimalist framing.",
};

export default function ProjectDetail() {
    return <MorningMistClient />;
}
