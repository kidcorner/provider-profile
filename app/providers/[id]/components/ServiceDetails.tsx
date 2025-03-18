'use client';

import React from 'react';
import { providerData } from '../mockData';
import { FaClock, FaDollarSign } from 'react-icons/fa';

export default function ServiceDetails() {
  const { description, price, duration } = providerData;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">About This Service</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <div className="flex items-center mb-2">
            <FaDollarSign className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-sm text-gray-600">Price</span>
          </div>
          <p className="text-lg font-semibold">{price}</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <div className="flex items-center mb-2">
            <FaClock className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-sm text-gray-600">Duration</span>
          </div>
          <p className="text-lg font-semibold">{duration}</p>
        </div>
      </div>
    </div>
  );
} 