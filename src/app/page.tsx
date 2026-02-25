import HomeClient from './HomeClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Twenty-First Visuals | Visual Artist & Photography Portfolio",
  description: "A premium photography portfolio by Twenty-First Visuals, focusing on portrait studies, minimalist landscapes, and cinematic visual stories in Monrovia, Liberia.",
};

export default function Home() {
  return <HomeClient />;
}
