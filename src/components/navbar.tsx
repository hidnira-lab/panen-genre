"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-[#2C2727] text-white px-6 md:px-8 py-3 rounded-[1.5rem] md:rounded-full shadow-lg z-50 transition-all duration-300">

            <div className="flex items-center justify-between gap-8 text-sm font-medium whitespace-nowrap">

                <Link href="/" className="bg-white text-black px-4 py-1.5 rounded-full font-bold">
                    Beranda
                </Link>

                <div className="hidden md:flex gap-8 items-center">
                    <Link href="#" className="py-1 hover:text-green-300 transition-colors">Panen Edukasi</Link>
                    <Link href="#" className="py-1 hover:text-green-300 transition-colors">Panen Rencana</Link>
                    <Link href="#" className="py-1 hover:text-green-300 transition-colors">Panen Journey</Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center gap-[4px] w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Toggle Menu"
                >
                    <span className={`block w-4 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
                    <span className={`block w-4 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-4 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
                </button>
            </div>

            <div
                className={`md:hidden flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 pt-6 pb-2 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <Link href="#" className="hover:text-green-300 transition-colors px-2 border-b border-white/10 pb-2">
                    Panen Edukasi
                </Link>
                <Link href="#" className="hover:text-green-300 transition-colors px-2 border-b border-white/10 pb-2">
                    Panen Rencana
                </Link>
                <Link href="#" className="hover:text-green-300 transition-colors px-2 pb-1">
                    Panen Journey
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;