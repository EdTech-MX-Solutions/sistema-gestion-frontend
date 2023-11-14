import React from "react";

interface PrincipalTitleprops {
    title : string
}

const PrincipalTitle = ({title} : PrincipalTitleprops) =>{
    return(
        <>
            <div className="container mx-auto justify-center py-5">
                <h1 className="text-4xl font-bold text-center bg-white p-5 rounded-full"> {title} </h1>
            </div>
        </>
    );
};

export default PrincipalTitle;