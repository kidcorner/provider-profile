import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Providers',
  description: 'Find and connect with qualified service providers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 