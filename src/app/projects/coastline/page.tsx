import CoastlineProject from './CoastlineProject';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The Lonely Ant | Nature Study Project",
    description: "A detailed nature study captured by Twenty-First Visuals. Exploring the quiet moments in nature through high-detail phone photography.",
    alternates: {
        canonical: 'https://twentyfirstvisuals.com/projects/coastline'
    }
};

export default function ProjectDetail() {
    return <CoastlineProject />;
}
