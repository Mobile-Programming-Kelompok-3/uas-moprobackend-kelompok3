import React, { useState, useEffect } from "react";
import { Link, Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import { Inertia, hrefToUrl } from "@inertiajs/inertia";

export default function KelolaTransaksi(props) {
    const [transactions, setTransactions] = useState([]);
    const [produk, setProduk] = useState([]);

    useEffect(
        () => {
            console.log("Props received:", props);
            if (
                Array.isArray(props.transactions) &&
                props.transactions.length > 0
            ) {
                setTransactions(props.transactions);
            }
            setProduk(props.produk);
        },
        [props.transactions],
        [props.produk]
    );

    const getProductDetails = (produkId) => {
        return produk.find((product) => product.id === produkId);
    };

    const handleAccept = (transactionId) => {
        const updatedTransactions = transactions.map((transaction) => {
            if (transaction.id === transactionId) {
                console.log(transaction.status);
                const data = {
                    status: 1,
                    statusproses:0,
                };
                Inertia.put(`/transaksi/${transactionId}`, data);
                window.location.reload();
            }
            return transaction;
        });
        setTransactions(updatedTransactions);
    };

    const handleReject = (transactionId) => {
        const updatedTransactions = transactions.map((transaction) => {
            if (transaction.id === transactionId) {
                Inertia.delete(`/transaksi/${transactionId}`);
                window.location.reload();
            }
            return transaction;
        });
        setTransactions(updatedTransactions);
    };

    return (
        <>
        <Head title="Kelola Pesanan" />
        <div className="flex flex-col md:flex-row">
            <Sidebar />
<<<<<<< HEAD
            <main className="flex-1 overflow-y-auto bg-gray-200">
                <div className="py-6 pl-20">
                    <h1 className="mx-auto my-5 max-w-7xl gap-1 flex flex-wrap text-4xl font-extrabold text-gray-900">
=======
            <main className="w-full md:w-2/3 mx-auto lg:p-10 md:p-6 pl-0 flex flex-col justify-between h-auto">
                <div className="container">
                    <h1 className="text-left font-bold text-[48px] text-black mr-4">
>>>>>>> ec7c9b9e16633081862d3518bb78d0277bd3cf48
                        Kelola Pesanan
                    </h1>
                    <div className="mx-auto max-w-7xl gap-1 flex flex-wrap justify-between">
                        {transactions.map((transaction) => {
                            if (transaction.status === 1) {
                                return null; // Tidak menampilkan transaksi dengan status 1
                            }
                            const product = getProductDetails(
                                transaction.produk_id
                            );
                            return (
                                <div
                                    key={transaction.id}
                                    className="bg-white rounded-lg shadow-md p-4 my-2 w-1/4"
                                >
                                    <img
                                        src={product.gambar}
                                        alt="gambar"
                                        className="w-full"
                                    />
                                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                                        {product
                                            ? product.name
                                            : "Product Not Found"}
                                    </h2>
<<<<<<< HEAD
                                    <p className="text-3xl font-bold text-pink-500">
                                        {transaction.total_harga}
=======
                                    <p className="text-3xl font-bold text-blue-500">
                                        Rp. {transaction.total_harga}
>>>>>>> ec7c9b9e16633081862d3518bb78d0277bd3cf48
                                    </p>
                                    <p className="text-xl font-bold text-gray-800">
                                        catatan: {transaction.catatan}
                                    </p>
                                    <Link
<<<<<<< HEAD
                                        href={transaction.bukti_pembayaran} // Replace with your desired URL
                                        className="text-pink-500 hover:underline justify-end flex"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Lihat Bukti Transaksi
                                    </Link>
=======
    href={`/bukti_pembayaran/${transaction.id}`} // Ganti dengan URL yang sesuai untuk menampilkan bukti pembayaran
    className="text-blue-500 hover:underline justify-end flex"
    target="_blank"
    rel="noopener noreferrer"
>
    Lihat Bukti Transaksi
</Link>
>>>>>>> ec7c9b9e16633081862d3518bb78d0277bd3cf48
                                    <div className="justify-center gap-5  flex">
                                        <button
                                            className="bg-green-600 text-white p-2 font-bold rounded-md"
                                            onClick={() =>
                                                handleAccept(transaction.id)
                                            }
                                        >
                                            Accept
                                        </button>
                                        <button
                                            className="bg-red-700 text-white p-2 font-bold rounded-md"
                                            onClick={() =>
                                                handleReject(transaction.id)
                                            }
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
        </>
    );
}
