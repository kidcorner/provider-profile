'use client';

import React from 'react';
import { providerData } from '../mockData';
import { FaStar, FaShare, FaHeart } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  const { title, rating, totalReviews, images } = providerData;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {images.map((image, index) => (
            <div key={image.id} className="aspect-w-4 aspect-h-3 relative rounded-lg overflow-hidden">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Title and Actions */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 w-5 h-5" />
                <span className="ml-2 text-lg font-semibold">{rating}</span>
              </div>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600">{totalReviews} reviews</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FaShare className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FaHeart className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 