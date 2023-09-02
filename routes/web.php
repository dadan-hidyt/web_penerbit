<?php

use App\Http\Controllers\BukuController;
use App\Http\Controllers\ProfileController;
use App\Models\BukuKategori;
use App\Repository\BukuRepository;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'kategori' => BukuKategori::skip(0)->take(10)->get(['id','nama_kategori','slug']),
        'buku_populer' => (new BukuRepository())->getBukuPopuler()->with('kategori')->skip(0)->take(10)->get(),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::prefix('buku')->name('buku.')->group(function(){
    Route::get('/katalog',[BukuController::class,'katalog'])->name('katalog');
    Route::get('/kategori/{id}/{slug}',[BukuController::class,'katalog'])->name('kategori');
    Route::get('/{id_buku}/{slug}',[BukuController::class,'detailBuku'])->name('detail');
});