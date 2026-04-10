'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoveUpRight, Home, User, Briefcase, FolderGit2, Github, Linkedin, Facebook } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const MENU_LINKS = [
    {
        name: 'Home',
        url: '/',
        icon: Home,
    },
    {
        name: 'About Me',
        url: '/#about-me',
        icon: User,
    },
    {
        name: 'Experience',
        url: '/#my-experience',
        icon: Briefcase,
    },
    {
        name: 'Projects',
        url: '/#selected-projects',
        icon: FolderGit2,
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            {/* Liquid Glass Header */}
            <div className="fixed z-[5] top-4 right-4 md:top-6 md:right-auto md:left-1/2 md:-translate-x-1/2 w-max max-w-[90vw]">
                <div className="flex items-center p-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all">

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 px-1">
                        {MENU_LINKS.map((link) => {
                            const Icon = link.icon;
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => router.push(link.url)}
                                    className="group relative flex items-center justify-center size-9 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    <Icon size={16} strokeWidth={2.5} />
                                    <span className="absolute left-1/2 top-full mt-3 -translate-x-1/2 rounded-md bg-black/90 px-3 py-1.5 text-xs font-medium opacity-0 transition-all duration-200 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap border border-white/10 shadow-xl">
                                        {link.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <a
                        href="https://drive.google.com/file/d/1mOcAR2hNfZrTRoNxiemrqX5HFPkMQusG/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block ml-1 mr-1 px-4 py-2 text-xs font-semibold bg-primary text-primary-foreground rounded-full hover:scale-105 transition-transform"
                    >
                        Let&apos;s Talk
                    </a>

                    {/* Mobile Navigation Trigger */}
                    <div className="flex md:hidden items-center pr-1 pl-4 py-1">
                        <span className="text-xs font-medium mr-3 text-white/80 uppercase tracking-widest">Menu</span>
                        <button
                            className="relative size-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span
                                className={cn(
                                    'inline-block w-3.5 h-[2px] bg-foreground rounded-full absolute duration-300 -translate-y-[3px]',
                                    { 'rotate-45 translate-y-0': isMenuOpen }
                                )}
                            ></span>
                            <span
                                className={cn(
                                    'inline-block w-3.5 h-[2px] bg-foreground rounded-full absolute duration-300 translate-y-[3px]',
                                    { '-rotate-45 translate-y-0': isMenuOpen }
                                )}
                            ></span>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={cn(
                    'overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-14',
                    'flex flex-col lg:justify-center py-10',
                    { 'translate-x-0': isMenuOpen },
                )}
            >
                <div
                    className={cn(
                        'fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1]',
                        {
                            'translate-x-0': isMenuOpen,
                        },
                    )}
                ></div>

                <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        <div className="max-lg:order-2">
                            <p className="text-muted-foreground mb-5 md:mb-8">
                                SOCIAL
                            </p>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link) => {
                                    let Icon = MoveUpRight;
                                    if (link.name.toLowerCase() === 'github') Icon = Github;
                                    if (link.name.toLowerCase() === 'linkedin') Icon = Linkedin;
                                    if (link.name.toLowerCase() === 'facebook') Icon = Facebook;

                                    return (
                                        <li key={link.name}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group text-xl flex items-center gap-4 text-white/70 hover:text-white transition-colors capitalize"
                                            >
                                                <span className="flex items-center justify-center p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                                                    <Icon size={20} strokeWidth={2.5} />
                                                </span>
                                                {link.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="">
                            <p className="text-muted-foreground mb-5 md:mb-8">
                                MENU
                            </p>
                            <ul className="space-y-3">
                                {MENU_LINKS.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <li key={link.name}>
                                            <button
                                                onClick={() => {
                                                    router.push(link.url);
                                                    setIsMenuOpen(false);
                                                }}
                                                className="group text-xl flex items-center gap-4 text-white/70 hover:text-white transition-colors"
                                            >
                                                <span className="flex items-center justify-center p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                                                    <Icon size={20} strokeWidth={2.5} />
                                                </span>
                                                {link.name}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
                    <p className="text-muted-foreground mb-4">GET IN TOUCH</p>
                    <a href={`mailto:${GENERAL_INFO.email}`}>
                        {GENERAL_INFO.email}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
