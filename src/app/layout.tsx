import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Business Wisdom - Ancient Knowledge for Modern Success',
  description:
    'Vasudhaiva Kutumbakam - The world is one family. Bridge ancient Bharatiya wisdom with modern business concepts. Learn finance, leadership, management, and career skills through timeless principles.',
  keywords: [
    'business education',
    'Chanakya',
    'Arthashastra',
    'Indian business wisdom',
    'finance basics',
    'leadership',
    'management',
    'soft skills',
    'career skills',
  ],
  authors: [{ name: 'Dr Krishnan Pasupathi' }],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    title: 'Business Wisdom - Ancient Knowledge for Modern Success',
    description: 'Vasudhaiva Kutumbakam - The world is one family. Learn modern business through ancient wisdom.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
