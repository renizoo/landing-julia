'use client'

import React, { useState } from 'react';

const thumbnails = [
  {
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    alt: 'Video 1',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    alt: 'Video 2',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/l482T0yNkeo/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/l482T0yNkeo',
    alt: 'Video 3',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    alt: 'Video 1',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    alt: 'Video 2',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/l482T0yNkeo/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/l482T0yNkeo',
    alt: 'Video 3',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    alt: 'Video 1',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    alt: 'Video 2',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/l482T0yNkeo/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/l482T0yNkeo',
    alt: 'Video 3',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    alt: 'Video 1',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    alt: 'Video 2',
  },
  {
    thumbnailUrl: 'https://img.youtube.com/vi/l482T0yNkeo/hqdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/embed/l482T0yNkeo',
    alt: 'Video 3',
  },
];

const socialLinks = [
  { href: '#', label: 'Behance', svg: (
    <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M2 9.5V19h5.5c2.5 0 4.5-1.5 4.5-4s-2-3.5-4.5-3.5H4v-2H2zm2 4h3.5c1.5 0 2.5.7 2.5 2s-1 2-2.5 2H4v-4zm13.5-4C14 9.5 12 11 12 14s2 4.5 5.5 4.5S23 17 23 14s-2-4.5-5.5-4.5zm0 7c-1.5 0-2.5-1-2.5-2.5S16 11 17.5 11 20 12 20 14.5 19 16.5 17.5 16.5zM15 7h5v2h-5V7z"/></svg>
  ) },
  { href: '#', label: 'LinkedIn', svg: (
    <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48c0 1.65 1.33 2.98 2.98 2.98 1.65 0 2.98-1.33 2.98-2.98C7.96 4.83 6.63 3.5 4.98 3.5zM2.4 8.9h5.16V21H2.4V8.9zM9.34 8.9h4.94v1.65h.07c.69-1.31 2.38-2.7 4.9-2.7 5.24 0 6.2 3.45 6.2 7.94V21h-5.16v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43V21H9.34V8.9z"/></svg>
  ) },
  { href: '#', label: 'Instagram', svg: (
    <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-.5a1 1 0 100 2 1 1 0 000-2z"/></svg>
  ) },
  { href: '#', label: 'Vimeo', svg: (
    <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M22.23 7.82c-.09 2-1.48 4.74-4.18 8.13-2.79 3.53-5.14 5.3-7.06 5.3-1.19 0-2.2-1.1-3.03-3.29-.55-2.01-1.1-4.02-1.65-6.03-.61-2.2-1.26-3.3-1.95-3.3-.15 0-.67.31-1.56.92l-.94-1.22c.98-.86 1.95-1.72 2.93-2.58 1.32-1.14 2.31-1.74 2.97-1.8 1.56-.15 2.52.92 2.89 3.21.39 2.47.66 4.01.8 4.62.45 2.04.95 3.06 1.5 3.06.42 0 1.05-.67 1.89-2.01.84-1.34 1.29-2.36 1.36-3.07.12-1.16-.34-1.74-1.36-1.74-.48 0-.98.11-1.5.33 1.01-3.31 2.95-4.91 5.81-4.8 2.12.07 3.12 1.44 3 4.1z"/></svg>
  ) },
  { href: '#', label: 'Email', svg: (
    <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.29 6.71c.39.36 1.02.36 1.41 0L20 10.01V20H4z"/></svg>
  ) },
];

export default function LandingPage() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#a92a4a] flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        <nav className="flex gap-6 text-white font-bold text-lg">
          <a href="#work" className="hover:underline">Work</a>
          <a href="#about" className="hover:underline">About Me</a>
        </nav>
        <div className="flex gap-4 items-center">
          {socialLinks.map((icon, i) => (
            <a key={i} href={icon.href} aria-label={icon.label} className="text-white hover:text-gray-300">
              {icon.svg}
            </a>
          ))}
        </div>
      </header>

      {/* Main Title */}
      <div className="flex flex-col items-center justify-center flex-1 pt-8 pb-4">
        <h1 className="text-5xl md:text-6xl font-bold text-[#f7e7c1] text-center leading-tight">
          I&apos;m Director, Art Director, Motion & Graphic Designer.
        </h1>
        <p className="mt-4 text-xl text-[#e6bfc7] text-center">Scroll down to see my work!</p>
      </div>

      {/* Thumbnails Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
        {thumbnails.map((thumb, idx) => (
          <button
            key={idx}
            className="aspect-video w-full h-full overflow-hidden focus:outline-none group relative"
            onClick={() => setOpenVideo(thumb.youtubeUrl)}
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

      {/* Video Modal */}
      {openVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setOpenVideo(null)}
        >
          <div
            className="relative bg-black rounded-lg overflow-hidden shadow-lg w-[90vw] max-w-3xl aspect-video"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
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