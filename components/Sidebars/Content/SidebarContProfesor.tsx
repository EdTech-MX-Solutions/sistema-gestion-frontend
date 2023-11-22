import React from "react";
import SidebarLinkGroup from "../../SidebarLinkGroup";
import { useRouter } from "next/router";
import { sidebarItem } from "./SidebarItem";

const SidebarContProfesor = () => {
    const router = useRouter();
    const pathname = router.pathname;


    return (
        <>
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
                    {sidebarItem("Datos Personales", "/student/data/personal")}
                    {sidebarItem("Datos Medicos", "/student/data/medic")}
                    {sidebarItem("Datos Tutor", "/student/data/parent")}
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
                    {sidebarItem("Horario Escolar", "/academics/schedule")}
                    {sidebarItem("Calificaciones", "/academics/notes")}
                    {sidebarItem("Historial Academico", "/academics/history")}
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
                    {sidebarItem("Mensajes o Avisos", "/messages")}
                    {sidebarItem("Reportes o Sugerencias", "/reports")}
                </ul>
            </div>
        </>
    );
};

export default SidebarContProfesor;
