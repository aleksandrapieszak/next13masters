// "use client"
// import clsx from "clsx";
// import Link from "next/link";
// import type { ReactNode } from 'react';
// import type {Route} from "next";
// import {usePathname, useSearchParams} from "next/navigation";
//
// type ActiveLinkProps<T extends string> = {
//     href: Route<T>;
//     children: ReactNode;
//     exact?: boolean;
//     className?: string;
//     activeClassName?: string;
// };
//
// export const ActiveLink = <T extends string>({
//                                                  href,
//                                                  children,
//                                                  className,
//                                                  activeClassName,
//                                                  exact = true,
//                                              }: ActiveLinkProps<T>) => {
//     const pathname = usePathname();
//     const searchParams = useSearchParams();
//
//
//
//     const isActive = exact
//         ? pathname === href
//         : pathname.startsWith(href) &&
//         (pathname[href.length] === "/" || pathname.length === href.length);
//
//
//     return (
//         <Link
//             href={href}
//             className={clsx(className, isActive && activeClassName)}
//             aria-current={true}> {children} </Link>
//
//     )
// }



"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation';
import type { ReactNode } from 'react';

type ActiveLinkProps = {
    href: string;
    children: ReactNode;
    exact?: boolean;
    className?: string;
    activeClassName?: string;
};

export const ActiveLink = ({
                               href,
                               children,
                               className,
                               activeClassName,
                               exact = true,
                           }: ActiveLinkProps) => {
    const currentPathname = usePathname();
    const currentSearchParams = useSearchParams();

    // Rozdziel przekazany href na ścieżkę i parametry zapytania.
    const url = new URL(href, 'http://dummy.com'); // Używamy tymczasowej domeny, ponieważ chcemy tylko parsować ścieżkę i parametry.

    const isActive = exact
        ? currentPathname === url.pathname && currentSearchParams.toString() === url.searchParams.toString()
        : currentPathname.startsWith(url.pathname);

    return (
        <Link href={href} className={clsx(className, isActive && activeClassName)} aria-current={isActive ? "page" : undefined}>
                {children}
        </Link>
    );
};
