import Link from "next/link";

type PanelCardProps = {
    category?: string;
    title: string;
    bgColor: string;
    onClick?: () => void;
    route?: string;
    textSize?: string;
    isActionEnabled?: boolean;
    ActionText?: string;
};

const PanelCard = ({
    category,
    title,
    bgColor,
    onClick,
    route,
    textSize,
    isActionEnabled,
    ActionText,
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
        <div className="relative pt-10 px-10 flex items-center group-hover:scale-110 transition-transform">
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
        {
            category ? (
                <div className="relative text-white px-6 pb-6 mt-6 group-hover:opacity-75">
                    <span className="block -mb-1">{category}</span>
                </div>
            ) : null
        }
        {isActionEnabled ? (
            <div className="p-6 border-t border-blue-gray-50 px-6 py-5">
                <p className="antialiased font-sans text-sm leading-normal flex items-center font-normal group-hover:scale-[1.02] transition-transform group-hover:text-white text-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 group-hover:scale-[1.1] group-hover:rotate-180 transition-transform"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                    </svg>
                    &nbsp;{ActionText}
                </p>
            </div>
        ) : null}
    </Link>
);

export default PanelCard;
