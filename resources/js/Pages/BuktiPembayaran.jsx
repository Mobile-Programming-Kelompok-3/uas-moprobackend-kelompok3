import React from "react";
import { Link, Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";

export default function BuktiPembayaran(props) {
    return (
        <>
            <div className="flex h-screen">
                <main className="flex-1 overflow-y-auto bg-gray-200">
                    <img
                        src={props.transactions.bukti_pembayaran}
                        alt="Bukti Transaksi"
                        className="w-64 h-64" // Sesuaikan dengan ukuran yang diinginkan
                    />
                </main>
            </div>
        </>
    );
}
