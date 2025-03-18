import './globals.css';

export const metadata = {
  title: 'Provider Profile',
  description: 'Find and book services with qualified providers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 