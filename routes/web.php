<?php

use App\Http\Controllers\BukuController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

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

Route::get('/',HomeController::class)->name('home');

Route::prefix('buku')->name('buku.')->group(function(){
    Route::get('/katalog',[BukuController::class,'katalog'])->name('katalog');
    Route::get('/kategori/{id}/{slug}',[BukuController::class,'katalog'])->name('kategori');
    Route::get('/{id}/{slug}',[BukuController::class,'detailBuku'])->name('detail');
});