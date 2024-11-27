import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Example dashboard app built using the components.',
};

export default function RootPage() {
	return (
		<main className='min-h-[100vh] min-w-[100vw] flex items-center justify-center'>
			<div className='flex flex-col items-center justify-center gap-4'>
				<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
					NextJS shadcn/ui demo
				</h1>
			</div>
		</main>
	);
}
