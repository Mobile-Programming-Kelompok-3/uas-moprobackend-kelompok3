/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
  XMarkIcon,
  UserMinusIcon,
} from '@heroicons/react/24/solid'
import Logo from '../Asset/logoApp.png'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: false },
  { name: 'Kelola Produk', href: '/produk', icon: FolderIcon, current: false },
  { name: 'Kelola Pesanan', href: '/transaksi', icon: InboxIcon, current: false },
  { name: 'Kelola User', href: '/user', icon: UserMinusIcon, current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    // Mengubah state isClicked menjadi true saat tombol diklik
    setIsClicked(true);

    // Tambahan logika lain jika diperlukan
    // ...

    // Menutup sidebar atau melakukan tindakan lain
    // setSidebarOpen(false);
  };
  return (
    <>
      {/*
        This example requires updating your template:
        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >

                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-auto w-auto"
                        src={Logo}
                        alt="Your Company"
                      />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.name === 'Logout' ? route('logout') : item}
                          className={classNames(
                            item.current
                              ? 'bg-green-200 text-green-700'
                              : 'text-green-700 hover:bg-green-50 hover:text-green-700',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-green-700' : 'text-green-700 group-hover:text-green-700',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-80 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
<<<<<<< HEAD
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-pink-400">
=======
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-green-500">
>>>>>>> ec7c9b9e16633081862d3518bb78d0277bd3cf48
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex justify-center flex-shrink-0 items-center px-4">
                <img
                  className="h-auto w-auto p-4"
                  src={Logo}
                  alt="Your Company"
                />
              </div>
<<<<<<< HEAD
              <nav className="mt-5 flex-1 space-y-1 bg-pink-400 ">
=======
              <nav className="mt-5 px-3 flex-1 space-y-1 bg-green-500 ">
>>>>>>> ec7c9b9e16633081862d3518bb78d0277bd3cf48
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
<<<<<<< HEAD
                      item.current ? 'text-white hover:bg-red-200 hover:text-white' : 'text-white hover:bg-red-200 hover:text-white',
=======
                      item.current ? 'bg-gray-800 text-white' : 'text-white hover:bg-green-200 hover:text-white',
>>>>>>> ec7c9b9e16633081862d3518bb78d0277bd3cf48
                      'group flex items-center px-2 py-2 text-base font-medium '
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-white' : 'text-white group-hover:text-white',
                        'mr-3 flex-shrink-0 h-7 w-7'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-blue shadow-md pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className=" h-6 w-6" aria-hidden="true" />
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
