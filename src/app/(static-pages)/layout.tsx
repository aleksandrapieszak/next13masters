import React from "react";

export default function StaticLayout({children}: { children: React.ReactNode }) {
    return(
        <div className="text-center max-x-md mx-auto">
            {children}
        </div>
        )
}