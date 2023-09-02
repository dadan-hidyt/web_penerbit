import CardBukuItem from "@/Components/CardBukuItem";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Katalog({ props }) {
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
                            <div className="row">
                                <CardBukuItem className="col-4 col-md-3" />
                                <CardBukuItem className="col-4 col-md-3" />
                                <CardBukuItem className="col-4 col-md-3" />
                                <CardBukuItem className="col-4 col-md-3" />
                                <CardBukuItem className="col-4 col-md-3" />
                                <CardBukuItem className="col-4 col-md-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    </>
}