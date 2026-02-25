import CoastlineProject from './CoastlineProject';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The Lonely Ant",
    description: "A detailed nature study captured by Twenty-First Visuals. Exploring the quiet moments in nature through high-detail photography.",
};

export default function ProjectDetail() {
    return <CoastlineProject />;
}
