import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import Navbar from '@/Components/Navbar';
import SectionTitle from '@/Components/SectionTitle';
import BukuEkonomi from '@/sections/BukuEkonomi';
import BukuPopuler from '@/sections/BukuPopuler';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <Hero />
            <div className="bg-dadan p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-4 text-center">
                            <h3 className='fw-bold text-white'>50.000</h3>
                            <span className='text-white'>Katalog Buku</span>
                        </div>
                        <div className="col-4 text-center">
                            <h3 className='fw-bold text-white'>50.000</h3>
                            <span className='text-white'>Katalog Buku</span>
                        </div>
                    </div>
                </div>
            </div>
            <main className='main'>
               <div className="container">
                    <SectionTitle more={'Lihat Lainya'} link_more={'all'} title={'Buku Populer'} subtitle={'Lihat Buku Populer Kami'}/>
                    <BukuPopuler/>
                    <SectionTitle more={'Lihat Lainya'} link_more={'all'} title={'Buku Ekonomi'} subtitle={'Lihat buku kategori ekonomi'}/>
                    <BukuEkonomi/>
               </div>
            </main>
            <Footer/>
        </>
    );
}
