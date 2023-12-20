import React from "react";
import { Link, Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";

export default function BuktiPembayaran(props) {
    return (
        <>
            <div className="flex h-screen ">
                <main className="flex w-screen justify-center items-center bg-gray-200">
                    <img
                        src={props.transactions.bukti_pembayaran}
                        alt="Bukti Transaksi"
                        className="h-screen" // Sesuaikan dengan ukuran yang diinginkan
                    />
                </main>
            </div>
        </>
    );
}
