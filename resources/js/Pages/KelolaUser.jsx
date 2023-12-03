import React from "react";
import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";

export default function KelolaUser(props) {
    return (
        <>
            <Head title="Kelola Produk" />
            <div className="flex flex-col md:flex-row">
                <Sidebar />
                <div className="w-full md:w-2/3 mx-auto lg:p-10 md:p-6 pl-0 flex flex-col justify-between h-auto">
                    <div className="container">
                            <h1 class="text-left font-bold text-[48px] text-black mr-4">
                                Kelola User
                            </h1>
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
                                            Email
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            No Telepon
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Alamat
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            jumlah
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.user.map((item) => (
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
                                                    {item.email}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.nomor}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.alamat}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {item.pembelian}
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
