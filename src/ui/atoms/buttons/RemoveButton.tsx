"use client"
import {useRouter} from "next/navigation";
import {useTransition} from "react";
import {removeITem} from "@/app/cart/actions";

export function RemoveButton({itemId}:{itemId:string}) {
    const [isPending, startTransition] = useTransition()
    const router =useRouter();
    return (
        <button
            disabled={isPending}
            onClick={() =>
                startTransition(async () => {
                    await removeITem(itemId);
                    router.refresh();
                })
            }
            className="mt-3 flex items-center justify-center rounded-md bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-400 hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
            Remove
        </button>
    );
}