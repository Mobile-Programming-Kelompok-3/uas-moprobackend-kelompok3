import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useState, useEffect } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Inertia } from "@inertiajs/inertia";


export default function EditProduk({ props, visible, onClose, options, editData }) {
    const [name, setName] = useState("");
    const [kategori, setKategori] = useState(options[0]);
    const [harga, setHarga] = useState(0);
    const [deskripsi, setDeskripsi] = useState("");
    const [gambar, setGambar] = useState("");
    const [total, setTotal] = useState(0);


    console.log(editData);
    useEffect(() => {
        if (editData) {
            setName(editData.name);
            setKategori(editData.kategori);
            setHarga(editData.harga);
            setDeskripsi(editData.deskripsi);
            setGambar(editData.gambar);
            setTotal(editData.total);
        }
    }, [editData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            kategori,
            harga,
            deskripsi,
            total,
            gambar,
        };
        Inertia.put(`/produk/${editData.id}/edit`, data);

    };

    if (!visible) return null;

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

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
                            <Listbox value={kategori} onChange={setKategori}>
                                {({ open }) => (
                                    <>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative w-full cursor-default rounded-xl border border-black bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                                                <span className="block truncate text-lg">
                                                    {kategori}
                                                </span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronUpDownIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute text-left z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {options.map(
                                                        (option, index) => (
                                                            <Listbox.Option
                                                                key={index}
                                                                className={({
                                                                    active,
                                                                }) =>
                                                                    classNames(
                                                                        active
                                                                            ? "text-white bg-blue-600"
                                                                            : "text-gray-900",
                                                                        "relative cursor-default select-none py-2 pl-3 pr-9"
                                                                    )
                                                                }
                                                                value={option}
                                                            >
                                                                {({
                                                                    kategori,
                                                                    active,
                                                                }) => (
                                                                    <>
                                                                        <span
                                                                            className={classNames(
                                                                                kategori
                                                                                    ? "font-semibold"
                                                                                    : "font-normal",
                                                                                "block truncate"
                                                                            )}
                                                                        >
                                                                            {
                                                                                option
                                                                            }
                                                                        </span>

                                                                        {kategori ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active
                                                                                        ? "text-white"
                                                                                        : "text-blue-600",
                                                                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                                )}
                                                                            >
                                                                                <CheckIcon
                                                                                    className="h-5 w-5"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        )
                                                    )}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
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
                                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                                type="number"
                                placeholder="Total"
                                value={total}
                                onChange={(e) =>
                                    setTotal(Number(e.target.value))
                                }
                            />
                            <input
                                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                                type="text"
                                value={gambar}
                                onChange={(e) => setGambar(e.target.value)}
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