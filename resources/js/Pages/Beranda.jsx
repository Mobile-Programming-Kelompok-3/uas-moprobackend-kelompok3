import React from "react";
import { Link, Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";

export default function Dashboard(props) {
    const { user, produk, transaction } = props;

    const getProductDetails = (produkId) => {
        return produk.find((product) => product.id === produkId);
    };

    return (
        <>
        <Head title="Dashboard" />
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-gray-200">
                <div className="py-6">
                    <div className="mx-auto max-w-7xl px-8 sm:px-6 md:pl-24">
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            Selamat Datang,{" "}
<<<<<<< HEAD
                            <span className="text-pink-500">{"dila"}!</span>
                        </h1>
                        <h1 className="my-5 pr-52 text-xl font-normal text-gray-900">
                            Pada Halaman ini Anda dapat melihat pengelolaan aplikasi
=======
                            <span className="text-green-500">{"Admin"}!</span>
                        </h1>
                        <h1 className="my-5 pr-52 text-xl font-normal text-gray-900">
                            Pada halaman ini kamu bisa membuat, mengatur dan
                            mengelola Produk untuk Aplikasi D'Lillah.
>>>>>>> ec7c9b9e16633081862d3518bb78d0277bd3cf48
                        </h1>
                        <div className="flex space-x-4">
                            {/* Card 1 */}
                            <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">
<<<<<<< HEAD
                                    Stok
                                </h2>
                                <p className="text-3xl font-bold text-pink-500">
                                    120
=======
                                    Jumlah Pesanan
                                </h2>
                                <p className="text-3xl font-bold text-green-500">
                                {transaction.length}
>>>>>>> ec7c9b9e16633081862d3518bb78d0277bd3cf48
                                </p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">
<<<<<<< HEAD
                                    Kategori
                                </h2>
                                <p className="text-3xl font-bold text-pink-500">
                                    4
=======
                                    Jumlah User
                                </h2>
                                <p className="text-3xl font-bold text-green-500">
                                {user.length}
>>>>>>> ec7c9b9e16633081862d3518bb78d0277bd3cf48
                                </p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">
<<<<<<< HEAD
                                    Terjual
                                </h2>
                                <p className="text-3xl font-bold text-pink-500">
                                    1000
=======
                                    Jumlah Barang
                                </h2>
                                <p className="text-3xl font-bold text-green-500">
                                {produk.length}
>>>>>>> ec7c9b9e16633081862d3518bb78d0277bd3cf48
                                </p>
                            </div>
                        </div>
                        {/* Card keempat dengan list */}
                        <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
<<<<<<< HEAD
                                Produk
                            </h2>
                            <ul className="list-disc pl-5 text-pink-500">
                                <li className="mb-2">Sakura Skinny Jeans</li>
                                <li className="mb-2">Sakura Cutbray</li>
                                <li className="mb-2">Sakura Loose Jeans</li>
                                <li className="mb-2">Sakura Fargo Jeans</li>
                                {/* Tambahkan item sesuai kebutuhan */}
                            </ul>
=======
                                Pesanan Masuk
                            </h2>
                            {props.transaction.map((transaction) => {
                                if (transaction.status === 1) {
                                    return null; // Tidak menampilkan transaksi dengan status 1
                                }
                                const product = getProductDetails(
                                    transaction.produk_id
                                );
                                return (
                                    <div
                                    key={transaction.id}
                                    className="bg-white flex justify-between items-center gap-10 rounded-lg shadow-md p-4 my-2 w-1/4"
                                >
                                    <img
                                        src={product.gambar}
                                        alt="gambar"
                                        className="w-full"
                                    />
                                    <div className=" w-full">
                                    <h2 className="text-3xl  font-semibold text-gray-800 mb-2">
                                        {product
                                            ? product.name
                                            : "Product Not Found"}
                                    </h2>
                                    <p className="text-3xl font-bold text-blue-500">
                                        Rp. {transaction.total_harga}
                                    </p>
                                    </div>
                                    
                                    <p className="text-xl flex w-full font-bold text-gray-800">
                                        catatan: {transaction.catatan}
                                    </p>
                                    <Link
                                        href={`/bukti_pembayaran/${transaction.id}`} // Ganti dengan URL yang sesuai untuk menampilkan bukti pembayaran
                                        className="text-blue-500 hover:underline justify-end flex"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Lihat Bukti Transaksi
                                    </Link>
                                </div>
                            );
                        })}
>>>>>>> ec7c9b9e16633081862d3518bb78d0277bd3cf48
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
    );
}
