import React from "react";

interface TableEmailButtonProps {
    text: string;
}

export const TableEmailButton = ({ text }: TableEmailButtonProps) => {
    const [copied, setCopied] = React.useState(false);

    return (
        <>
            <button
                className="ml-2 border-1 bg-secondary dark:bg-slate-700 rounded-full p-1"
                title="Enviar email"
                onClick={() => {
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 1000);

                    // mail
                    window.open(`mailto:${text}`);
                }}
            >
                
                {copied ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-3 h-3"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-3 h-3"
                    >
                        <path
                            stroke-linecap="round"
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                    </svg>
                )}
            </button>
        </>
    );
};

export default TableEmailButton;
