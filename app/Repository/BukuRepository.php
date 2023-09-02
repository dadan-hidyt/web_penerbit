<?php
namespace App\Repository;

use App\Models\Buku;

class BukuRepository{
    public function getBukuPopuler(){
        return Buku::wherePopuler(1);
    }
}