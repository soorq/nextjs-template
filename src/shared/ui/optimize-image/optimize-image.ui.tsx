'use client';
import s from './optimize-image.module.css';
import { useState } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
	src: string;
	alt: string;
	width: number;
	height: number;
	priority?: boolean;
}

export function OptimizedImage({ src, alt, width, height, priority = false }: OptimizedImageProps) {
	const [isLoading, setLoading] = useState(true);

	return (
		<div className={s.wrapper}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				priority={priority}
				quality={90}
				className={`${s.image} ${isLoading ? s.image__loading : ''}`}
				onLoadingComplete={() => setLoading(false)}
				sizes='(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw'
			/>
		</div>
	);
}
