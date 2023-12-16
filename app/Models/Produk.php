<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    protected $fillable = [
        'name', 'harga', 'deskripsi', 'gambar', 'total', 'produk_kategoris_id'
        // Tambahkan kolom lain yang perlu diisi secara massal
    ];
    use HasFactory;
}
