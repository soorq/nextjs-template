import { Anek_Gujarati as FontSans } from "next/font/google";
import { GoogleAnalytic } from "@/widgets/google-analytic";
import { RootProvider } from "@/app/provider/root";
import type { Metadata } from "next";
import "@/shared/styles/globals.css";

const sans = FontSans({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
    preload: true,
    variable: "--font-sans",
});

const $app = process.env["NEXT_PUBLIC_APP_URL"] as string;

export const metadata: Metadata = {
    metadataBase: new URL($app),
    title: {
        template: "%s | Your Website",
        default: "Your Website",
    },
    description: "Your website description",
    keywords: ["nextjs", "your", "keywords"],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    authors: {
        name: "Soorq",
        url: "https://github.com/soorq",
    },
    verification: {
        google: "your-google-verification-code",
        yandex: "your-yandex-verification-code",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={sans.variable}>
                <RootProvider>{children}</RootProvider>

                <GoogleAnalytic />
            </body>
        </html>
    );
}
