<?php

namespace App\Repository;

use App\Models\BukuKategori;

class KategoriRepository{
    public function getAll(){

    }
    public function getKategoriPopuler(){
        return BukuKategori::limit(10)->get();
    }
}