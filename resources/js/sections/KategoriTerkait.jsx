import CardBukuItem from "@/Components/CardBukuItem";

export default function KategoriTerkait({children,kategori = null}) {
    return <>
        <div className="row">
        <CardBukuItem/>
        <CardBukuItem/>
        <CardBukuItem/>
        <CardBukuItem/>
        </div>
    </>
}