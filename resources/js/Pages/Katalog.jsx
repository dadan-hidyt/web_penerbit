import CardBukuItem from "@/Components/CardBukuItem";
import GuestLayout from "@/Layouts/GuestLayout";
import { router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Katalog({ props, buku, kategori, from_kategori_search, current_kategori }) {
    const [kataKunci,setKataKunci] = useState(null)
    const [searchLoading,setSearchLoading] = useState(false);
    const [dataBuku,setDataBuku] = useState();
    useEffect(function(){
        if(buku){
            setDataBuku(buku);
        }
    },[])
    const searchBuku = function(e){
        const searchKeyword = e.target.value;
        if(searchKeyword){
            setDataBuku(buku);
        }
        setKataKunci(searchKeyword);
        
    }

    function search(){
        setSearchLoading(true);
        const response = axios.get(route('buku.searchBuku',{
            q : kataKunci,
        }));
        response.then(function(e){
            setSearchLoading(false)
            setDataBuku(e.data.buku);
        })
    }

    function renderBuku(){
         if(!searchLoading){
            return dataBuku?.length > 0 ? dataBuku.map(function (row) {
                return (
                    <CardBukuItem key={row.id} dataBuku={row} className="col-4 col-md-3" />
                )
            }) : 'Tidak ada'
         } else {
            return <>Loading...</>
         }
    }
    
    function isFromCategorySearch() {
        if (from_kategori_search) {
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
                                    <input onKeyDown={searchBuku} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button onClick={search} className="btn btn-primary" type="button" id="button-addon2">Button</button>
                                </div>
                            </div>
                            {isFromCategorySearch()}
                            <div className="row">
                             
                             {renderBuku()}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    </>
}