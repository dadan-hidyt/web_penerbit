<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buku extends Model
{
    protected $table = 'buku';
    use HasFactory;
    public function kategori()
    {
        return $this->belongsTo(BukuKategori::class,'buku_kategori_id');
    }
}
