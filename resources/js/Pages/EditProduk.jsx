import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useState, useEffect } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Inertia } from "@inertiajs/inertia";


export default function EditProduk({ props, visible, onClose, editData }) {
    const [name, setName] = useState("");
    const [harga, setHarga] = useState(0);
    const [deskripsi, setDeskripsi] = useState("");
    const [gambar, setGambar] = useState(null); // Gunakan null untuk menyimpan file

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setGambar(file);
    };

    console.log(editData);
    useEffect(() => {
        if (editData) {
            setName(editData.name);
            setHarga(editData.harga);
            setDeskripsi(editData.deskripsi);
            setGambar(editData.gambar);
        }
    }, [editData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', gambar);

        try {
            const response = await fetch('https://api.imgbb.com/1/upload?key=8e6f029993635453c67071f5f258cd87', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();
            const imageUrl = data.data.url;

            // Simpan data produk beserta URL gambar ke backend (gunakan endpoint yang sesuai)
            const dataProduk = {
                name,
                harga,
                deskripsi,
                gambar: imageUrl
            };

            await Inertia.put(`/produk/${editData.id}/edit`, dataProduk);
            window.location.reload(); // Atau lakukan navigasi yang sesuai setelah mengedit produk
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (!visible) return null;

    return (
        <>
            <div className="flex flex-col md:flex-row ">
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-md shadow-md">
                        <div className="justify-between flex items-start">
                            <h1 className="text-left font-bold text-[48px] text-black mb-4">
                                Edit Produk
                            </h1>
                            <button
                                onClick={onClose}
                                className=" text-red-500 hover:text-red-800 cursor-pointer focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-10 h-10"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} >
                            <input
                                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                                type="text"
                                placeholder="Nama Produk"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                                type="number"
                                placeholder="Harga"
                                value={harga}
                                onChange={(e) =>
                                    setHarga(Number(e.target.value))
                                }
                            />
                            <textarea
                                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Deskripsi"
                                value={deskripsi}
                                onChange={(e) => setDeskripsi(e.target.value)}
                            ></textarea>
                            <input
                                type="file"
                                onChange={handleFileChange}
                            />
                            <button

                                type="submit"
                                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-800 focus:bg-blue-400 focus:outline-none transition duration-150 ease-in-out"
                            >
                                Edit Produk
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}