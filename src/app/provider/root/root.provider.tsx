import type { PropsWithChildren } from 'react';
import { ThemeProvider } from '../theme';

export function RootProvider({ children }: Readonly<PropsWithChildren>) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
