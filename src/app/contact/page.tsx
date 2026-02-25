import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
                    <form
                        action="https://formspree.io/f/your-id" // Replace with your service endpoint
                        method="POST"
                        className="space-y-8 text-left"
                    >
                        {/* Honeypot for spam protection */}
                        <input type="text" name="_gotcha" className="hidden" />

                        <div className="relative">
                            <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1" htmlFor="name">Full Name</label>
                            <input
                                className="w-full bg-transparent border-0 border-b border-slate-200 dark:border-white/10 px-0 py-3 focus:ring-0 focus:border-primary placeholder-slate-300 dark:placeholder-slate-800 transition-all text-sm outline-none"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                type="text"
                                required
                            />
                        </div>
                        <div className="relative">
                            <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1" htmlFor="email">Email Address</label>
                            <input
                                className="w-full bg-transparent border-0 border-b border-slate-200 dark:border-white/10 px-0 py-3 focus:ring-0 focus:border-primary placeholder-slate-300 dark:placeholder-slate-800 transition-all text-sm outline-none"
                                id="email"
                                name="email"
                                placeholder="hello@example.com"
                                type="email"
                                required
                            />
                        </div>
                        <div className="relative">
                            <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1" htmlFor="message">Message</label>
                            <textarea
                                className="w-full bg-transparent border-0 border-b border-slate-200 dark:border-white/10 px-0 py-3 focus:ring-0 focus:border-primary placeholder-slate-300 dark:placeholder-slate-800 transition-all text-sm resize-none outline-none"
                                id="message"
                                name="message"
                                placeholder="Share your vision..."
                                rows={4}
                                required
                            ></textarea>
                        </div>
                        <div className="pt-6 flex justify-center">
                            <button
                                className="group relative px-12 py-4 bg-primary text-white text-xs uppercase tracking-[0.3em] font-medium transition-all hover:bg-primary/90 rounded-full shadow-lg shadow-primary/20"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>


                </div>
            </main>

            <Footer />
        </div>
    );
}
