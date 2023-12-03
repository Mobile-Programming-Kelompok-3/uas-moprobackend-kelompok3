import React from "react";
import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";

export default function KelolaProduk(props) {
    const kategoriNames = {
        1: "Makanan",
        2: "Minuman",
        3: "Kebutuhan Dapur",
        4: "Kebutuhan Kesehatan",
        5: "Personal Care",
        // Add more mappings as needed
    };
    console.log(props.produk);
    return (
        <>
            <Head title="Kelola Produk" />
            <div className="flex flex-col md:flex-row">
                <Sidebar />
                <div className="w-full md:w-2/3 mx-auto lg:p-10 md:p-6 pl-0 flex flex-col justify-between h-auto">
                    <div className="container">
                        <div class="flex justify-between items-center">
                            <h1 class="text-left font-bold text-[48px] text-black mr-4">
                                Kelola Produk
                            </h1>
                            <button class="px-10 py-3 w-auto bg-blue-500 border border-transparent rounded-md font-semibold text-md text-white hover:bg-blue-800 focus:bg-blue-400 active:bg-blue-100 focus:outline-none transition ease-in-out duration-150">
                                <h1 class="text-base font-bold">
                                    Tambah Produk
                                </h1>
                            </button>
                        </div>

                        <div className="relative overflow-x-auto mt-10">
                            <table class="w-full text-lg text-left ">
                                <thead class="text-lg  bg-blue-500 text-white">
                                    <tr class="border-b-2 font-bold ">
                                        <th scope="col" class="px-6 py-3">
                                            No
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Nama
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            kategori
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            harga
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            aksi
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            jumlah
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.produk.map((item) => (
                                        <>
                                            <tr class="bg-white border-b-2 text-lg">
                                                <th
                                                    scope="row"
                                                    class="px-6 py-4 font-medium"
                                                >
                                                    {item.id}
                                                </th>
                                                <td
                                                    scope="row"
                                                    class="px-6 py-4 font-medium"
                                                >
                                                    {item.name}
                                                </td>
                                                <td
                                                    scope="row"
                                                    class="px-6 py-4 font-medium"
                                                >
                                                    {kategoriNames[
                                                        item.produk_kategoris_id
                                                    ] || "Unknown"}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <h1>Rp. {item.harga}</h1>
                                                </td>
                                                <td class="px-6 py-4">
                                                    <button className="px-5">
                                                        Edit
                                                    </button>
                                                    <button>Hapus</button>
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.total}
                                                </td>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
