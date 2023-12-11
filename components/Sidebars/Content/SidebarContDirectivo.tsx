import React, { useState } from "react";
import SidebarLinkGroup from "../../SidebarLinkGroup";
import { useRouter } from "next/router";
import { sidebarItem } from "./SidebarItem";
import Link from "next/link";

const SidebarContDirectivo = () => {
    let storedSidebarExpanded = "true";
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null
            ? false
            : storedSidebarExpanded === "true"
    );
    const router = useRouter();
    const pathname = router.pathname;
    const base_rute = "/directive/";

    return (
        <>
            {/* <!-- Menu Group --> */}
            <div>
                <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Menu Item Dashboard --> */}

                    <SidebarLinkGroup
                        activeCondition={
                            pathname === "/" || pathname.includes("dashboard")
                        }
                    >
                        {(handleClick, open) => {
                            return (
                                <React.Fragment>
                                    <Link
                                        href="#"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                            (pathname === "/" ||
                                                pathname.includes(
                                                    "dashboard"
                                                )) &&
                                            "bg-graydark dark:bg-meta-4"
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            sidebarExpanded
                                                ? handleClick()
                                                : setSidebarExpanded(true);
                                        }}
                                    >
                                        <svg
                                            className="ml-1.5 inline-block mr-1.5 mb-0.5 text-gray-800 dark:text-gray-200 text-black"
                                            display={"default"}
                                            width="20"
                                            height="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="user"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
                                            ></path>
                                        </svg>
                                        ALUMNOS
                                        <svg
                                            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                                open && "rotate-180"
                                            }`}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                                fill=""
                                            />
                                        </svg>
                                    </Link>
                                    {/* <!-- Dropdown Menu Start --> */}
                                    <div
                                        className={`translate transform overflow-hidden ${
                                            !open && "hidden"
                                        }`}
                                    >
                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-4">
                                            <li>
                                                {sidebarItem(
                                                    "Panel Alumnos",
                                                    base_rute +
                                                        "actionsStudent/"
                                                )}
                                                {sidebarItem(
                                                    "Consultar Alumnos",
                                                    base_rute +
                                                        "actionsStudent/consultStudents/"
                                                )}
                                                {sidebarItem(
                                                    "Registrar Alumno",
                                                    base_rute +
                                                        "actionsStudent/registrerDataPersonalStudent"
                                                )}
                                                {sidebarItem(
                                                    "Estadisticas Alumno",
                                                    base_rute +
                                                        "actionsStudent/stats"
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Dropdown Menu End --> */}
                                </React.Fragment>
                            );
                        }}
                    </SidebarLinkGroup>
                </ul>
            </div>
            {/* <!-- Menu Group --> */}
            <div>
                <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Menu Item Dashboard --> */}

                    <SidebarLinkGroup
                        activeCondition={
                            pathname === "/" || pathname.includes("dashboard")
                        }
                    >
                        {(handleClick, open) => {
                            return (
                                <React.Fragment>
                                    <Link
                                        href="#"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                            (pathname === "/" ||
                                                pathname.includes(
                                                    "dashboard"
                                                )) &&
                                            "bg-graydark dark:bg-meta-4"
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            sidebarExpanded
                                                ? handleClick()
                                                : setSidebarExpanded(true);
                                        }}
                                    >
                                        <svg
                                            className="ml-1.5 inline-block mr-1.5 mb-0.5 text-gray-800 dark:text-gray-200 text-black"
                                            display={"default"}
                                            width="20"
                                            height="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 1"
                                            viewBox="0 0 24 24"
                                            id="graduation-cap"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M21.49,10.19l-1-.55h0l-9-5-.11,0a1.06,1.06,0,0,0-.19-.06l-.19,0-.18,0a1.17,1.17,0,0,0-.2.06l-.11,0-9,5a1,1,0,0,0,0,1.74L4,12.76V17.5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V12.76l2-1.12V14.5a1,1,0,0,0,2,0V11.06A1,1,0,0,0,21.49,10.19ZM16,17.5a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13.87l4.51,2.5.15.06.09,0a1,1,0,0,0,.25,0h0a1,1,0,0,0,.25,0l.09,0a.47.47,0,0,0,.15-.06L16,13.87Zm-5-3.14L4.06,10.5,11,6.64l6.94,3.86Z"
                                            ></path>
                                        </svg>
                                        GRUPOS
                                        <svg
                                            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                                open && "rotate-180"
                                            }`}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                                fill=""
                                            />
                                        </svg>
                                    </Link>
                                    {/* <!-- Dropdown Menu Start --> */}
                                    <div
                                        className={`translate transform overflow-hidden ${
                                            !open && "hidden"
                                        }`}
                                    >
                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-4">
                                            <li>
                                                {sidebarItem(
                                                    "Consultar Grupos",
                                                    base_rute +
                                                        "/actionsGroup/consultGroups"
                                                )}
                                                {sidebarItem(
                                                    "Crear Grupo",
                                                    base_rute +
                                                        "/actionsGroup/createGroup"
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Dropdown Menu End --> */}
                                </React.Fragment>
                            );
                        }}
                    </SidebarLinkGroup>
                </ul>
            </div>

            {/* <!-- Menu Group --> */}
            <div>
                <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Menu Item Dashboard --> */}

                    <SidebarLinkGroup
                        activeCondition={
                            pathname === "/" || pathname.includes("dashboard")
                        }
                    >
                        {(handleClick, open) => {
                            return (
                                <React.Fragment>
                                    <Link
                                        href="#"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                            (pathname === "/" ||
                                                pathname.includes(
                                                    "dashboard"
                                                )) &&
                                            "bg-graydark dark:bg-meta-4"
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            sidebarExpanded
                                                ? handleClick()
                                                : setSidebarExpanded(true);
                                        }}
                                    >
                                        <svg
                                            className="ml-1.5 inline-block mr-1.5 mb-0.5 text-gray-800 dark:text-gray-200 text-black"
                                            display={"default"}
                                            width="20"
                                            height="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 1"
                                            viewBox="0 0 24 24"
                                            id="graduation-cap"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M21.49,10.19l-1-.55h0l-9-5-.11,0a1.06,1.06,0,0,0-.19-.06l-.19,0-.18,0a1.17,1.17,0,0,0-.2.06l-.11,0-9,5a1,1,0,0,0,0,1.74L4,12.76V17.5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V12.76l2-1.12V14.5a1,1,0,0,0,2,0V11.06A1,1,0,0,0,21.49,10.19ZM16,17.5a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13.87l4.51,2.5.15.06.09,0a1,1,0,0,0,.25,0h0a1,1,0,0,0,.25,0l.09,0a.47.47,0,0,0,.15-.06L16,13.87Zm-5-3.14L4.06,10.5,11,6.64l6.94,3.86Z"
                                            ></path>
                                        </svg>
                                        PROFESORES
                                        <svg
                                            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                                open && "rotate-180"
                                            }`}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                                fill=""
                                            />
                                        </svg>
                                    </Link>
                                    {/* <!-- Dropdown Menu Start --> */}
                                    <div
                                        className={`translate transform overflow-hidden ${
                                            !open && "hidden"
                                        }`}
                                    >
                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-4">
                                            <li>
                                                {sidebarItem(
                                                    "Consultar Profesores",
                                                    base_rute +
                                                        "/actionsProfessor/consultProfessors"
                                                )}
                                                {sidebarItem(
                                                    "Registrar Profesores",
                                                    base_rute +
                                                        "/actionsProfessor/registrerProfessor"
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Dropdown Menu End --> */}
                                </React.Fragment>
                            );
                        }}
                    </SidebarLinkGroup>
                </ul>
            </div>
            {/* <!-- Menu Group --> */}
            <div>
                <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Menu Item Dashboard --> */}

                    <SidebarLinkGroup
                        activeCondition={
                            pathname === "/" || pathname.includes("dashboard")
                        }
                    >
                        {(handleClick, open) => {
                            return (
                                <React.Fragment>
                                    <Link
                                        href="#"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                            (pathname === "/" ||
                                                pathname.includes(
                                                    "dashboard"
                                                )) &&
                                            "bg-graydark dark:bg-meta-4"
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            sidebarExpanded
                                                ? handleClick()
                                                : setSidebarExpanded(true);
                                        }}
                                    >
                                        <svg
                                            className="ml-1.5 inline-block mr-1.5 mb-0.5 text-gray-800 dark:text-gray-200 text-black"
                                            display={"default"}
                                            width="20"
                                            height="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="user"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
                                            ></path>
                                        </svg>
                                        TUTORES
                                        <svg
                                            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                                open && "rotate-180"
                                            }`}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                                fill=""
                                            />
                                        </svg>
                                    </Link>
                                    {/* <!-- Dropdown Menu Start --> */}
                                    <div
                                        className={`translate transform overflow-hidden ${
                                            !open && "hidden"
                                        }`}
                                    >
                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-4">
                                            <li>
                                                {sidebarItem(
                                                    "Consultar Tutores",
                                                    base_rute +
                                                        "actionsStudent/consultParents"
                                                )}
                                                {sidebarItem(
                                                    "Registrar Datos Tutor",
                                                    base_rute +
                                                        "actionsStudent/registrerDataFirstTutor"
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Dropdown Menu End --> */}
                                </React.Fragment>
                            );
                        }}
                    </SidebarLinkGroup>
                </ul>
            </div>
            {/* <!-- Menu Group --> */}
            <div>
                <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Menu Item Dashboard --> */}

                    <SidebarLinkGroup
                        activeCondition={
                            pathname === "/" || pathname.includes("dashboard")
                        }
                    >
                        {(handleClick, open) => {
                            return (
                                <React.Fragment>
                                    <Link
                                        href="#"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                            (pathname === "/" ||
                                                pathname.includes(
                                                    "dashboard"
                                                )) &&
                                            "bg-graydark dark:bg-meta-4"
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            sidebarExpanded
                                                ? handleClick()
                                                : setSidebarExpanded(true);
                                        }}
                                    >
                                        <svg
                                            className="ml-1.5 inline-block mr-1.5 mb-0.5 text-gray-800 dark:text-gray-200 text-black"
                                            display={"default"}
                                            width="20"
                                            height="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 1"
                                            viewBox="0 0 24 24"
                                            id="setting"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9-1.28 2.22-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24-1.3-2.21.8-.9a3 3 0 0 0 0-4l-.8-.9 1.28-2.2 1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24 1.28 2.22-.8.9a3 3 0 0 0 0 3.98Zm-6.77-6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"
                                            ></path>
                                        </svg>
                                        CICLO ESC...
                                        <svg
                                            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                                open && "rotate-180"
                                            }`}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                                fill=""
                                            />
                                        </svg>
                                    </Link>
                                    {/* <!-- Dropdown Menu Start --> */}
                                    <div
                                        className={`translate transform overflow-hidden ${
                                            !open && "hidden"
                                        }`}
                                    >
                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-4">
                                            <li>
                                                {sidebarItem(
                                                    "Ciclo Escolar",
                                                    base_rute +
                                                        "cicloEscolar/cycle"
                                                )}
                                                {sidebarItem(
                                                    "Carga de Archivos",
                                                    base_rute +
                                                        "cicloEscolar/dataUpload"
                                                )}
                                                {sidebarItem(
                                                    "Materias",
                                                    base_rute + "/subjects"
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Dropdown Menu End --> */}
                                </React.Fragment>
                            );
                        }}
                    </SidebarLinkGroup>
                </ul>
            </div>
            {/* <!-- Menu Group --> */}
            <div>
                <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Menu Item Dashboard --> */}

                    <SidebarLinkGroup
                        activeCondition={
                            pathname === "/" || pathname.includes("dashboard")
                        }
                    >
                        {(handleClick, open) => {
                            return (
                                <React.Fragment>
                                    <Link
                                        href="#"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                            (pathname === "/" ||
                                                pathname.includes(
                                                    "dashboard"
                                                )) &&
                                            "bg-graydark dark:bg-meta-4"
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            sidebarExpanded
                                                ? handleClick()
                                                : setSidebarExpanded(true);
                                        }}
                                    >
                                        <svg
                                            className="ml-1.5 inline-block mr-1.5 mb-0.5 text-gray-800 dark:text-gray-200 text-black"
                                            display={"default"}
                                            width="20"
                                            height="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            data-name="Layer 1"
                                            viewBox="0 0 24 24"
                                            id="setting"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9-1.28 2.22-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24-1.3-2.21.8-.9a3 3 0 0 0 0-4l-.8-.9 1.28-2.2 1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24 1.28 2.22-.8.9a3 3 0 0 0 0 3.98Zm-6.77-6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"
                                            ></path>
                                        </svg>
                                        DIRECCIÓN
                                        <svg
                                            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                                open && "rotate-180"
                                            }`}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                                fill=""
                                            />
                                        </svg>
                                    </Link>
                                    {/* <!-- Dropdown Menu Start --> */}
                                    <div
                                        className={`translate transform overflow-hidden ${
                                            !open && "hidden"
                                        }`}
                                    >
                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-4">
                                            <li>
                                                {sidebarItem(
                                                    "Mensajes o Avisos",
                                                    base_rute + "/messages"
                                                )}
                                                {sidebarItem(
                                                    "Reportes o Sugerencias",
                                                    base_rute + "/reports"
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Dropdown Menu End --> */}
                                </React.Fragment>
                            );
                        }}
                    </SidebarLinkGroup>
                </ul>
            </div>
        </>
    );
};

export default SidebarContDirectivo;
