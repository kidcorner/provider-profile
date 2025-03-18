export const providerData = {
  title: "College Media Education Consultant Lessons",
  description: "Experienced college media education consultant offering personalized lessons to help students excel in their media studies.",
  rating: 4.8,
  totalReviews: 127,
  price: "$50",
  duration: "60 min",
  location: {
    address: "1234 Oak Street",
    city: "San Francisco",
    state: "CA",
    zip: "94110",
    businessHours: [
      { day: "Mon", hours: "9:00 AM - 5:00 PM" },
      { day: "Tue", hours: "9:00 AM - 5:00 PM" },
      { day: "Wed", hours: "9:00 AM - 5:00 PM" },
      { day: "Thu", hours: "9:00 AM - 5:00 PM" },
      { day: "Fri", hours: "9:00 AM - 5:00 PM" },
      { day: "Sat", hours: "Closed" },
      { day: "Sun", hours: "Closed" }
    ]
  },
  timeSlots: [
    {
      date: "Mon, Mar 18",
      slots: [
        { time: "11:00 AM", available: true },
        { time: "12:00 PM", available: true },
        { time: "1:00 PM", available: false },
        { time: "2:00 PM", available: true },
        { time: "3:00 PM", available: true }
      ]
    },
    {
      date: "Tue, Mar 19",
      slots: [
        { time: "10:00 AM", available: true },
        { time: "11:00 AM", available: false },
        { time: "1:00 PM", available: true },
        { time: "2:00 PM", available: true },
        { time: "4:00 PM", available: true }
      ]
    }
  ],
  ratingDistribution: {
    5: 85,
    4: 25,
    3: 10,
    2: 5,
    1: 2
  },
  reviews: [
    {
      id: 1,
      author: "Emily R.",
      rating: 5,
      date: "March 15, 2024",
      comment: "The consultant was extremely knowledgeable and helped me understand complex media concepts. Great experience!"
    },
    {
      id: 2,
      author: "James M.",
      rating: 4,
      date: "March 10, 2024",
      comment: "Very informative sessions. The practical exercises were particularly helpful."
    },
    {
      id: 3,
      author: "Sarah L.",
      rating: 5,
      date: "March 8, 2024",
      comment: "Excellent teaching style and very patient. Would highly recommend!"
    },
    {
      id: 4,
      author: "Michael P.",
      rating: 5,
      date: "March 5, 2024",
      comment: "Really helped me improve my understanding of media production."
    }
  ],
  images: [
    {
      id: 1,
      url: "/provider1.jpg",
      alt: "Teaching session"
    },
    {
      id: 2,
      url: "/provider2.jpg",
      alt: "Workshop"
    },
    {
      id: 3,
      url: "/provider3.jpg",
      alt: "Equipment demonstration"
    }
  ],
  availability: [
    {
      date: "2024-03-20",
      slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"]
    },
    {
      date: "2024-03-21",
      slots: ["10:00 AM", "1:00 PM", "3:00 PM"]
    }
  ]
}; 