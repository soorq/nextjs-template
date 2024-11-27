import { ThemeProvider as NextTheme } from "next-themes";

export function ThemeProvider({ children }: Readonly<React.PropsWithChildren>) {
    return (
        <NextTheme
            attribute="class"
            defaultTheme="system"
            enableSystem
            themes={["orange", "light", "dark"]}
            disableTransitionOnChange
        >
            {children}
        </NextTheme>
    );
}
