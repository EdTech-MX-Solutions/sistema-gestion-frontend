import Link from "next/link";
import { BreadcrumbsWithIcon, HomeElement } from "./BreadcrumbsWithIcon";

export function BreadcrumbsDirective({ActualRoute}: {ActualRoute: string}) {
    return (
        <BreadcrumbsWithIcon baseRoute="/directive">
            <Link href="#">{ActualRoute}</Link>
        </BreadcrumbsWithIcon>
    );
}
