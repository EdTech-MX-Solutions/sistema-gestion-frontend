import { ReactNode, useState } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function suggestions(){
    return (
        <>
            <div className="container mx-auto justify-center py-5">
                <h1 className="text-4xl font-bold text-center bg-white p-3 rounded-full"> Siug </h1>
            </div>
        </>
    );
}

export default suggestions;