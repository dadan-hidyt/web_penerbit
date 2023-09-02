import KategoriItem from "@/Components/KategoriItem"
import { usePage } from "@inertiajs/react"

export default function KategoriBukuSection({children,props}){
    const {kategori: categories} = usePage().props;
    return <>
        <div className="row">
            {categories.map(function(e){
                return <KategoriItem data={e} key={e.id} >{e.nama_kategori}</KategoriItem>
            })}
        </div>
    </>
}