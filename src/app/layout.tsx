import { Header } from "@/components/header/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "MovieDB",
    description: "Movie catalog powered by TMDB",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk" className={`${geistSans.variable} ${geistMono.variable}`}>
            <body>
                <Header />

                <main>{children}</main>
            </body>
        </html>
    );
}
