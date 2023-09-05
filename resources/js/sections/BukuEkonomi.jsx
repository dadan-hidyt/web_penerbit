import CardBukuItem from "@/Components/CardBukuItem";
import { usePage } from "@inertiajs/react";

export default function BukuEkonomi({children}){
    const {buku_kategori_pilihan} = usePage().props;
    console.log(buku_kategori_pilihan);
    return buku_kategori_pilihan ? <>
    <div className="row">
            {buku_kategori_pilihan.map(function(e){
                return <CardBukuItem dataBuku={e}/> 
            })}        
       </div>
    </>
    : <h1>Tidak ada</h1>;
}