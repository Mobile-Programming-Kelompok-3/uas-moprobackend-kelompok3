import React from "react";
import { Link, Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";

export default function Dashboard(props) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-gray-200">
                <div className="py-6">
                    <div className="mx-auto max-w-7xl px-8 sm:px-6 md:pl-24">
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            Selamat Datang,{" "}
                            <span className="text-green-500">{"Admin"}!</span>
                        </h1>
                        <h1 className="my-5 pr-52 text-xl font-normal text-gray-900">
                            Pada halaman ini kamu bisa membuat, mengatur dan
                            mengelola Produk untuk Aplikasi D'Lillah.
                        </h1>
                        <div className="flex space-x-4">
                            {/* Card 1 */}
                            <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                    Jumlah Pesanan
                                </h2>
                                <p className="text-3xl font-bold text-green-500">
                                    123
                                </p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                    Jumlah User
                                </h2>
                                <p className="text-3xl font-bold text-green-500">
                                    456
                                </p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                    Jumlah Barang
                                </h2>
                                <p className="text-3xl font-bold text-green-500">
                                    789
                                </p>
                            </div>
                        </div>
                        {/* Card keempat dengan list */}
                        <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                Pesanan Masuk
                            </h2>
                            <ul className="list-disc pl-5">
                                <li className="mb-2">Item 1</li>
                                <li className="mb-2">Item 2</li>
                                <li className="mb-2">Item 3</li>
                                <li className="mb-2">Item 4</li>
                                {/* Tambahkan item sesuai kebutuhan */}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
