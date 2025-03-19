'use client';

import React from 'react';
import { providerData } from '../mockData';
import { FaStar, FaHeart, FaShare } from 'react-icons/fa';

export default function Header() {
  const { name, rating, totalReviews } = providerData;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{name}</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <FaStar className="text-yellow-400 w-5 h-5" />
              <span className="ml-1 text-gray-900">{rating}</span>
            </div>
            <span className="text-gray-600">({totalReviews} reviews)</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="text-purple-600 hover:text-purple-700">
            <FaHeart className="w-6 h-6" />
          </button>
          <button className="text-purple-600 hover:text-purple-700">
            <FaShare className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6 border-t border-gray-200 pt-4">
        <button className="text-purple-600 font-medium">Classes</button>
        <button className="text-gray-600 hover:text-purple-600">Events</button>
        <button className="text-gray-600 hover:text-purple-600">About</button>
      </nav>
    </div>
  );
} 