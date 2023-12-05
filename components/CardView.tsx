interface CardProps {
    title: string;
    description: string;
    children: React.ReactNode;
    customtitle?: boolean;
}

const CardView = ({ title, description, children, customtitle }: CardProps) => {
    if (customtitle) {
        return (
            <>
                <div className="md:m-10 md:p-10">
                    {children}
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="md:m-10 md:p-10">
                    <div className="text-4xl font-semibold">
                        <h1>{title}</h1>
                    </div>
                    <div className="mt-2">{description}</div>
                    {children}
                </div>
            </>
        );
    }
};

export default CardView;
