<?php

namespace App\Http\Controllers;

use App\Models\BukuKategori;
use App\Repository\BukuRepository;
use App\Repository\KategoriRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public $kategori_pilihan = 2;
    public KategoriRepository $kategoriRepository;
    public BukuRepository $bukuRepository;
    public function __construct()
    {
        $this->kategoriRepository = new KategoriRepository;
        $this->bukuRepository = new BukuRepository;
    }
    public function __invoke()
    {
        return Inertia::render('Welcome', [
            'kategori' => BukuKategori::all(['id','nama_kategori','slug']),
            'kategori_pilihan' => BukuKategori::find($this->kategori_pilihan, ['nama_kategori']),
            'buku_kategori_pilihan' => $this->bukuRepository
                ->getBukuByKategori($this->kategori_pilihan)
                ->take(10)
                ->with('kategori')
                ->get(),
            'kategori' => BukuKategori::skip(0)
                ->take(10)
                ->get(['id', 'nama_kategori', 'slug']),
            'buku_populer' => $this->bukuRepository
                ->getBukuPopuler()
                ->with('kategori')
                ->take(10)
                ->get(),
        ]);
    }
}
