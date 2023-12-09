import React, { useEffect, useRef, useState } from "react";

import Logo from "../../public/logo.png";
import { useRouter } from "next/router";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useCookies } from "react-cookie";

interface SidebarProps {
    children: React.ReactNode;
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
    role: string;
}

const Sidebar = ({
    children,
    sidebarOpen,
    setSidebarOpen,
    role,
}: SidebarProps) => {
    const [cookies, setCookie, removeCookie] = useCookies(["token", "user", "childs", "boleta"]);
    const router = useRouter();

    const system_name = "EdTech-MX SIGE";
    const version = "V B0.1";
    const version_name = `${system_name} ${version}`;

    // const location = useLocation();
    const pathname = router.pathname;

    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);

    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-20 overflow-y-scroll flex h-screen w-72.5 flex-col duration-300 ease-linear dark:bg-slate-500 bg-white dark:text-gray-200 lg:static lg:translate-x-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                {/* <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink> */}

                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <svg
                        className="fill-current"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>
            {/* <!-- SIDEBAR HEADER --> */}

            <div className="no-scrollbar flex flex-col overflow-visible duration-300 ease-linear h-screen">
                <nav className="pb-4 lg:pl-2 lg:pr-4 min-h-screen">
                    <div className="py-16 ">
                        <Image src={Logo} className="hidden lg:block" alt="Logo" width={200} />
                    </div>
                    <div>
                        {/* <!-- Menu Groups --> */}
                        {children}
                    </div>
                    <div>
                        <ul className="self-end">
                            <li
                                onClick={() => {
                                    removeCookie("token", { path: "/" });
                                    setCookie("user", "", { path: "/" });
                                    setCookie("childs", "", { path: "/" });
                                    setCookie("boleta", "", { path: "/" });
                                    signOut();
                                }}
                                className={`group relative pb-3 flex items-center gap-2.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:cursor-pointer hover:font-bold dark:hover:bg-meta-4 ${"bg-graydark dark:bg-meta-4"}`}
                            >
                                <svg
                                    className="ml-1.5 inline-block mr-1.5 mb-0.5 dark:text-white text-black"
                                    display={"default"}
                                    width="20"
                                    height="20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    id="signout"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"
                                    ></path>
                                </svg>
                                Cerrar Sesión
                            </li>
                            <Link href={"/" + role + "/system.info." + role}>
                                <li
                                    className={`group relative pb-3 flex items-center gap-2.5 rounded-sm py-1 px-4 font-medium dark:text-gray-200 text-black duration-300 ease-in-out hover:cursor-pointer hover:font-bold dark:hover:bg-meta-4`}
                                >
                                    {/* info svg icon whitout fill */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        width="24px"
                                        fill="currentColor"
                                    >
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                    Sobre el Sistema
                                </li>
                            </Link>
                            <li
                                className={`group mt-1 text-center relative items-center rounded-sm py-1 text-xs dark:text-gray-200 text-black duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
                            >
                                <p>{version_name}</p>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* <!-- Sidebar Footer --> */}
                {/* <!-- Sidebar Footer --> */}
            </div>
        </aside>
    );
};

export default Sidebar;
