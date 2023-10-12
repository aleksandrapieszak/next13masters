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
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 disabled:cursor-wait disabled:text-slate-400"
        >
            Remove
        </button>
    );
}