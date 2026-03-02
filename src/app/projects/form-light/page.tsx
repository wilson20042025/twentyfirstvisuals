import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShareButton from '@/components/ShareButton';
import FormLightClient from './FormLightClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Twin & Win | Portrait Study Project",
    description: "A collaborative visual storytelling project celebrating African culture and unity through bold portraits captured by Twenty-First Visuals.",
    alternates: {
        canonical: 'https://twentyfirstvisuals.com/projects/form-light'
    }
};

export default function ProjectDetail() {
    return <FormLightClient />;
}
