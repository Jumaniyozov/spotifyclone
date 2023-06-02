import './globals.css'
import {Figtree} from 'next/font/google'
import Sidebar from "@/components/Sidebar";

const font = Figtree({subsets: ['latin']})

export const metadata = {
    title: 'Spotify Clone',
    description: 'Spotify clone with Next.js 13.4 to listen to music',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className}>
        <Sidebar>
            {children}
        </Sidebar>
        </body>
        </html>
    )
}
