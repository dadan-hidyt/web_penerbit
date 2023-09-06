import CardBukuItem from "@/Components/CardBukuItem";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Katalog({ props,buku,kategori,from_kategori_search,current_kategori }) {
    function isFromCategorySearch(){
        if(from_kategori_search) {
            return (
                buku.length > 0 ? <p className="alert alert-warning">Kategori <b>{current_kategori.nama_kategori ?? null}</b> ({buku.length} Buku)</p> : <p className="alert alert-warning">Tidak ada buku untuk kategori <b>{current_kategori.nama_kategori ?? null}</b></p>
            )
        }
    }
    return <>
        <GuestLayout>
            <div className="container katalog">
                <div className="p-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <div className="card-title">Kategori</div>
                                </div>
                                <div className="card-body">
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form_search">
                                <div class="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
                                </div>
                            </div>
                            {isFromCategorySearch()}
                            <div className="row">
                                {buku ? buku.map(function(row){
                                    return (
                                        <CardBukuItem dataBuku={row} className="col-4 col-md-3" />
                                    )
                                }) : 'Tidak ada'}
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    </>
}