'use client';

import React from 'react';
import Image from 'next/image';
import { providerData } from '../mockData';
import { FaExpand } from 'react-icons/fa';

export default function Gallery() {
  const { gallery } = providerData;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Photo Gallery</h2>
        <button className="text-purple-600 text-sm hover:text-purple-700">
          View all photos
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square rounded-lg overflow-hidden group"
          >
            <Image
              src={item.url}
              alt={item.caption}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
              <button className="self-end text-white">
                <FaExpand className="w-5 h-5" />
              </button>
              <p className="text-white text-sm">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 