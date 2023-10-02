"use client";
import {type ChangeEvent, type FormEvent, useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {useDebounce} from "use-debounce";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query") || "");
    //opóźnienie aktualizacji wartości stanu o pół sekundy
    const [value] = useDebounce(query, 500);

    //wywolywana za kazdym razem kiedy zmienia się wartość inputu
    const handleSearchOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === "") {
            router.push('/products/1')
        }

        setQuery(event.target.value);
    };

    //Kiedy formularz jest wysyłany, przeglądarka jest przekierowywana do strony /search z parametrem zapytania "query" zawierającym wartość wprowadzoną w polu wyszukiwania.
    const handleSearchOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/search?query=${query?.toString()}`);
    };


    useEffect(() => {
        if (value) {
            router.push(`/search?query=${query?.toString()}`);
        }
    }, [value]);

    return (
        <form className="flex justify-between gap-3" action={`/search`} onSubmit={handleSearchOnSubmit}>
            <input
                className="w-[200px] rounded-md border p-2 "
                type="search"
                role="searchbox"
                placeholder="Search..."
                autoComplete="off"
                value={query}
                onChange={handleSearchOnChange}
            />
            <button type="submit">
                <MagnifyingGlassIcon className="h-5 w-5 text-neutral-800"/>
            </button>
        </form>
    );
};