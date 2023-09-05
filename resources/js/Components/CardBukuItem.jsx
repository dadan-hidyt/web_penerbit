import { Link } from "@inertiajs/react";

export default function CardBukuItem({ props, className,dataBuku}) {
    if(dataBuku){
        return <>
        <div className={` ${className ? className : 'col-6 col-md-2'} book_item mb-4`}>
            <div className="bg-white overflow-hidden">
                <img className="rounded" style={{ width: '100%' }} src="https://static.buku.kemdikbud.go.id/content/thumbnail/Cover_Kelas_XI_B_Indonesia_BS.png" alt="" />
                <div className="book_meta">
                    <span className="badge my-2 bg-warning">{dataBuku?.kategori?.nama_kategori}</span>
                    <span className="title  d-block">
                      <Link href={route('buku.detail',{id:dataBuku.id,slug:dataBuku.slug})}>
                        <small>
                            {dataBuku.judul ?? ''}
                        </small>
                      </Link>
                    </span>
                    <span className="price my-1 fs-5 fw-bold text-primary d-block">
                        Rp. {dataBuku.harga}
                    </span>
                </div>
            </div>
        </div>
    </>
    } else {
        return <>
        Nul
        </>
    }
  
}