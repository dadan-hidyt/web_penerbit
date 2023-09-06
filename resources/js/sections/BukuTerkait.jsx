import CardBukuItem from "@/Components/CardBukuItem";

export default function BukuTerkait({ children, buku_terkait = null }) {
    return (
        buku_terkait.length > 0 ?   <div className="row">
        {buku_terkait.map(function (e) {
            return <CardBukuItem dataBuku={e} />;
        })}
    </div> : <p className="alert alert-info">Tidak ada buku yang terkait</p>
    )
}