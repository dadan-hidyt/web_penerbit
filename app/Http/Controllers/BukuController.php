<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use App\Models\BukuKategori;
use App\Repository\BukuRepository;
use Illuminate\Http\Request;

class BukuController extends Controller
{

    public BukuRepository $bukuRepository;
    public function __construct(BukuRepository $bukuRepository) {
        $this->bukuRepository = $bukuRepository;
    }
    public function detailBuku($id,$slug){
        $buku = $this->bukuRepository->getDetailBuku($id,$slug);
        return inertia('DetailBuku',[
            'detail_buku' => $buku,
            'buku_terkait' => $this->bukuRepository->getBukuByKategori($buku->kategori->id)->where('id','!=',$id)->with('kategori')->get(),
            'slug' => $slug,
            'id_buku' => $id,
        ]);
    }
    public function katalog($id = null,$slug = null){
        $buku = Buku::with('kategori')->get();
        if ( $id ) {
            $buku = $this->bukuRepository->getBukuByKategori($id)->with('kategori')->get();
        }
        return inertia('Katalog',[
            'current_kategori' =>$id,
            'kategori' => BukuKategori::all(),
            'buku' => $buku,
            'title' => "Katalog"
        ]);
    }
}
