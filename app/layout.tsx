import './globals.css'
import {Figtree} from 'next/font/google'
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserID from "@/actions/getSongsByUserID";

const font = Figtree({subsets: ['latin']})

export const metadata = {
    title: 'Spotify Clone',
    description: 'Spotify clone with Next.js 13.4 to listen to music',
}

export const revalidate = 0;

export default async function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const userSongs = await getSongsByUserID();

    return (
        <html lang="en">
        <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
            <UserProvider>
                <ModalProvider/>
                <Sidebar songs={userSongs}>
                    {children}
                </Sidebar>
            </UserProvider>
        </SupabaseProvider>
        </body>
        </html>
    )
}
