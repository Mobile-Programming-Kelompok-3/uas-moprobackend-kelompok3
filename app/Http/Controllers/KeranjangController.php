<?php

namespace App\Http\Controllers;

use App\Models\Keranjang;
use App\Models\Produk;
use Illuminate\Http\Request;


class KeranjangController extends Controller
{
    public function sendproduk(Request $request)
    {

        $request->validate([
            'produk_id' => 'required',
            'user_id' => 'required',
            'jumlah' => 'required',
        ]);

        Keranjang::create([
            'produk_id' => $request->input('produk_id'),
            'user_id' => $request->input('user_id'),
            'jumlah' => $request->input('jumlah'),
        ]);

        return response()->json(['message' => 'Produk berhasil ditemukan']);
    }
    public function ambil($userId)
    {
        $produk = Produk::all();
        $keranjang = Keranjang::where('user_id', $userId)
            ->get();

        return response()->json([
            'produk' => $produk,
            'keranjang' => $keranjang,
        ]);
    }

    public function buang($itemid)
    {
        $keranjang = Keranjang::find($itemid);
        $keranjang->delete();
        return response()->json(['message' => 'Produk berhasil dihapus']);
    }

    public function delete($userId)
    {
        $keranjang = Keranjang::where('user_id', $userId)->get();

        foreach ($keranjang as $item) {
            $item->delete();
        }

        return response()->json(['message' => 'Produk berhasil dihapus']);
    }
}
