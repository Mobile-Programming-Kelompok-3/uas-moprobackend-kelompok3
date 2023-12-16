<?php

namespace App\Http\Controllers;

use App\Models\Produk;
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
        return inertia::render('KelolaProduk', [
            'produk' => $produk,
        ]);
    }


    public function addproduk(Request $request)
{
        
        $request->validate([
            'name' => 'required',
            'harga' => 'required',
            'deskripsi' => 'required',
            'gambar' => 'required',
        ]);
        
        
        Produk::create([
            'name' => $request->input('name'),
            'harga' => $request->input('harga'),
            'deskripsi' => $request->input('deskripsi'),
            'gambar' => $request->input('gambar'),
        ]);
        
        return redirect()->back()->with('success', 'Produk berhasil ditambahkan');
    
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
    
        $produk = Produk::findOrFail($produkid);

        $request->validate([
            'name' => 'required',
            'harga' => 'required',
            'deskripsi' => 'required',
            'gambar' => 'required',
        ]);

        $produk->update([
            'name' => $request->input('name'),
            'harga' => $request->input('harga'),
            'deskripsi' => $request->input('deskripsi'),
            'gambar' => $request->input('gambar'),
        ]);

        return redirect()->back()->with('success', 'Produk berhasil diperbarui');
   
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
