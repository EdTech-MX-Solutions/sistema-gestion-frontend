import * as React from "react";

interface TileCardProps {
    closeCallback?: () => void;
    className?: string;
    children?: React.ReactNode;
    title: string;
    description: string;
    big?: boolean;
    content?: React.ReactNode;
}

const TileCard: React.FC<TileCardProps> = ({
    closeCallback,
    className,
    children,
    title,
    description,
    big,
    content,
}) => {
    return (
        <>
            <div
                className={
                    !big
                        ? (big ? "sm:w-1/2" : "") +
                          `relative w-full sm:mt-0 mt-4 drop-shadow-md ${className}`
                        : `relative drop-shadow-md ${className}`
                }
            >
                <div>
                    <div className="absolute bottom-0 left-0 md:p-6 lg:p-4 p-6 z-10">
                        <h2 className="text-3xl lg:text-5xl font-bold 5 text-white drop-shadow-2xl">
                            {title}
                        </h2>
                        <p className="text-xs lg:text-xl leading-4 text-white mt-2 font-medium">
                            {description}
                        </p>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
};

export default TileCard;
