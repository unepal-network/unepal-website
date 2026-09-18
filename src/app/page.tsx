import type { Metadata } from 'next';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'uNepal — Your Nepali world, connected',
  description: 'Your people, your stories, your everyday life. Discover uNepal: the social and community app for Nepalese everywhere, with Hamro TV, Bazaar and local connections.',
  alternates: { canonical: 'https://www.unepal.com/' },
  openGraph: {
    type: 'website',
    url: 'https://www.unepal.com/',
    siteName: 'uNepal',
    title: 'uNepal — Your Nepali world, connected',
    description: 'Your people, your stories, your everyday life. Find your Nepalese community, wherever you are.',
    images: [{ url: 'https://www.unepal.com/assets/site-2026/hero-community.webp', width: 1355, height: 1161, alt: 'uNepal — connecting Nepalese communities everywhere' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'uNepal — Your Nepali world, connected',
    description: 'Your people, your stories, your everyday life. Find your Nepalese community, wherever you are.',
    images: ['https://www.unepal.com/assets/site-2026/hero-community.webp'],
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'uNepal',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'SocialNetworkingApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
    url: 'https://www.unepal.com/',
    description: 'A social and community app for Nepalese everywhere, with a home feed, Hamro TV, Bazaar, business discovery and messaging.',
    image: 'https://www.unepal.com/assets/logo.png',
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><LandingPage /></>;
}
