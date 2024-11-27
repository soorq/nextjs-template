import { OptimizedImage } from '@/shared/ui/optimize-image';
import { OptimizedLink } from '@/shared/ui/optimize-link';
import { Button } from '@/shared/ui/button';
import s from './header.module.css';

export function Header() {
	return (
		<header className={`${s.header} container`}>
			<div className={s.logo}>
				<OptimizedImage alt='Logo' src='/next.svg' priority height={60} width={200} />
			</div>
			<nav className={s.nav}>
				<OptimizedLink href='https://nextjs.org' prefetch prefetchTimeout={200}>
					<Button variant='default' size='lg'>
						Framework
					</Button>
				</OptimizedLink>
				<OptimizedLink href='https://github.com/soorq' prefetch prefetchTimeout={200}>
					<Button variant='default' size='lg'>
						Developer
					</Button>
				</OptimizedLink>
			</nav>
		</header>
	);
}
