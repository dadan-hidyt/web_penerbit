import KategoriItem from "@/Components/KategoriItem"

export default function KategoriBukuSection({children,props}){
    return <>
        <div className="row">
            {[0,2,3,4,5,6,7].map(function(e){
                return <KategoriItem key={e} />
            })}
        </div>
    </>
}