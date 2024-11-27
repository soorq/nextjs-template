import s from './root-page.module.css';
import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';

export function RootPage() {
	return (
		<>
			<Header />
			<main className={`${s.wrapper} container`}>
				<Hero />
			</main>
		</>
	);
}
