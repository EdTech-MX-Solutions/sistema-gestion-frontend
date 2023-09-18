import React, { useEffect, useRef, useState } from "react";

import Logo from "../public/logo.png";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const router = useRouter();

  // const location = useLocation();
  const pathname = router.pathname;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  //   const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  //   const [sidebarExpanded, setSidebarExpanded] = useState(
  //     storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  //   );

  // close on click outside
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

  //   useEffect(() => {
  //     localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
  //     if (sidebarExpanded) {
  //       document.querySelector('body')?.classList.add('sidebar-expanded');
  //     } else {
  //       document.querySelector('body')?.classList.remove('sidebar-expanded');
  //     }
  //   }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark  bg-white lg:static lg:translate-x-0 ${
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

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear h-screen">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 lg:mt-9 lg:pl-2 lg:pr-4 h-screen">
          <div>
            <Image src={Logo} alt="Logo" width={200} />
          </div>
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-2 font-bold text-sm text-bodydark2">
              <label>
                <svg
                  className="ml-1.5 inline-block mr-1.5 mb-0.5 text-bodydark2 text-black"
                  display={"default"}
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="user"
                >
                  <path
                    fill="#000000"
                    d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
                  ></path>
                </svg>
                ALUMNO
              </label>
            </h3>

            <ul className="mb-6 ml-4 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return <React.Fragment></React.Fragment>;
                }}
              </SidebarLinkGroup>
              <li>
                <Link href={"/student/data/personal"}>
                  <div
                    //   to="/calendar"
                    className={`group relative flex items-center gap-2.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${"bg-graydark dark:bg-meta-4"}`}
                  >
                    Datos Personales
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/student/data/medic"}>
                  <div
                    //   to="/calendar"
                    className={`group relative flex items-center gap-2.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${"bg-graydark dark:bg-meta-4"}`}
                  >
                    Datos Medicos
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/student/data/parent"}>
                  <div
                    //   to="/calendar"
                    className={`group relative flex items-center gap-2.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${"bg-graydark dark:bg-meta-4"}`}
                  >
                    Datos Tutor
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-2 font-bold text-sm text-bodydark2">
              <svg
                className="ml-1.5 inline-block mr-1.5 mb-0.5 text-bodydark2 text-black"
                display={"default"}
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="graduation-cap"
              >
                <path
                  fill="#000000"
                  d="M21.49,10.19l-1-.55h0l-9-5-.11,0a1.06,1.06,0,0,0-.19-.06l-.19,0-.18,0a1.17,1.17,0,0,0-.2.06l-.11,0-9,5a1,1,0,0,0,0,1.74L4,12.76V17.5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V12.76l2-1.12V14.5a1,1,0,0,0,2,0V11.06A1,1,0,0,0,21.49,10.19ZM16,17.5a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13.87l4.51,2.5.15.06.09,0a1,1,0,0,0,.25,0h0a1,1,0,0,0,.25,0l.09,0a.47.47,0,0,0,.15-.06L16,13.87Zm-5-3.14L4.06,10.5,11,6.64l6.94,3.86Z"
                ></path>
              </svg>
              DATOS ACADEMICOS
            </h3>

            <ul className="mb-6 ml-4  flex flex-col gap-1.5">
              <li>
                <Link href={"/academics/schedule"}>
                  <div
                    //   to="/calendar"
                    className={`group relative flex items-center gap-2.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${"bg-graydark dark:bg-meta-4"}`}
                  >
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
                        fill=""
                      />
                    </svg>
                    Horario Escolar
                  </div>
                </Link>
              </li>
              {/* <!-- Menu Item Chart --> */}
              <li
                className={`group relative flex items-center gap-2.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${"bg-graydark dark:bg-meta-4"}`}
              >
                <Link href={"/academics/notes"}>Calificaciones</Link>
                {/* </NavLink> */}
              </li>
              <li
                className={`group relative flex items-center gap-2.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${"bg-graydark dark:bg-meta-4"}`}
              >
                <Link href={"/academics/history"}>Historial Academico</Link>
                {/* </NavLink> */}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 ml-2 font-bold text-sm text-bodydark2">
              <svg
                className="ml-1.5 inline-block mr-1.5 mb-0.5 text-bodydark2 text-black"
                display={"default"}
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="setting"
              >
                <path
                  fill="#000000"
                  d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9-1.28 2.22-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24-1.3-2.21.8-.9a3 3 0 0 0 0-4l-.8-.9 1.28-2.2 1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24 1.28 2.22-.8.9a3 3 0 0 0 0 3.98Zm-6.77-6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"
                ></path>
              </svg>
              OTRAS OPCIONES
            </h3>

            <ul className="mb-6 ml-4  flex flex-col gap-1.5">
              <li
                className={`group relative flex items-center gap-2.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${"bg-graydark dark:bg-meta-4"}`}
              >
                Mensajes o Avisos
                {/* </NavLink> */}
              </li>
              <li
                className={`group relative flex items-center gap-2.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${"bg-graydark dark:bg-meta-4"}`}
              >
                Reportes o Sugerencias
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}

        {/* <!-- Sidebar Footer --> */}
        <div className="lg:pl-2 lg:pr-4">
          <ul className="self-end">
            <li
              className={`group relative pb-3 flex items-center gap-2.5 rounded-sm py-1 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${"bg-graydark dark:bg-meta-4"}`}
            >
              <svg
                className="ml-1.5 inline-block mr-1.5 mb-0.5 text-bodydark2 text-black"
                display={"default"}
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="signout"
              >
                <path
                  fill="#000000"
                  d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"
                ></path>
              </svg>
              Cerrar Sesión
            </li>
            <li
              className={`group m-1 text-center relative items-center rounded-sm py-1 text-xs text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${"bg-graydark dark:bg-meta-4"}`}
            >
              <p>EdTech-MX SIGE V B0.1</p>
            </li>
          </ul>
        </div>
        {/* <!-- Sidebar Footer --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
