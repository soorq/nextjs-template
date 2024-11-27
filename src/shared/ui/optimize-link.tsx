'use client';
import { useCallback, useEffect, useRef, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface OptimizedLinkProps {
	href: string;
	children: ReactNode;
	prefetch?: boolean;
	prefetchTimeout?: number;
}

export function OptimizedLink({
	href,
	children,
	prefetch = true,
	prefetchTimeout = 2000,
}: OptimizedLinkProps) {
	const router = useRouter();
	// eslint-disable-next-line no-undef
	const timeoutRef = useRef<NodeJS.Timeout>();
	const isMounted = useRef(true);

	const prefetchPage = useCallback(() => {
		if (prefetch) {
			timeoutRef.current = setTimeout(() => {
				if (isMounted.current) {
					router.prefetch(href);
				}
			}, prefetchTimeout);
		}
	}, [href, prefetch, prefetchTimeout, router]);

	useEffect(() => {
		return () => {
			isMounted.current = false;
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return (
		<Link href={href} onMouseEnter={prefetchPage} onTouchStart={prefetchPage}>
			{children}
		</Link>
	);
}
