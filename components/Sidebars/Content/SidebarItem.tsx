import Link from "next/link";

export const sidebarItem = (label: string, path: string) => (
    <Link href={path}>
        <div
            className={`group relative flex items-center gap-2.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${"bg-graydark dark:bg-meta-4"}`}
        >
            {label}
        </div>
    </Link>
);