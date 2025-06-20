'use client'

import React, { useState, useEffect } from 'react';
import Header from './components/Header';

const thumbnails = [
  {
    thumbnailUrl: 'https://img.youtube.com/vi/PcSrxRCZxoo/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/PcSrxRCZxoo',
    alt: 'Video 1',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/Z6jZUXpsqvc/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/Z6jZUXpsqvc',
    alt: 'Video 2',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/8D0QsKlRNgM/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/8D0QsKlRNgM',
    alt: 'Video 3',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/BW1UiI1x9rQ/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/BW1UiI1x9rQ',
    alt: 'Video 4',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/OeslwZw6p8A/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/OeslwZw6p8A',
    alt: 'Video 5',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/UyYwkQHh9Fc/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/UyYwkQHh9Fc',
    alt: 'Video 6',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/qFiscQOjN4s/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/qFiscQOjN4s',
    alt: 'Video 7',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/sVF98wpZvbE/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/sVF98wpZvbE',
    alt: 'Video 8',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/ZPJBtnUTIxU/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/ZPJBtnUTIxU',
    alt: 'Video 9',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/VDWudTfgu7Q/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/VDWudTfgu7Q',
    alt: 'Video 10',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/trBGR9km5hw/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/trBGR9km5hw',
    alt: 'Video 11',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/3hjr-2Vp07c/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/3hjr-2Vp07c',
    alt: 'Video 12',
  },
];

export default function LandingPage() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#a92a4a] flex flex-col">
      <Header isScrolled={isScrolled} openVideo={!!openVideo} />

      {/* Main Content */}
      <main className={`flex-1 pt-16 transition-all duration-300 ${openVideo ? 'blur-md' : ''}`}>
        {/* Main Title */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-8 pb-4">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f7e7c1] text-center leading-tight">
            I&apos;m Art Director, Architect & Graphic Designer.
          </h1>
          <p className="mt-4 text-xl text-[#e6bfc7] text-center">Scroll down to see my work!</p>
        </div>

        {/* Thumbnails Grid */}
        <div id="work" className="grid grid-cols-1 md:grid-cols-4 gap-0 w-full">
          {thumbnails.map((thumb, idx) => (
            <button
              key={idx}
              className="aspect-video w-full h-full overflow-hidden focus:outline-none group relative"
              onClick={() => {
                setOpenVideo(thumb.youtubeUrl)
              }}
              aria-label={`Open video ${idx + 1}`}
            >
              <img
                src={thumb.thumbnailUrl}
                alt={thumb.alt}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              {/* Optional: Overlay play icon */}
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-16 h-16 text-white bg-black bg-opacity-50 rounded-full p-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </main>

      {/* Video Modal */}
      {openVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setOpenVideo(null)}
        >
          <div
            className="relative bg-black rounded-lg overflow-hidden shadow-xl w-[90vw] max-w-4xl aspect-video"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
              onClick={() => setOpenVideo(null)}
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={openVideo + '?autoplay=1'}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}