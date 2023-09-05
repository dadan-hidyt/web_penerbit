<?php
namespace App\Repository;

use App\Models\Buku;

class BukuRepository{
    public function getBukuPopuler(){
        return Buku::wherePopuler(1);
    }
    public function getDetailBuku(int $id, ?string $slug = null){
        return Buku::whereSlug($slug)->with('kategori')->find($id);
    }
    public function getBukuByKategori($id){
        return Buku::whereBukuKategoriId($id);
    }
}