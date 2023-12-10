import Link from "next/link";

export const sidebarItem = (label: string, path: string) => {
    const animation = "transition-all duration-500 ease-in-out rounded-lg hover:bg-green-700 dark:hover:text-white dark:hover:bg-green-100 dark:hover:bg-opacity-10 hover:bg-opacity-10 ";
    return (
    <Link href={path}>
        
        <div
            className={`group relative flex items-center gap-2.5 py-1 px-4 font-medium text-sm lg:text-md ${animation}`}
        >
            {label}
        </div>
    </Link>
)};