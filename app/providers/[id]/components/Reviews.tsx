'use client';

import React from 'react';
import { providerData } from '../mockData';
import { FaStar } from 'react-icons/fa';

export default function Reviews() {
  const { reviews, ratingDistribution, rating, totalReviews } = providerData;
  
  // Calculate total reviews for distribution bars
  const totalDistributionReviews = Object.values(ratingDistribution).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Reviews</h2>
      
      {/* Overall Rating */}
      <div className="flex items-center mb-6">
        <div className="text-4xl font-bold mr-4">{rating}</div>
        <div>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`w-5 h-5 ${
                  star <= Math.round(rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-600 mt-1">{totalReviews} reviews</p>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="space-y-2 mb-8">
        {[5, 4, 3, 2, 1].map((stars) => (
          <div key={stars} className="flex items-center">
            <div className="w-12 text-sm text-gray-600">{stars} stars</div>
            <div className="flex-1 mx-4">
              <div className="h-2 rounded-full bg-gray-100">
                <div
                  className="h-2 rounded-full bg-yellow-400"
                  style={{
                    width: `${(ratingDistribution[stars] / totalDistributionReviews) * 100}%`
                  }}
                />
              </div>
            </div>
            <div className="w-12 text-sm text-gray-600 text-right">
              {ratingDistribution[stars]}
            </div>
          </div>
        ))}
      </div>

      {/* Review List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-t pt-6">
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600">{review.date}</span>
            </div>
            <p className="text-gray-600 mb-2">{review.comment}</p>
            <p className="text-sm font-medium">{review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 