import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";
import {getCategories} from "@/app/api/products";
import {Nav} from "@/ui/organisms/Nav";
import {getCartByIdFromCookie} from "@/app/api/cart";
import {ScrollToTopButton} from "@/ui/atoms/buttons/ScrollToTopButton";
import {Footer} from "@/ui/organisms/Footer";

const inter = Inter({subsets: ["latin", "latin-ext"]});

export const metadata: Metadata = {
    title: "Products",
    description: "Your the best shop"
};

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;

}) {
    const categories = await getCategories();
    const cart = await getCartByIdFromCookie();
    const quantity = cart?.orderItems.length ?? 0;

    return (
        <html lang="pl">
        <body className={inter.className}>
        {/*<Nav categories={categories}/>*/}
        <Nav categories={categories} quantity={quantity}/>
        {/*<nav className="bg-gray-100">*/}
        {/*    <ul className="flex space-x-4 mx-auto p-5 max-w-7xl px-2 sm:px-6 lg:px-8 ">*/}
        {/*        <li>*/}
        {/*            <ActiveLink exact={true} href={"/"} className={`text-black hover:text-gray-400`}*/}
        {/*                        activeClassName={`underline`}>Home </ActiveLink>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*            <ActiveLink exact={false} href={"/products"} className={`text-black hover:text-gray-400`}*/}
        {/*                        activeClassName={`underline`}> All </ActiveLink>*/}
        {/*        </li>*/}
        {/*        {collections.map((value) => (*/}
        {/*            <li key={value.id}>*/}
        {/*                <ActiveLink exact={false} href={`/collections/${value.slug}`} className={`text-black hover:text-gray-400`}*/}
        {/*                            activeClassName={`border-b-4 border-indigo-500`}>{value.name}</ActiveLink>*/}
        {/*            </li>*/}
        {/*        ))}*/}

        {/*        {categories.map((value) => (*/}
        {/*            <li key={value.id}>*/}
        {/*                <ActiveLink exact={false} href={`/categories/${value.slug}`} className={`text-black hover:text-gray-400`}*/}
        {/*                            activeClassName={`border-b-4 border-indigo-500`}>{value.name}</ActiveLink>*/}
        {/*            </li>*/}
        {/*        ))}*/}
        {/*        <SearchInput />*/}
        {/*    </ul>*/}
        {/*</nav>*/}
        <section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
            {children}
            <ScrollToTopButton/>

        </section>
        <Footer/>
        {/*<footer className="bg-white">*/}
        {/*    <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">*/}
        {/*        <div className="mt-8 md:order-1 md:mt-0">*/}
        {/*            <p className="text-center text-xs leading-5 text-gray-500">*/}
        {/*                &copy; 2023 Your Company, Inc. All rights reserved.*/}
        {/*            </p>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</footer>*/}
        </body>
        </html>
    );
}
