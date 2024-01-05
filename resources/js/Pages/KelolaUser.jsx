import React from "react";
import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";

export default function KelolaUser(props) {
    return (
        <>
            <Head title="Kelola User" />
            <div className="flex flex-col md:flex-row">
                <Sidebar />
                <div className="w-full md:w-2/3 mx-auto lg:p-10 md:p-6 pl-0 flex flex-col justify-between h-auto">
                    <div className="container">
                            <h1 class="text-left font-bold text-[48px] text-black mr-4">
                                Kelola User
                            </h1>
                        <div className="relative overflow-x-auto mt-10">
                            <table class="w-full text-lg text-left ">
<<<<<<< HEAD
                                <thead class="text-lg  bg-pink-500 text-white">
=======
                                <thead class="text-lg  bg-green-500 text-white">
>>>>>>> ec7c9b9e16633081862d3518bb78d0277bd3cf48
                                    <tr class="border-b-2 font-bold ">
                                        <th scope="col" class="px-6 py-3 text-center">
                                            No
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-center">
                                            Nama
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-center">
                                            Email
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-center">
                                            No Telepon
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-center">
                                            Alamat
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-center">
                                            Jumlah Pembelian
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.user.map((item) => (
                                        <>
                                            <tr class="bg-white border-b-2 text-lg">
                                                <th
                                                    scope="row"
                                                    class="px-6 py-4 font-medium text-center"
                                                >
                                                    {item.id}
                                                </th>
                                                <td
                                                    scope="row"
                                                    class="px-6 py-4 font-medium text-center"
                                                >
                                                    {item.name}
                                                </td>
                                                <td
                                                    scope="row"
                                                    class="px-6 py-4 font-medium text-center"
                                                >
                                                    {item.email}
                                                </td>
                                                <td class="px-6 py-4 text-center">
                                                    {item.nomor}
                                                </td>
                                                <td class="px-6 py-4 text-center">
                                                    {item.alamat}
                                                </td>
                                                <td class="px-6 py-4 text-center">
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
