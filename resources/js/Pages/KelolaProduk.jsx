import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import AddProduk from "./AddProduk";
import EditProduk from "./EditProduk";
import { Inertia } from "@inertiajs/inertia";

export default function KelolaProduk(props) {
    const [isAddProdukVisible, setAddProdukVisible] = useState(false);
    const [isEditProdukVisible, setEditProdukVisible] = useState(false);
    const kategoriNames = {
        1: "Makanan",
        2: "Minuman",
        3: "Kebutuhan Dapur",
        4: "Kebutuhan Kesehatan",
        5: "Personal Care",
        // Add more mappings as needed
    };
    const [ProdukId, setProdukId] = useState(0);
    const kategori = props.kategori;

    let options = kategori.map((kategori) => kategori.nama);
    console.log(kategori);
    const removeProduk = (id) => {
        if (
            confirm(
                "Apakah anda yakin ingin menghapus produk ini?"
            )
        ) {
            Inertia.delete(route("deleteproduk", id));
        }
        window.location.reload();
    };

    return (
        <>
            <Head title="Kelola Produk" />
            <div className="flex flex-col md:flex-row">
                <Sidebar />
                <div className="w-full md:w-2/3 mx-auto lg:p-10 md:p-6 pl-0 flex flex-col justify-between h-auto">
                    <div className="container">
                        <div className="flex justify-between items-center">
                            <h1 className="text-left font-bold text-[48px] text-black mr-4">
                                Kelola Produk
                            </h1>

                                <button onClick={() =>
                                                    setAddProdukVisible(true)
                                                }
                                className="px-10 py-3 w-auto bg-green-500 border border-transparent rounded-md font-semibold text-md text-white hover:bg-green-800 focus:bg-blue-400 active:bg-blue-100 focus:outline-none transition ease-in-out duration-150">
                                    <h1 className="text-base font-bold">
                                        Tambah Produk
                                    </h1>
                                </button>
                        </div>

                        <div className="relative overflow-x-auto mt-10">
                            <table className="w-full text-lg text-left ">
                                <thead className="text-lg  bg-green-500 text-white">
                                    <tr className="border-b-2 font-bold ">
                                        <th scope="col" className="px-6 py-3 text-center">
                                            No
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Nama
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Kategori
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Harga
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Aksi
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Gambar
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.produk.map((item) => (

                                            <tr key={item.id} className="bg-white border-b-2 text-lg justify-center">
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium  text-center"
                                                >
                                                    {item.id}
                                                </th>
                                                <td
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-center"
                                                >
                                                    {item.name}
                                                </td>
                                                <td
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-center"
                                                >
                                                    {kategoriNames[
                                                        item.produk_kategoris_id
                                                    ] || "Unknown"}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <h1>Rp. {item.harga}</h1>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <button onClick={() => {setProdukId(item.id);setEditProdukVisible(true);}} className="px-5 text-center">
                                                    Edit
                                                    </button>

                                                    <button onClick={() => {
                                                removeProduk(item.id);
                                            }}>Hapus</button>
                                                </td>
                                                <td className="px-6 py-4 flex items-center">
                                                    <img src={item.gambar} className="w-24 mx-auto" />
                                                </td>
                                            </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <AddProduk
                        visible={isAddProdukVisible}
                        onClose={() => setAddProdukVisible(false)}
                        options={options}
                    />
                    <EditProduk
                        visible={isEditProdukVisible}
                        onClose={() => setEditProdukVisible(false)}
                        options={options}
                        editData={props.produk.find(
                            (pro) => pro.id === ProdukId
                        )}
                    />
                </div>
            </div>
        </>
    );
}
