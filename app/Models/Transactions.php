<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{
    protected $fillable = [
        'produk_id', 'total_pesanan', 'total_harga', 'catatan', 'bukti_pembayaran', 'tanggal_pemesanan', 'user_id','alamat_penerima','status', 'statusproses'
        // Tambahkan kolom lain yang perlu diisi secara massal
    ];
    use HasFactory;
}
