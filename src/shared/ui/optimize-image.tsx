'use client';
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
		<div className='aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg'>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				priority={priority}
				quality={90}
				className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
				onLoadingComplete={() => setLoading(false)}
				sizes='(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw'
			/>
		</div>
	);
}
