"use client"

import Link from "next/link";
import React from "react";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import {Route} from "next";

export const ActiveLink=({href, children}:{href:Route<string>, children: React.ReactNode})=>{

    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            className={clsx(`text-black hover:text-gray-400`,
            isActive && `underline`)}> {children} </Link>

    )
}