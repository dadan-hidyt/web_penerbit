<?php

use App\Models\BukuKategori;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('buku', function (Blueprint $table) {
            $table->id();
            $table->string('isbn',30)->uniqid();
            $table->string('cover',225)->default('thumb.jpg');
            $table->string('judul');
            $table->string('slug')->uniqid();
            $table->string('sinopsis');
            $table->json('penulis')->nullable();
            $table->integer('edisi')->default(1);
            $table->string('harga');
            $table->json('link_toko_online');
            $table->boolean('populer')->default(0);
            $table->foreignIdFor(BukuKategori::class)->nullable()->constrained('kategori_buku','id')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bukus');
    }
};
