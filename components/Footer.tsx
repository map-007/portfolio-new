import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import {
    ArrowUpRight,
    Facebook,
    Github,
    Linkedin,
    Mail,
} from 'lucide-react';
import Link from 'next/link';

const FOOTER_LINKS = [
    { label: 'About', href: '/#about-me' },
    { label: 'Stack', href: '/#my-stack' },
    { label: 'Experience', href: '/#my-experience' },
    { label: 'Projects', href: '/#selected-projects' },
];

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    facebook: Facebook,
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative overflow-hidden border-t border-white/10 pt-24 pb-8"
            id="contact"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

            <div className="container relative">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:p-10 lg:p-12">
                    <div className="grid gap-12 lg:grid-cols-[1.4fr_.8fr] lg:items-end">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-primary">
                                Let&apos;s Build Something Sharp
                            </p>
                            <h2 className="mt-5 max-w-3xl text-5xl font-anton leading-[0.95] sm:text-6xl lg:text-7xl">
                                Have a project in mind? Let&apos;s make it feel
                                standout.
                            </h2>
                            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                                I design and build polished web experiences with
                                strong frontend craft, scalable architecture,
                                and a clear eye for detail.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(
                                        GENERAL_INFO.emailSubject,
                                    )}&body=${encodeURIComponent(
                                        GENERAL_INFO.emailBody,
                                    )}`}
                                    className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                                >
                                    <Mail size={18} />
                                    Start a Conversation
                                </a>
                                <a
                                    href={`mailto:${GENERAL_INFO.email}`}
                                    className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
                                >
                                    {GENERAL_INFO.email}
                                </a>
                            </div>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                                    Quick Links
                                </p>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    {FOOTER_LINKS.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition-colors hover:border-primary/50 hover:text-white"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                                    Social Media
                                </p>
                                <div className="mt-5 grid gap-3">
                                    {SOCIAL_LINKS.map((link) => {
                                        const Icon =
                                            iconMap[
                                            link.name.toLowerCase() as keyof typeof iconMap
                                            ] ?? ArrowUpRight;

                                        return (
                                            <a
                                                key={link.name}
                                                href={link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-4 py-3 transition-all hover:border-primary/50 hover:bg-white/10"
                                            >
                                                <span className="flex items-center gap-3">
                                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-primary transition-transform group-hover:scale-110">
                                                        <Icon size={18} />
                                                    </span>
                                                    <span className="text-base capitalize">
                                                        {link.name}
                                                    </span>
                                                </span>
                                                <ArrowUpRight
                                                    size={18}
                                                    className="text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                                                />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>Min Aung Paing © {currentYear}. Crafted with Next.js and Tailwind CSS.</p>
                    <Link
                        href="/#banner"
                        className="inline-flex items-center gap-2 transition-colors hover:text-white"
                    >
                        Back to top
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
