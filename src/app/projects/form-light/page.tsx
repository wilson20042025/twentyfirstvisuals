import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShareButton from '@/components/ShareButton';
import FormLightClient from './FormLightClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Twin & Win",
    description: "A collaborative visual storytelling project with 100 Company, celebrating African culture and unity through bold portraits.",
};

export default function ProjectDetail() {
    return <FormLightClient />;
}
