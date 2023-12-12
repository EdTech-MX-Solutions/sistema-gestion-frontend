import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Tab } from "../interfaces/TabInterface";

function NavLink({ text, route, icon, active, rutaBase }: Tab & { active: boolean; rutaBase: string }) {
    const commonClasses =
        "inline-flex items-center justify-center p-1 md:p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group";
    const activeClasses = active
        ? "text-green-600 border-green-700 dark:text-white dark:border-green-500"
        : "text-gray-500 dark:text-gray-200";
        const rute = rutaBase === "" ? "" : `/student/${route}`;
    return (
        <li className="mr-2">
            <Link
                href={rute}
                className={`${commonClasses} ${activeClasses}`}
                aria-current={active ? "page" : undefined}
            >
                {icon && (
                    <i
                        className={`w-4 h-4 mr-2 ${
                            active
                                ? "text-green-600 dark:text-green-500"
                                : "text-gray-400 dark:text-gray-500"
                        }`}
                        aria-hidden="true"
                    >
                        {icon}
                    </i>
                )}
                {text}
            </Link>
        </li>
    );
}

interface StudentTabsProps {
    tabs: Tab[],
    isDirective? : boolean
}

function StudentTabs({ tabs, isDirective }: StudentTabsProps) {
    const router = useRouter();
    const pathname = router.pathname;
    const rute_base = isDirective ? "" : "/student/";

    return (
        <div className="print:hidden hidden md:block border-b border-gray-200 dark:border-gray-400">
            <ul className="print:hidden flex flex-wrap -mb-px text-xs md:text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {tabs.map((tab) => (
                    <NavLink
                        key={tab.text}
                        {...tab}
                        active={pathname === rute_base + tab.route}
                        rutaBase = {rute_base}
                    />
                ))}
            </ul>
        </div>
    );
}

export default StudentTabs;
