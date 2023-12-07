interface ButtonInterface {
    className?: string;
    title?: string;
    color?: string;
}

function Loader({className, color }: ButtonInterface) {
    let buttonColor =
        color ||
        "bg-green-600";
    let classNameButton = `w-3 h-3 rounded-full animate-pulse ${buttonColor} `;
    const title = "loading";
    classNameButton += className;
    return (
        <>
            <div className="flex my-5 mx-auto gap-2 justify-center">
                <div className={classNameButton}></div>
                <div className={classNameButton + " delay-50"}></div>
                <div className={classNameButton + " delay-200"}></div>
            </div>
        </>
    );
}

export default Loader;
