import BreadCrumb from "@/Components/BreadCrumb";
import BreadCrumbItem from "@/Components/BreadCrumbItem";
import Modal from "@/Components/Modal/Modal";
import ModalButton from "@/Components/Modal/ModalButton";
import SectionTitle from "@/Components/SectionTitle";
import GuestLayout from "@/Layouts/GuestLayout";
import KategoriTerkait from "@/sections/KategoriTerkait";

export default function DetailBuku({ children, auth, id_buku, slug }) {
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
                            <img src="https://static.buku.kemdikbud.go.id/content/image/coverteks/coverkurikulum21/Bermain%20Berbasis%20Buku-PAUD-COVER.png" alt="" />
                        </div>
                        <div className="img-detail col-12 col-md-8">
                            <div className="fw-bold fs-4">Buku Panduan Guru Belajar dan Bermain Berbasis Buku untuk Satuan PAUD</div>
                            <div className="badge mt-2 mb-2 bg-warning">Pendidikan</div>
                            <div className="button_detail mb-2">
                                <button className="btn btn-outline-primary">Beli</button>
                                &nbsp;
                                <button className="btn btn-outline-warning">Tokopedia</button>
                            </div>
                            <div className="sinopsis">
                                <div className="fw-bold">Sinopsis:</div>
                                <p style={{ 'font-size': 'small' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit animi hic doloremque tempore tenetur ratione distinctio numquam amet nesciunt laborum, quae adipisci, odio, dolore ea quidem dignissimos praesentium ducimus.
                                    <ModalButton target={'full_sinopsis'}>Selengkapnya</ModalButton>
                                </p>
                                <Modal backdrop={'false'} id='full_sinopsis' title="Sinopsis Buku">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos laborum rem recusandae, magnam beatae nostrum dolorem corrupti ratione? Fugiat delectus, iure culpa error asperiores repudiandae quam officiis rem quasi.</p>
                                </Modal>
                            </div>
                            <div className="detail-buku">
                                <div className="fw-bold mb-1">Detail Buku</div>
                                <ul className="d-flex justify-content-between m-none p-none">
                                    <li><div className="d-block">Penulis:</div> <span style={{
                                        color: 'grey'
                                    }} className="d-block"><i className="fa fa-pencil" style={{ 'margin-right': '5px' }}></i>Indra Dadan</span></li>
                                    <li><div className="d-block">ISBN:</div><span style={{
                                        color: 'grey'
                                    }} className="d-block"><i className="fa fa-book"></i>&nbsp;09220203</span></li>
                                    <li><div className="d-block">Harga:</div><span style={{
                                        color: 'grey'
                                    }} className="d-block"> Rp.50.000,00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionTitle more={'Lihat semua'} link_more={'all'} title={'Kategori Terkait'} subtitle={'Lihat kategori terkait tentang pendidikan'} />
                <KategoriTerkait />
            </div>
        </GuestLayout>
    </>
}