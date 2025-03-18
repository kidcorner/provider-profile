'use client';

import React from 'react';
import { providerData } from './mockData';
import Header from './components/Header';
import ServiceDetails from './components/ServiceDetails';
import TimeSlots from './components/TimeSlots';
import Reviews from './components/Reviews';
import Location from './components/Location';

export default function ProviderProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <ServiceDetails />
            <TimeSlots />
            <Reviews />
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-1">
            <Location />
          </div>
        </div>
      </main>
    </div>
  );
} 