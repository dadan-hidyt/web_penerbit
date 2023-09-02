import CardBukuItem from "@/Components/CardBukuItem";
import { usePage } from "@inertiajs/react";

export default function BukuPopuler({props}){
   const {buku_populer} = usePage().props;
    return <>
        <div className="row">
           {
            buku_populer ? buku_populer.map(function(e){
                return  <CardBukuItem key={e.id} dataBuku={e} />
            }) : 'Tidak ada buku'
           }
        </div>
    </>
}