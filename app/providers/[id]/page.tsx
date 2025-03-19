'use client';

import React from 'react';
import { providerData } from './mockData';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ServiceList from './components/ServiceList';
import BookingForm from './components/BookingForm';

export default function ProviderProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Header />
            <Gallery />
            <ServiceList />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
} 