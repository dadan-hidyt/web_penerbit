import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function GuestLayout({ children,title = 'Home' }) {
    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <main id="main_content" className="main">
        <Navbar/>
        {children}
        </main>
    </>
}
