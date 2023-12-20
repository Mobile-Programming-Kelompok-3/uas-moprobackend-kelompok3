<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keranjang extends Model
{
    protected $fillable = [
        'produk_id', 'user_id'
        // Tambahkan kolom lain yang perlu diisi secara massal
    ];
    use HasFactory;
}
