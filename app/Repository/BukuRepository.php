<?php
namespace App\Repository;

use App\Models\Buku;
use mysqli_sql_exception;

class BukuRepository{
    public function getBukuPopuler(){
        return Buku::wherePopuler(1);
    }
    public function getDetailBuku(int $id, ?string $slug = null){
        return Buku::whereSlug($slug)->with('kategori')->find($id);
    }
    public function cariBuku($q){
        return Buku::where('penulis','LIKE',"%$q%")->orWhere('judul','LIKE',"%{$q}%")->with('kategori')->get();
    }
    public function getBukuByKategori($id){
        return Buku::whereBukuKategoriId($id);
    }
}