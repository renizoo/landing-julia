'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const socialLinks = [
    {  href: 'https://www.behance.net/juliarocha27', label: 'Behance', svg: (
     <svg fill="none" viewBox="0 0 30 24" className="w-5 h-5"><path fill="currentColor" d="M18.83,14.38a2.78,2.78,0,0,0,.65,1.9,2.31,2.31,0,0,0,1.7.59,2.31,2.31,0,0,0,1.38-.41,1.79,1.79,0,0,0,.71-0.87h2.31a4.48,4.48,0,0,1-1.71,2.53,5,5,0,0,1-2.78.76,5.53,5.53,0,0,1-2-.37,4.34,4.34,0,0,1-1.55-1,4.77,4.77,0,0,1-1-1.63,6.29,6.29,0,0,1,0-4.13,4.83,4.83,0,0,1,1-1.64A4.64,4.64,0,0,1,19.09,9a4.86,4.86,0,0,1,2-.4A4.5,4.5,0,0,1,23.21,9a4.36,4.36,0,0,1,1.5,1.3,5.39,5.39,0,0,1,.84,1.86,7,7,0,0,1,.18,2.18h-6.9Zm3.67-3.24A1.94,1.94,0,0,0,21,10.6a2.26,2.26,0,0,0-1,.22,2,2,0,0,0-.66.54,1.94,1.94,0,0,0-.35.69,3.47,3.47,0,0,0-.12.65h4.29A2.75,2.75,0,0,0,22.5,11.14ZM18.29,6h5.36V7.35H18.29V6ZM13.89,17.7a4.4,4.4,0,0,1-1.51.7,6.44,6.44,0,0,1-1.73.22H4.24V5.12h6.24a7.7,7.7,0,0,1,1.73.17,3.67,3.67,0,0,1,1.33.56,2.6,2.6,0,0,1,.86,1,3.74,3.74,0,0,1,.3,1.58,3,3,0,0,1-.46,1.7,3.33,3.33,0,0,1-1.35,1.12,3.19,3.19,0,0,1,1.82,1.26,3.79,3.79,0,0,1,.59,2.17,3.79,3.79,0,0,1-.39,1.77A3.24,3.24,0,0,1,13.89,17.7ZM11.72,8.19a1.25,1.25,0,0,0-.45-0.47,1.88,1.88,0,0,0-.64-0.24,5.5,5.5,0,0,0-.76-0.05H7.16v3.16h3a2,2,0,0,0,1.28-.38A1.43,1.43,0,0,0,11.89,9,1.73,1.73,0,0,0,11.72,8.19ZM11.84,13a2.39,2.39,0,0,0-1.52-.45H7.16v3.73h3.11a3.61,3.61,0,0,0,.82-0.09A2,2,0,0,0,11.77,16a1.39,1.39,0,0,0,.47-0.54,1.85,1.85,0,0,0,.17-0.88A1.77,1.77,0,0,0,11.84,13Z"/></svg>
    ) },
    { href: 'https://www.instagram.com/juspiacci/', label: 'Instagram', svg: (
     <svg fill="none" viewBox="0 0 30 24" className="w-5 h-5"><path fill="currentColor" d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-.5a1 1 0 100 2 1 1 0 000-2z"/></svg>
    ) },
    { href: 'mailto:juliarochax@gmail.com', label: 'Email', svg: (
     <svg fill="none" viewBox="0 0 30 24" className="w-5 h-5"><path fill="currentColor" d="M15,13L7.1,7.1c0-0.5,0.4-1,1-1h13.8c0.5,0,1,0.4,1,1L15,13z M15,14.8l7.9-5.9v8.1c0,0.5-0.4,1-1,1H8.1c-0.5,0-1-0.4-1-1V8.8L15,14.8z"/></svg>
    ) },
];

interface HeaderProps {
    isScrolled: boolean;
    openVideo?: boolean | null;
}

export default function Header({ isScrolled, openVideo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const workLinkHref = pathname === '/about' ? '/' : '/#work';
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled && !openVideo ? 'bg-black/20 backdrop-blur-sm' : ''
        } ${openVideo ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <nav className="hidden min-[934px]:flex gap-6 font-bold text-lg">
              <Link href={workLinkHref} className="text-white hover:text-gray-300 transition-colors">Work</Link>
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors">About Me</Link>
            </nav>
            <div className="hidden min-[934px]:flex gap-4 items-center">
              {socialLinks.map((icon, i) => (
                <a 
                  key={i} 
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.label} 
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {icon.svg}
                </a>
              ))}
            </div>
            <div className="min-[934px]:hidden flex-1 flex justify-end">
                <button onClick={() => setIsMenuOpen(true)} className="text-white" aria-label="Open menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 30 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className={`fixed inset-0 bg-[#a92a4a] z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out min-[934px]:hidden`}>
          <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)} className="text-white" aria-label="Close menu">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 30 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full -mt-16 text-white text-2xl font-bold gap-8">
              <Link href={workLinkHref} className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Work</Link>
              <Link href="/about" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>About Me</Link>
              <div className="flex gap-6 items-center pt-8">
                  {socialLinks.map((icon, i) => (
                      <a target="_blank" rel="noopener noreferrer" key={i} href={icon.href} aria-label={icon.label} className="text-white hover:text-gray-300">
                          {icon.svg}
                      </a>
                  ))}
              </div>
          </nav>
      </div>
    </>
  );
} 