'use client';

import { ThemeProvider as NextTheme } from 'next-themes';
import type { PropsWithChildren } from 'react';

export function ThemeProvider({ children }: Readonly<PropsWithChildren>) {
	return (
		<NextTheme
			attribute='class'
			defaultTheme='system'
			enableSystem
			themes={['orange', 'light', 'dark']}
			disableTransitionOnChange
		>
			{children}
		</NextTheme>
	);
}
