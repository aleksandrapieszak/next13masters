"use client"

import Link from "next/link";
import React, {ReactNode} from "react";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import type {Route} from "next";

type ActiveLinkProps<T extends string> = {
    href: Route<T>;
    children: ReactNode;
    exact?: boolean;
    className?: string;
    activeClassName?: string;
};

export const ActiveLink = <T extends string>({
                                                 href,
                                                 children,
                                                 className,
                                                 activeClassName,
                                                 exact = true,
                                             }: ActiveLinkProps<T>) => {
    const pathname = usePathname();

    const isActive = exact
        ? pathname === href
        : pathname.startsWith(href) &&
        (pathname[href.length] === "/" || pathname.length === href.length);


    return (
        <Link
            href={href}
            className={clsx(className, isActive && activeClassName)}> {children} </Link>

    )
}