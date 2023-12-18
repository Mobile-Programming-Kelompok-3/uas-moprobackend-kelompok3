<?php

use App\Http\Controllers\ProdukController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
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
Route::post('/addproduk', [ProdukController::class, 'addproduk']);
Route::put('/produk/{produk}/edit', [ProdukController::class, 'update']);
Route::delete('/produk/{produk}/delete', [ProdukController::class, 'destroy'])->name('deleteproduk');
Route::get('/produksend', [ProdukController::class, 'send']);
Route::get('/produksend/{produkid}', [ProdukController::class, 'sendid']);

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
