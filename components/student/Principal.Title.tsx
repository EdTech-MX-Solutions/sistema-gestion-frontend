import React from "react";

interface PrincipalTitleprops {
    title : string
}

const PrincipalTitle = ({title} : PrincipalTitleprops) =>{
    return(
        <>
            <div className="container mx-auto justify-center py-5">
                <h1 className="text-4xl font-bold text-center dark:bg-slate-500 dark:text-white bg-white p-5 rounded-full"> {title} </h1>
            </div>
        </>
    );
};

export default PrincipalTitle;