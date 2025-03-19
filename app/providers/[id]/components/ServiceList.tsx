'use client';

import React from 'react';
import { providerData } from '../mockData';
import { FaClock, FaUsers, FaCalendar } from 'react-icons/fa';

export default function ServiceList() {
  const { services } = providerData;

  return (
    <div className="space-y-6">
      {services.map((service) => (
        <div key={service.id} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            <div className="text-purple-600 font-semibold">
              ${service.price} <span className="text-gray-500 text-sm">/ {service.duration}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">{service.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center text-gray-600">
              <FaClock className="w-5 h-5 mr-2" />
              <span>{service.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaUsers className="w-5 h-5 mr-2" />
              <span>{service.ageRange}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaCalendar className="w-5 h-5 mr-2" />
              <span>{service.schedule}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {service.timeSlots.map((slot, index) => (
                <span key={index} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                  {slot}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 