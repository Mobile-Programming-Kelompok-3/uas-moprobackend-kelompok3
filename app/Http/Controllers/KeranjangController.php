<?php

namespace App\Http\Controllers;

use App\Models\Keranjang;
use Illuminate\Http\Request;

class KeranjangController extends Controller
{
    public function sendproduk(Request $request)
{
        
        $request->validate([
            'produk_id' => 'required',
            'user_id' => 'required',
        ]);

        Keranjang::create([
            'produk_id' => $request->input('produk_id'),
            'user_id' => $request->input('user_id'),
        ]);
        
        return redirect()->back()->with('success', 'Produk berhasil keranjang');

}
}
