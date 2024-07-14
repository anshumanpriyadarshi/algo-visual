import type { Metadata } from "next";
import { Biryani } from 'next/font/google'
import "./globals.css";
 
// If loading a variable font, you don't need to specify the font weight
const inter = Biryani({weight: "400", subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Algo Visual",
    description: "App to visualize sorting algorithms",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className}>
            <body>{children}</body>
        </html>
    );
}
