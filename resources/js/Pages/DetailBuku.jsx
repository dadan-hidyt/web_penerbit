import BreadCrumb from "@/Components/BreadCrumb";
import BreadCrumbItem from "@/Components/BreadCrumbItem";
import GuestLayout from "@/Layouts/GuestLayout";

export default function DetailBuku({ children, auth, id_buku, slug }) {
    return <>
        <GuestLayout title="detail Buku">
            <BreadCrumb>
                <BreadCrumbItem link="home">Katalog</BreadCrumbItem>
                <BreadCrumbItem active={true} link="home">{slug}</BreadCrumbItem>
            </BreadCrumb>
            <div className="detail_book mb-3 container">
                <div className="bg-white mt-2 p-4 row rounded">
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
                                <a href="">Selengkapnya...</a>
                            </p>
                        </div>
                        <div className="detail-buku">
                            <div className="fw-bold mb-2">Detail Buku</div>
                            <ul className="d-flex justify-content-between m-none p-none">
                                <li><div className="fw-bold">Author:</div> <span className="d-block"><i className="fa fa-user-o" style={{ 'margin-right':'5px' }}></i>Indra Dadan</span></li>
                                <li><div className="fw-bold">ISBN:</div><span className="d-block">09220203</span></li>
                                <li><div className="fw-bold">Harga:</div><span className="d-block"> Rp.50.000,00</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </GuestLayout>
    </>
}