import React from "react";

interface TableParentsProps {
    title: string;
    children: React.ReactNode;
}

export const TableContainer = ({ title, children }: TableParentsProps) => {

    return (
        <>
            <div className="justify-center dark:bg-slate-500 bg-white rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-gray-200 p-5">
                    {" "}
                    {title}{" "}
                </h4>
                <table className="table-fixed w-full text-sm dark:text-gray-200 text-center font-semibold">
                    {children}
                </table>
            </div>
        </>
    );
};

export default TableContainer;
