"use client"
import React, {Fragment, useState} from 'react'
import Link from "next/link";
import {Dialog, Popover, Tab, Transition} from '@headlessui/react'
import {
    Bars3Icon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ActiveLink} from "@/ui/atoms/ActiveLink";
import {SearchInput} from "@/ui/atoms/SearchInput";

type Category = {
    id: string;
    name: string;
    slug: string;
}

type NavProps = {
    categories: Category[];
    quantity: number;
}

export const Nav = ({
                        categories, quantity
                    }: NavProps) => {
    const [open, setOpen] = useState(false)

    const handleLinkClick = () => {
        setOpen(false);
    };


    return (
        <div className="flex justify-between items-center bg-white"> {/* Kontener Flex */}
            <nav className="bg-white flex-grow">
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25"/>
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
                                <Dialog.Panel
                                    className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                    <div className="flex px-4 pb-2 pt-5">
                                        <button
                                            type="button"
                                            className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                    </div>

                                    {/* Links */}
                                    <Tab.Group as="div" className="mt-2 text-lg">
                                        <div className="border-b border-gray-200">
                                            <Tab.List
                                                className="flex-col space-y-4 px-4 py-2"> {/* Ustawienia flex-col i space-y-4 */}
                                                <ul className="w-full" onClick={handleLinkClick}>
                                                    <li className="w-full text-left"> {/* Dodane w-full i text-center */}
                                                        <ActiveLink exact={true} href={"/"}
                                                                    className="block py-2 pl-3 pr-4 text-base font-medium text-black hover:bg-gray-50 hover:text-gray-700"
                                                                    activeClassName={`border-b-4 border-gray-500`}>Home </ActiveLink>
                                                    </li>
                                                    <li className="w-full text-left">
                                                        <ActiveLink exact={false} href={"/products"}
                                                                    className="block py-2 pl-3 pr-4 text-base font-medium text-black hover:bg-gray-50 hover:text-gray-700"
                                                                    activeClassName={`border-b-4 border-gray-500`}> All </ActiveLink>
                                                    </li>
                                                    {categories.map((value) => (
                                                        <li key={value.id} className="w-full text-left">
                                                            <ActiveLink exact={false} href={`/categories/${value.slug}`}
                                                                        className="block py-2 pl-3 pr-4 text-base font-medium text-black hover:bg-gray-50 hover:text-gray-700"
                                                                        activeClassName={`border-b-4 border-gray-500`}>{value.name}</ActiveLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Tab.List>
                                        </div>
                                    </Tab.Group>
                                    <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                        <div className="flow-root">
                                            <SearchInput/>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <header className="relative">
                    {/* Secondary navigation */}
                    <div className="bg-white">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="border-b border-gray-200">
                                <div className="flex h-16 items-center justify-between">
                                    {/* Logo (lg+) */}
                                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                                    </div>

                                    <div className="hidden h-full lg:flex">
                                        {/* Flyout menus */}
                                        <Popover.Group className="inset-x-0 bottom-0 px-4">
                                            <div className="flex h-full justify-center space-x-8">
                                                <ul className="flex space-x-4 mx-auto p-5 max-w-7xl px-2 sm:px-6 lg:px-8 text-lg">
                                                    <li>
                                                        <ActiveLink exact={true} href={"/"}
                                                                    className="block py-2 pl-3 pr-4 text-base font-medium text-black hover:bg-gray-50 hover:text-gray-700"
                                                                    activeClassName={`border-b-4 border-gray-500`}>Home </ActiveLink>
                                                    </li>
                                                    <li>
                                                        <ActiveLink exact={false} href={"/products"}
                                                                    className="block py-2 pl-3 pr-4 text-base font-medium text-black hover:bg-gray-50 hover:text-gray-700"
                                                                    activeClassName={`border-b-4 border-gray-500`}> All </ActiveLink>
                                                    </li>
                                                    {categories.map((value) => (
                                                        <li key={value.id}>
                                                            <ActiveLink exact={false} href={`/categories/${value.slug}`}
                                                                        className="block py-2 pl-3 pr-4 text-base font-medium text-black hover:bg-gray-50 hover:text-gray-700"
                                                                        activeClassName={`border-b-4 border-gray-500`}>{value.name}</ActiveLink>
                                                        </li>
                                                    ))}
                                                    <SearchInput/>
                                                </ul>
                                            </div>
                                        </Popover.Group>
                                    </div>

                                    {/* Mobile menu and search (lg-) */}
                                    <div className="flex flex-1 items-center lg:hidden">
                                        <button
                                            type="button"
                                            className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setOpen(true)}
                                        >
                                            <span className="sr-only">Open menu</span>
                                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                                        </button>

                                        {/* Search */}
                                        <span className="sr-only">Search</span>
                                        {/*<MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true"/>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </nav>
            {/* Blok z koszykiem */}
            <div className="p-10"> {/* Dodane "absolute top-0 right-0 z-20" */}
                <Link href="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                        className="h-8 w-8 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                    <span
                        className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{quantity}</span>
                    <span className="sr-only">items in cart, view bag</span>
                </Link>
            </div>
        </div>
    )
}