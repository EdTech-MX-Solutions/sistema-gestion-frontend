import Link from "next/link";

type PanelCardProps = {
    category: string;
    title: string;
    bgColor: string;
    onClick?: () => void;
    route?: string;
    textSize?: string;
};

const PanelCard = ({
    category,
    title,
    bgColor,
    onClick,
    route,
    textSize,
}: PanelCardProps): JSX.Element => (
    <Link
        href={route || "#"}
        onClick={onClick}
        className={`flex-shrink-0 my-2 mr-4 relative overflow-hidden bg-${bgColor} rounded-lg w-full lg:w-1/4 sm:w-auto shadow-xl group`}
    >
        <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
        >
            <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
            />
            <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
            />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            {textSize == "sm" ? (
                <h1
                    className={`relative w-full sm:w-auto font-semibold text-xl text-white`}
                >
                    {title}
                </h1>
            ) : (
                <h1
                    className={`relative w-full sm:w-auto font-semibold text-3xl text-white`}
                >
                    {title}
                </h1>
            )}
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{category}</span>
        </div>
    </Link>
);

export default PanelCard;
