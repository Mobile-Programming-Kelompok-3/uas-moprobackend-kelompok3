<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Transactions;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function transaksi(Request $request, $userid)
    {
        // Ambil data dari request
        $data = $request->only([
            'produk_id',
            'total_pesanan',
            'total_harga',
            'catatan',
            'bukti_pembayaran',
            'tanggal_pemesanan',
            'alamat_penerima',
            'user_id',
            'status',
            // Atau atribut lain yang kamu perlukan
        ]);

        // Simpan data ke dalam database
        $transaction = Transactions::create($data);

        // Lakukan sesuatu setelah transaksi berhasil disimpan, misalnya memberikan respons
        return response()->json(['message' => 'Transaksi berhasil disimpan', 'data' => $transaction], 201);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        // Cari pengguna berdasarkan email
        $user = User::where('email', $request->email)->first();
    
        // Jika pengguna tidak ditemukan atau password salah
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Email atau password salah'], 401);
        }
    
        // Autentikasi berhasil, berikan respons berhasil
        // Di sini Anda bisa mengembalikan lebih banyak informasi, seperti token akses jika menggunakan autentikasi token
        return response()->json(['message' => 'Login berhasil', 'user' => $user]);
    }

    public function userid($userId)
    {
        $user = User::find($userId);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    // Return the user's data
    return response()->json(['user' => $user]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string|min:6',
    ]);

    $user = User::create([
        'name' => $validatedData['name'],
        'email' => $validatedData['email'],
        'password' => Hash::make($validatedData['password']),
    ]);

    return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
}


    /**
     * Display the specified resource.
     */
    public function show(){
        $user = User::all();
        return inertia::render('KelolaUser', [
            'user' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $User)
    {
        //
    }

    public function profil($userId)
{
    // Assuming $user is the specified user based on the route or input data

    // Fetch user profile details from the database
    $user = User::find($userId);

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    // Return the user's data
    return response()->json(['user' => $user]);
}

public function editprofil(Request $request,$userId)
{
    // Temukan pengguna berdasarkan ID
    $user = User::find($userId);

    // Pastikan pengguna ditemukan
    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    // Update profil pengguna dengan data yang diberikan dalam permintaan
    $user->name = $request->input('name'); // Pastikan input('nama') sesuai dengan nama field dari frontend
    $user->email = $request->input('email'); // Pastikan input('email') sesuai dengan nama field dari frontend
    $user->alamat = $request->input('alamat'); // Pastikan input('alamat') sesuai dengan nama field dari frontend
    $user->nomor = $request->input('nomor'); // Pastikan input('nomor') sesuai dengan nama field dari frontend
    $user->gambar = $request->input('gambar');
    // Lakukan update untuk kolom-kolom lainnya jika ada

    // Simpan perubahan
    $user->save();

    // Mengembalikan respons yang sesuai (misalnya, berhasil atau pesan yang relevan)
    return response()->json(['message' => 'User profile updated successfully']);
}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $User)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $User)
    {
        //
    }
}
