import { Link } from "@inertiajs/react";

export default function KategoriItem({ children, props, data }) {
    return <>
        <div className="p-2 col-4 col-md-2">
            <Link style={{ textDecoration: 'none' }} href={route('buku.kategori', { id: data.id, slug: data.slug })}>
                <div className="bg-white bg-danger rounded p-2 text-center cursor-pointer shadow-sm border">
                    {children}
                </div>
            </Link>
        </div>
    </>
}