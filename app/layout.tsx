import React from 'react';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'Provider Profile',
  description: 'Find and book services with qualified providers',
};

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 