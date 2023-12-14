interface CardProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
    customtitle?: boolean;
}

const CardView = ({ title, description, children, customtitle }: CardProps) => {
    if (customtitle) {
        return (
            <>
                <div className="md:m-4 lg:m-6">
                    {children}
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="md:m-4 lg:m-6">
                    <div className="text-4xl font-semibold text-gray-800 dark:text-white">
                        <h1>{title || "Cargando.."}</h1>
                    </div>
                    <div className="mt-2 text-gray-500 dark:text-gray-200">{description || "Cargando.."}</div>
                    {children}
                </div>
            </>
        );
    }
};

export default CardView;
