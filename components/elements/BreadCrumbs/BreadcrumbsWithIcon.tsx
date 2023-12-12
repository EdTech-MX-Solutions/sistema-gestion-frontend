import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";

export function HomeElement(route: string) {
    return (
        <Link href={route} className="opacity-60 hover:opacity-100" title="Inicio | Home">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
        </Link>
    );
}

export function BreadcrumbsWithIcon({children, baseRoute}: {children?: React.ReactNode, baseRoute: string}) {
    return (
        <Breadcrumbs className="text-black dark:text-gray-200">
            {HomeElement(baseRoute)}
            {children}
        </Breadcrumbs>
    );
}
