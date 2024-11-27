import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

// TreeShaking activating
const RootPage = dynamic(() => import('@/screens/root').then(p => p.RootPage), { ssr: false });

// Seo meta tags for page
export const metadata: Metadata = {
	title: 'Root Page',
	description: 'Example dashboard app built using the components.',
};

export default RootPage;
