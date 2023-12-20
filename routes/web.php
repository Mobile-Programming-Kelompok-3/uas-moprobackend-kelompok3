<?php

use App\Http\Controllers\KeranjangController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionsController;
use App\Http\Controllers\UserController;
use App\Models\Transactions;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Beranda');
})->name('home');

Route::post('/registers', [UserController::class, 'store']);
Route::post('/logins', [UserController::class, 'login']);
Route::get('/profils/{userid}', [UserController::class, 'profil']);
Route::put('/profils/{userid}', [UserController::class, 'editprofil']);
Route::get('/user', [UserController::class, 'show']);
Route::get('/produk', [ProdukController::class, 'show'])->name('listproduk');
Route::get('/transaksi', [TransactionsController::class, 'show'])->name('transaksi');
Route::get('/transaksi/{userid}', [TransactionsController::class, 'hasil']);
Route::put('/transaksi/{idtransaksi}', [TransactionsController::class, 'update']);
Route::delete('/transaksi/{idtransaksi}', [TransactionsController::class, 'delete']);
Route::get('/pembayaranbelum/{idtransaksi}', [TransactionsController::class, 'belum']);
Route::get('/pembayaransudah/{idtransaksi}', [TransactionsController::class, 'sudah']);
Route::get('/prosesbelum/{idtransaksi}', [TransactionsController::class, 'belumproses']);
Route::get('/prosessudah/{idtransaksi}', [TransactionsController::class, 'sudahproses']);
Route::post('/addproduk', [ProdukController::class, 'addproduk']);
Route::post('/transaksi/{userid}', [UserController::class, 'transaksi']);
Route::put('/produk/{produk}/edit', [ProdukController::class, 'update']);
Route::delete('/produk/{produk}/delete', [ProdukController::class, 'destroy'])->name('deleteproduk');
Route::get('/produksend', [ProdukController::class, 'send']);
Route::get('/produksend/{produkid}', [ProdukController::class, 'sendid']);
Route::get('/bukti_pembayaran/{transactionsid}', [TransactionsController::class, 'sendid']);
Route::post('/keranjang', [KeranjangController::class, 'sendproduk']);
Route::get('/keranjang/{userid}', [KeranjangController::class, 'ambil']);
Route::delete('/keranjang/{itemid}', [KeranjangController::class, 'buang']);
Route::delete('/keranjangs/{userid}', [KeranjangController::class, 'delete']);

// Route::group(['prefix' => 'api', 'middleware' => 'cors'], function () {
//     // Rute-rute API di sini
// });
Route::middleware('cors')->group(function () {
    // Rute-rute API di sini
});

Route::get('/home', function (){
    return Inertia::render('screens/Homescreen');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
