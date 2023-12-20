interface ButtonInterface {
    children: React.ReactNode | string;
    className?: string;
    title?: string;
    color?: string;
}

function Button({ children, className, color }: ButtonInterface) {
    let buttonColor = color || "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300";
    let classNameButton = `text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 ${buttonColor} `;
    const title = children?.toString() || "";
    classNameButton += className;
    return (
        <>
            <button
                type="button"
                className={classNameButton}
                title={title}
            >
                {children}
            </button>
        </>
    );
}

export default Button;
