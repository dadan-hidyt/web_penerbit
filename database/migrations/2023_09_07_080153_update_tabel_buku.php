<?php

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
        Schema::table('buku', function (Blueprint $table) {
            $table->integer('jumlah_halaman')->default(0);
            $table->year('tahun_terbit')->nullable();
            $table->text('tag')->nullable();
            $table->text('deskripsi')->nullable();
            $table->integer('berat_buku')->default(0);
            $table->string('dimensi')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('buku', function (Blueprint $table) {
            //
        });
    }
};
