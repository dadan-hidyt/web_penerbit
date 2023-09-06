import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function GuestLayout({ children,title = 'Home' ,pageCurrent = null}) {
    if(pageCurrent) {
        var classForNavbar = pageCurrent;
    } else {
        var classForNavbar = 'default';
    }
    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <main id="main_content" className="main">
        <Navbar className={classForNavbar}/>
        {children}
        <Footer />
        </main>
    </>
}
