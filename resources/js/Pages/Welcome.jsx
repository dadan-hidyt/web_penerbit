import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import SectionTitle from '@/Components/SectionTitle';
import GuestLayout from '@/Layouts/GuestLayout';
import BukuEkonomi from '@/sections/BukuEkonomi';
import BukuPopuler from '@/sections/BukuPopuler';
import KategoriBukuSection from '@/sections/KategoriBukuSection';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, kategori_pilihan }) {
    return (
        <>
            <GuestLayout title="Home">
                <Head title="Welcome" />
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
                <div className="container">
                    <SectionTitle more={'Lihat Lainya'} link_more={'all'} title={'Buku Populer'} subtitle={'Lihat Buku Populer Kami'} />
                    <BukuPopuler />
                    <SectionTitle more={'Lihat Lainya'} link_more={'all'} title={'Kategori'} subtitle={'Lihat Kategori buku di megaperss'} />
                    <KategoriBukuSection />
                    <SectionTitle more={'Lihat Lainya'} link_more={'all'} title={kategori_pilihan.nama_kategori ?? '?'} subtitle={`Lihat buku kategori ${kategori_pilihan.nama_kategori ?? ''}`} />
                    <BukuEkonomi />
                </div>
            </GuestLayout>

        </>
    );
}
