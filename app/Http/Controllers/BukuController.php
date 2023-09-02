<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BukuController extends Controller
{
    public function detailBuku($id_buku,$slug){
        return inertia('DetailBuku',[
            'slug' => $slug,
            'id_buku' => $id_buku,
        ]);
    }
    public function katalog(){
        return inertia('Katalog',[
            'title' => "Katalog"
        ]);
    }
}
