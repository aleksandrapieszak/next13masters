"use client"
import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from 'react';
import type {Route} from "next";
import {usePathname} from "next/navigation";

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
            className={clsx(className, isActive && activeClassName)}
            aria-current={true}> {children} </Link>

    )
}