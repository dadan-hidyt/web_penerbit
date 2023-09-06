import BreadCrumb from "@/Components/BreadCrumb";
import BreadCrumbItem from "@/Components/BreadCrumbItem";
import Modal from "@/Components/Modal/Modal";
import ModalButton from "@/Components/Modal/ModalButton";
import SectionTitle from "@/Components/SectionTitle";
import GuestLayout from "@/Layouts/GuestLayout";
import BukuTerkait from "@/sections/BukuTerkait";

export default function DetailBuku({ children, auth, id_buku, slug, detail_buku,buku_terkait }) {
    return <>
        <GuestLayout title="detail Buku">
            <BreadCrumb>
                <BreadCrumbItem link="home">Katalog</BreadCrumbItem>
                <BreadCrumbItem active={true} link="home">{slug}</BreadCrumbItem>
            </BreadCrumb>
            <div className="container">
                <div className="detail_book mb-3">
                    <div className="bg-white mt-2 p-4 border row rounded">
                        <div className="img_book col-12 col-md-3">
                            <img src={detail_buku.cover ? '/'+detail_buku.cover : 'https://placehold.co/800?text=Hello+World&font=roboto'} alt="" />
                        </div>
                        <div className="img-detail col-12 col-md-8">
                            <div className="fw-bold fs-4">{detail_buku.judul ?? ''}</div>
                            <div className="badge mt-2 mb-2 bg-warning">{detail_buku.kategori.nama_kategori ?? 'Tanpa Kategori'}</div>
                            <div className="button_detail mb-2">
                                <button className="btn btn-outline-primary">Beli</button>
                                &nbsp;
                                <button className="btn btn-outline-warning">Tokopedia</button>
                            </div>
                            <div className="sinopsis">
                                <div className="fw-bold">Sinopsis:</div>
                                <p style={{ 'font-size': 'small' }}>
                                    {detail_buku.sinopsis.length > 200 ? detail_buku.sinopsis.substr(0, 150) : detail_buku.sinopsis}
                                    {detail_buku.sinopsis.length > 200 ? <ModalButton target={'full_sinopsis'}>Selengkapnya</ModalButton> : ''}
                                </p>
                                <Modal backdrop={'false'} id='full_sinopsis' title="Sinopsis Buku">
                                    <p style={{ fontSize: 'small' }}>
                                        {detail_buku.sinopsis}
                                    </p>
                                </Modal>
                            </div>
                            <div className="detail-buku">
                                <div className="fw-bold mb-1">Detail Buku</div>
                                <ul className="d-flex justify-content-between m-none p-none">
                                    <li><div className="d-block">Penulis:</div> <span style={{
                                        color: 'grey'
                                    }} className="d-block"><i className="fa fa-pencil" style={{ 'margin-right': '5px' }}></i>
                                        {detail_buku.penulis ? JSON.parse(detail_buku.penulis).join(',') : 'Anonim'}
                                    </span></li>
                                    <li><div className="d-block">ISBN:</div><span style={{
                                        color: 'grey'
                                    }} className="d-block"><i className="fa fa-book"></i>&nbsp;{detail_buku.isbn}</span></li>
                                    <li><div className="d-block">Harga:</div><span style={{
                                        color: 'grey'
                                    }} className="d-block"> Rp.{detail_buku.harga}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionTitle more={'Lihat semua'} link_more={'all'} title={'Kategori Terkait'} subtitle={`Lihat kategori terkait tentang ${detail_buku.kategori.nama_kategori}`} />
                <BukuTerkait buku_terkait={buku_terkait} />
            </div>
        </GuestLayout>
    </>
}