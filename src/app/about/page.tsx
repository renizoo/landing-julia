'use client'

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Typewriter } from 'react-simple-typewriter'

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#800000] text-white">
      <Header isScrolled={isScrolled} />

      {/* About Me Content */}
      <main className="pt-16">
        <section id="about" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-12 text-left">About Me</h2>
                <div className="flex flex-col items-center">
                    <img
                        src="/images/perfil.jpg" // Placeholder
                        alt="A picture of Julia Rocha"
                        className="w-48 h-48 rounded-full object-cover mb-12"
                    />
                    <div className="max-w-xl text-left text-lg space-y-4 text-gray-300">
                        <p>I have a degree in Architecture.</p>
                        <p>I work as director, art director, motion and graphic designer.</p>
                        <p>
                            Worked as art director, motion and graphic designer in several design offices .
                        </p>
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white break-all">
                            <Typewriter
                                words={['Julia Rocha']}
                                cursorStyle='‎'
                            />
                        </h3>
                    </div>
                </div>
                <div className="text-center mt-20 text-gray-400 text-sm">
                    <a target="_blank" href="https://youtu.be/WlatHB9jZ1g?si=QbSmWH0lpZe81v1g">Made for Julia with ❤️</a>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
} 