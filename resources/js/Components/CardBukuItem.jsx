import { Link } from "@inertiajs/react";

export default function CardBukuItem({ props }) {
    return <>
        <div className="col-6 book_item col-md-2 mb-4">
            <div className="bg-white overflow-hidden">
                <img className="rounded" style={{ width: '100%' }} src="https://static.buku.kemdikbud.go.id/content/thumbnail/Cover_Kelas_XI_B_Indonesia_BS.png" alt="" />
                <div className="book_meta">
                    <span className="badge my-2 bg-warning">Pendidikan</span>
                    <span className="title  d-block">
                      <Link href={route('buku.detail',{id_buku:10,slug:"buku-pendidikan-agama-islam"})}>
                        <small>Buku Pendidikan Aga...</small>
                      </Link>
                    </span>
                    <span className="price my-1 fs-5 fw-bold text-primary d-block">
                        Rp. 50.000
                    </span>
                </div>
            </div>
        </div>
    </>
}