import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Tab } from "../interfaces/TabInterface";

function NavLink({ text, route, icon, active }: Tab & { active: boolean }) {
    const commonClasses =
        "inline-flex items-center justify-center p-1 md:p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group";
    const activeClasses = active
        ? "text-green-600 border-green-700 dark:text-green-500 dark:border-green-500"
        : "text-gray-500 dark:text-gray-400";

    return (
        <li className="mr-2">
            <Link
                href={`/student/${route}`}
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
    tabs: Tab[];
}

function StudentTabs({ tabs }: StudentTabsProps) {
    const router = useRouter();
    const pathname = router.pathname;
    const rute_base = "/student/";

    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-xs md:text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {tabs.map((tab) => (
                    <NavLink
                        key={tab.text}
                        {...tab}
                        active={pathname === rute_base + tab.route}
                    />
                ))}
            </ul>
        </div>
    );
}

export default StudentTabs;
