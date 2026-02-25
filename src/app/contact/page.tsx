import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactClient from './ContactClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact & Inquiries",
    description: "Get in touch with Twenty-First Visuals for commissions, collaborations, or print inquiries. Based in Monrovia, Liberia.",
};

export default function Contact() {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark transition-colors duration-300 overflow-x-hidden">
            <Header />

            <main className="flex-grow flex flex-col items-center justify-center px-12 md:px-24 lg:px-32 pt-32 pb-16">
                <div className="max-w-xl w-full text-center">
                    {/* Hero Section */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4">Direct Inquiries</h1>
                        <a className="text-xl font-light italic text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="mailto:studio@eliasthorne.com">
                            twentyfirstvisual@gmail.com
                        </a>
                    </div>

                    {/* Contact Form */}
                    <ContactClient />


                </div>
            </main>

            <Footer />
        </div>
    );
}
