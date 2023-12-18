import React, { useState, useEffect } from "react";
import { Link, Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import { Inertia, hrefToUrl } from "@inertiajs/inertia";

export default function KelolaTransaksi(props) {
    const [transactions, setTransactions] = useState([]);
    const [produk, setProduk] = useState([]);

    useEffect(() => {
        console.log("Props received:", props);
        if (Array.isArray(props.transactions) && props.transactions.length > 0) {
            setTransactions(props.transactions);
        }
        setProduk(props.produk);
    }, [props.transactions], [props.produk]);

    const getProductDetails = (produkId) => {
        return produk.find((product) => product.id === produkId);
    };

    const handleAccept = (transactionId) => {
        const updatedTransactions = transactions.map((transaction) => {
            if (transaction.id === transactionId) {
                console.log(transaction.status);
                const data = {
                    status:1,
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
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-gray-200">
                <div className="py-6">
                    <div className="mx-auto max-w-7xl px-8 sm:px-6 md:pl-24">
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            Selamat Datang,{" "}
                            <span className="text-blue-500">{"au"}!</span>
                        </h1>
                        <h1 className="my-5 pr-52 text-xl font-normal text-gray-900">
                            Pada halaman ini kamu bisa membuat dan mengatur dan
                            mengelola tes.
                        </h1>
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
                                    className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3"
                                >
                                    <img
                                        src={product.gambar}
                                        alt="gambar"
                                        className="w-full"
                                    />
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                        {product
                                            ? product.name
                                            : "Product Not Found"}
                                    </h2>
                                    <p className="text-3xl font-bold text-blue-500">
                                        {transaction.total_harga}
                                    </p>
                                    <p className="text-3xl font-bold text-blue-500">
                                        {transaction.catatan}
                                    </p>
                                    <Link
                                        href={transaction.bukti_pembayaran} // Replace with your desired URL
                                        className="text-blue-500 hover:underline justify-end flex"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Lihat Bukti Transaksi
                                    </Link>
                                    <div className="justify-center gap-5  flex">
                                       
                                            <button
                                                className="bg-green-600 text-white p-2 font-bold rounded-md"
                                                onClick={() =>
                                                    handleAccept(
                                                        transaction.id
                                                    )
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
    );
}
