import {type Route} from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
    totalPages: number;
    url: string;
    sortValue:string;
};

export const Pagination = ({ totalPages, url, sortValue }: PaginationProps) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    if (sortValue){
        return (
            <div className="mt-2 text-center isolate rounded-lg bg-white ">
                <nav className="isolate inline-flex -space-x-px rounded-lg shadow-sm border" aria-label="Pagination">
                    {pages.map((page) => (
                        <ActiveLink key={page} className={"relative z-10 inline-flex items-center bg-gray-200 px-4 py-2 text-sm font-semibold text-black hover:scale-125"} activeClassName={"underline text-white bg-gray-400 "} href={`${url}/${page}?sort=${sortValue}` as Route}>
                            {page}
                        </ActiveLink>
                    ))}

                </nav>
            </div>
        );
    }

    return (<div className="mt-2 text-center isolate rounded-lg   ">
        <nav className="isolate inline-flex -space-x-px rounded-lg shadow-sm border" aria-label="Pagination">
            {pages.map((page) => (
                <ActiveLink key={page} className={"relative z-10 inline-flex items-center bg-gray-200 px-4 py-2 text-sm font-semibold text-black hover:scale-125"} activeClassName={"underline text-white bg-gray-400 "} href={`${url}/${page}` as Route}>
                    {page}
                </ActiveLink>
            ))}


        </nav>
    </div>)

};


