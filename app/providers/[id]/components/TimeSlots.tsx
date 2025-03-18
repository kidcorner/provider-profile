'use client';

import React from 'react';
import { providerData } from '../mockData';

export default function TimeSlots() {
  const { timeSlots } = providerData;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Available Time Slots</h2>
      
      <div className="space-y-6">
        {timeSlots.map((day, index) => (
          <div key={day.date}>
            <h3 className="text-lg font-medium mb-3">{day.date}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {day.slots.map((slot, slotIndex) => (
                <button
                  key={`${day.date}-${slot.time}`}
                  className={`
                    py-2 px-4 rounded-lg text-sm font-medium
                    ${slot.available
                      ? 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }
                  `}
                  disabled={!slot.available}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 