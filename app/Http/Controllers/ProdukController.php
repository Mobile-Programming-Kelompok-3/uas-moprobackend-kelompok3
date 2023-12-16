<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Models\ProdukKategori;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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


    public function addproduk(Request $request)
{
    try {
        
        $request->validate([
            'name' => 'required',
            'kategori' => 'required',
            'harga' => 'required',
            'deskripsi' => 'required',
            'gambar' => 'required',
        ]);
        
        $produkKategori = ProdukKategori::where('nama', $request->kategori)->first();
        

        if (!$produkKategori) {
            throw new \Exception('Kategori tidak ditemukan');
        }

        Produk::create([
            'name' => $request->input('name'),
            'harga' => $request->input('harga'),
            'deskripsi' => $request->input('deskripsi'),
            'gambar' => $request->input('gambar'),
            'produk_kategoris_id' => $produkKategori->id,
        ]);
        
        return redirect()->back()->with('success', 'Produk berhasil ditambahkan');
    } catch (\Exception $e) {
        
    }
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
    public function update(Request $request, $produkid)
{
    try {
        $produk = Produk::findOrFail($produkid);

        $request->validate([
            'name' => 'required',
            'kategori' => 'required',
            'harga' => 'required',
            'deskripsi' => 'required',
            'gambar' => 'required',
        ]);

        $produkKategori = ProdukKategori::where('nama', $request->kategori)->first();

        if (!$produkKategori) {
            throw new \Exception('Kategori tidak ditemukan');
        }

        $produk->update([
            'name' => $request->input('name'),
            'harga' => $request->input('harga'),
            'deskripsi' => $request->input('deskripsi'),
            'gambar' => $request->input('gambar'),
            'produk_kategoris_id' => $produkKategori->id,
        ]);

        return redirect()->back()->with('success', 'Produk berhasil diperbarui');
    } catch (\Exception $e) {
        return redirect()->back()->withErrors([$e->getMessage()]);
    }
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($produkid)
    {
        $produk = Produk::find($produkid);
        $produk->delete();
        return inertia::location(route('listproduk'));
    }
}