import GuestLayout from "@/Layouts/GuestLayout";

export default function DetailBuku({children,auth,id_buku,slug}){
    return <>
        <GuestLayout title="detail Buku">
            <h1>{id_buku}-{slug}</h1>
        </GuestLayout>
    </>
}