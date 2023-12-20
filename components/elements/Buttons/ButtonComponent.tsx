import React, { ButtonHTMLAttributes } from "react";
import Loader from "../Loader";

interface ButtonComponentProps {
    title: String;
    color: String;
    onClick?: () => void;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    loading?: boolean;
    active?: boolean;
    children?: React.ReactNode;
}

export const ButtonComponent = ({
    title,
    color,
    type,
    loading,
    onClick,
    children,
}: ButtonComponentProps) => {
    const btnClassName = `focus:outline-none text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`;

    return (
        <>
            <div className="group mx-auto justify-center p-2 m-3">
                <button
                    type={type || "button"}
                    className={btnClassName}
                    onClick={onClick}
                    disabled={loading}
                >
                    {loading ? (
                        <Loader color="bg-blue-200" />
                    ) : (
                        <>{children ? children : <>{title}</>}</>
                    )}
                </button>
            </div>
        </>
    );
};

export default ButtonComponent;
