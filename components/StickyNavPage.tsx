'use client'
import { useRef, useCallback, useState } from "react";
import Image from 'next/image';
import Header from "./Header";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";
import Gallery from "./Gallery";
import Reach from "./Reach";
import Testimonials from "./Testimonials";
import { Menu, X } from "lucide-react";

const SECTIONS = ["home", "about", "gallery", "reach", "testimonials", "contact"] as const;
type SectionKey = (typeof SECTIONS)[number];

export default function StickyNavPage() {
    const sectionRefs = useRef<Map<SectionKey, HTMLElement | null>>(new Map());
    const [isOpen, setIsOpen] = useState(false);
    const setSectionRef = useCallback(
        (key: SectionKey) => (el: HTMLElement | null) => {
            sectionRefs.current.set(key, el);
        },
        []
    );

    const scrollToSection = (key: SectionKey) => {
        sectionRefs.current.get(key)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    const handleClick = (key: SectionKey) => {
        scrollToSection(key);
        setIsOpen(false); // close menu after selecting on mobile
    };

    return (
        <div className="relative">
            <nav className="fixed w-full top-0 z-50 bg-gray-800 shadow">
                <div className="max-w-5xl mx-auto px-4 py-3">
                    <div className="h-10 flex items-center justify-between md:justify-center md:gap-20">
                        <div className="font-sans font-black text-white">
                            <p>MITRA KALTIM</p>
                        </div>
                        <div className="hidden md:flex md:gap-20">
                            {SECTIONS.map((key) => (
                                <button
                                    key={key}
                                    onClick={() => handleClick(key)}
                                    className="text-sm font-medium text-white hover:text-blue-300 transition-colors capitalize"
                                >
                                    {key}
                                </button>
                            ))}
                        </div>
 
                        {/* Burger button (mobile only) */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white p-2"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col px-4 pb-3">
                        {SECTIONS.map((key) => (
                            <button
                                key={key}
                                onClick={() => handleClick(key)}
                                className="text-sm font-medium text-white hover:text-blue-300 transition-colors capitalize text-left py-2"
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
            <a
                href="https://wa.me/628164512317"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 hover:-translate-y-1 hover:cursor-pointer transition-all duration-200 rounded-full border border-gray-600 fixed bg-gray-700 shadow bottom-10 right-10 z-50 flex items-center justify-center"
            >
                <Image
                    className='w-11 h-11 rounded-lg object-cover'
                    src="/wa.png"
                    alt="wa.png"
                    width={500}
                    height={500}
                />
            </a>

            <section ref={setSectionRef("home")} className="mt-10">
                <Header onLearnMore={() => scrollToSection("about")} onContact={() => scrollToSection("contact")} />
            </section>
            <section
                ref={setSectionRef("about")}
                className="z-10 flex items-center justify-center bg-gray-900"
            >
                <AboutUs />
            </section>
            <section
                ref={setSectionRef("gallery")}
                className="z-10 flex items-center justify-center bg-gray-900"
            >
                <Gallery />
            </section>
            <section
                ref={setSectionRef("reach")}
                className="z-10 flex items-center justify-center bg-linear-to-b from-gray-900 to-gray-950"
            >
                <Reach />
            </section>
            <section
                ref={setSectionRef("testimonials")}
                className="z-10 flex items-center justify-center bg-gray-950"
            >
                <Testimonials />
            </section>
            <section
                ref={setSectionRef("contact")}
                className="flex items-center justify-center bg-gray-950"
            >
                <Contacts />
            </section>
        </div>
    );
}
