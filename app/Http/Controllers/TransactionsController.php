<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Models\Transactions;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionsController extends Controller
{
    public function show(Transactions $transactions)
    {
        $produk = Produk::all();
        $transactions = Transactions::all();
        return inertia::render('KelolaTransaksi', [
            'produk' => $produk,
            'transactions' => $transactions,
        ]);
    }

    public function sendid(Transactions $transactions, $transactionsid)
    {

        $transactions = Transactions::findOrFail($transactionsid);
        return inertia::render('BuktiPembayaran', [
            'transactions' => $transactions,
        ]);
    }

    public function hasil($userId)
    {
        
    }

    public function belum($userId)
{
    // Mengambil semua transaksi dengan userId yang sesuai
    $produk = Produk::all();
    $transactions = Transactions::where('user_id', $userId)
                                ->where('status', 0)
                                ->get();

    return response()->json([
        'produk' => $produk,
        'transactions' => $transactions,
    ]);
}

public function belumproses($userId)
{
    // Mengambil semua transaksi dengan userId yang sesuai
    $produk = Produk::all();
    $transactions = Transactions::where('user_id', $userId)
                                ->where('statusproses', 0)
                                ->get();

    return response()->json([
        'produk' => $produk,
        'transactions' => $transactions,
    ]);
}

public function sudahproses($userId)
{
    // Mengambil semua transaksi dengan userId yang sesuai
    $produk = Produk::all();
    $transactions = Transactions::where('user_id', $userId)
                                ->where('statusproses', 1)
                                ->get();

    return response()->json([
        'produk' => $produk,
        'transactions' => $transactions,
    ]);
}

public function sudah($userId)
{
    // Mengambil semua transaksi dengan userId yang sesuai
    $produk = Produk::all();
    $transactions = Transactions::where('user_id', $userId)
                                ->where('status', 1)
                                ->get();

    return response()->json([
        'produk' => $produk,
        'transactions' => $transactions,
    ]);
}

    public function update(Request $request, $id)
{
    // Validate the incoming request data
    $validatedData = $request->validate([
        // Define your validation rules here
        'status' => 'integer', // For example, assuming 'status' is being updated
        'statusproses' =>'integer'
    ]);

    // Find the transaction by ID
    $transaction = Transactions::findOrFail($id);

    // Update the transaction with the validated data
    $transaction->update($validatedData);

    // Return a response, redirect, or perform any necessary actions
    return response()->json(['message' => 'Transaction updated successfully']);
}

public function delete($id)
{
    $transaction = Transactions::find($id);
    
    if ($transaction) {
        $transaction->delete();
        return response()->json(['message' => 'Transaction deleted successfully']);
    } else {
        return response()->json(['message' => 'Transaction not found'], 404);
    }
}
}
