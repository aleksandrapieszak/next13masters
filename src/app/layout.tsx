import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";
import Link from "next/link";
import {ActiveLink} from "@/ui/atoms/ActiveLink";
import {ProductList} from "@/ui/organisms/ProductList";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Products",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pl">
        <body className={inter.className}>
        <nav className="bg-gray-100">
            <ul className="flex space-x-4 mx-auto p-5 max-w-7xl px-2 sm:px-6 lg:px-8 ">
                <li>
                    <ActiveLink href={"/"}>Strona główna </ActiveLink>
                </li>
                <li>
                    <ActiveLink  href={"/products"}> Produkty </ActiveLink>
                </li>
            </ul>
        </nav>
        <section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
            {children}
        </section>
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-500">
                        &copy; 2023 Your Company, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
