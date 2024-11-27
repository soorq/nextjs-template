import { OptimizedImage } from '@/shared/ui/optimize-image';
import s from './hero.module.css';

export function Hero() {
	return (
		<main className={s.main}>
			<div className={s.description}>
				<p>
					Get started by editing&nbsp;
					<code className={s.code}>src/widgets/hero/hero.ui.tsx</code>
				</p>
				<div>
					<a href='https://github.com/soorq' target='_blank' rel='noopener noreferrer'>
						By Soorq
					</a>
				</div>
			</div>

			<div className={s.center}>
				<OptimizedImage
					alt='Next.js Logo'
					src='/next.svg'
					width={180}
					height={37}
					priority
				/>
			</div>

			<div className={s.grid}>
				<a
					href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={s.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2>
						Docs <span>-&gt;</span>
					</h2>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>

				<a
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={s.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2>
						Learn <span>-&gt;</span>
					</h2>
					<p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
				</a>

				<a
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={s.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2>
						Templates <span>-&gt;</span>
					</h2>
					<p>Explore starter templates for Next.js.</p>
				</a>

				<a
					href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					className={s.card}
					target='_blank'
					rel='noopener noreferrer'
				>
					<h2>
						Deploy <span>-&gt;</span>
					</h2>
					<p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
				</a>
			</div>
		</main>
	);
}
