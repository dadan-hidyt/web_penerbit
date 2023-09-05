import CardBukuItem from "@/Components/CardBukuItem";

export default function BukuTerkait({ children, buku_terkait = null }) {
    console.log(buku_terkait)
    return <>
        <div className="row">
            {buku_terkait.map(function (e) {
                return <CardBukuItem dataBuku={e} />;
            })}
        </div>
    </>
}