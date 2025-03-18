'use client';

import React from 'react';
import { providerData } from '../mockData';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Location() {
  const { location } = providerData;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Location</h2>
      
      {/* Map Placeholder */}
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
        <div className="flex items-center justify-center text-gray-400">
          Map will be displayed here
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start mb-4">
        <FaMapMarkerAlt className="w-5 h-5 text-gray-600 mt-1 mr-3" />
        <div>
          <p className="text-gray-900">{location.address}</p>
          <p className="text-gray-600">
            {location.city}, {location.state} {location.zip}
          </p>
        </div>
      </div>

      {/* Get Directions Button */}
      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
        Get Directions
      </button>
    </div>
  );
} 