import SidebarLinkGroup from "@/components/SidebarLinkGroup";
import { FC } from "react";
import { sidebarItem } from "./SidebarItem";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { useRouter } from "next/router";






   



//                  NOT USED YET













interface SidebarMenuGroupProps {
    title: string;
    items: { title: string; link: string }[];
    sidebarExpanded: boolean;
    setSidebarExpanded: (value: boolean) => void;
}

export const SidebarMenuGroup: FC<SidebarMenuGroupProps> = ({
    title,
    items,
    sidebarExpanded,
    setSidebarExpanded,
}) => {
    const router = useRouter();

    return (
        <div>
            <ul className="mb-6 flex flex-col gap-1.5">
                <SidebarLinkGroup
                    activeCondition={
                        router.pathname === "/" ||
                        router.pathname.includes("dashboard")
                    }
                >
                    {(handleClick, open) => (
                        <SidebarMenuItem
                            title={title}
                            icon={<svg /* ... */ />}
                            link="#"
                            onClick={() => {
                                sidebarExpanded
                                    ? handleClick()
                                    : setSidebarExpanded(true);
                            }}
                            isActive={router.pathname === "/"}
                            submenuItems={items.map((item) => (
                                <li key={item.title}>
                                    {sidebarItem(item.title, item.link)}
                                </li>
                            ))}
                        />
                    )}
                </SidebarLinkGroup>
            </ul>
        </div>
    );
};
