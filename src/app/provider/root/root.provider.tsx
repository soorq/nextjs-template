import { ThemeProvider } from "../theme";

export function RootProvider({ children }: Readonly<React.PropsWithChildren>) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
