import Link from "next/link";
import { FC } from "react";






   



//                  NOT USED YET












interface SidebarMenuItemProps {
    title: string;
    icon: JSX.Element;
    link: string;
    onClick: () => void;
    isActive: boolean;
    submenuItems?: JSX.Element[];
}

export const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
    title,
    icon,
    link,
    onClick,
    isActive,
    submenuItems,
}) => (
    <>
        <Link
            href={link}
            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                isActive && "bg-graydark dark:bg-meta-4"
            }`}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            {icon}
            {title}
            {/* ... (código del icono de flecha hacia abajo) */}
        </Link>
        {submenuItems && <ul>{submenuItems}</ul>}
    </>
);
