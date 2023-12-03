<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Models\ProdukKategori;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Produk $produk)
    {
        $produk = Produk::all();
        $kategori = ProdukKategori::all();
        return inertia::render('KelolaProduk', [
            'produk' => $produk,
            'kategori' => $kategori,
        ]);
    }

    public function send(Produk $produk)
    {
        $produk = Produk::all();
        return response()->json($produk);
    }

    public function sendid($id)
    {
        
        $produk = Produk::find($id);

        if (!$produk) {
            return response()->json(['message' => 'Produk tidak ditemukan'], 404);
        }

        return response()->json($produk);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produk $produk)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Produk $produk)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produk $produk)
    {
        //
    }
}
