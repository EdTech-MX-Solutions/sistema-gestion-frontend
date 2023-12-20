import InterfaceGrupo from "@/data/interfaces/grupos";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../elements/Buttons/ButtonComponent";
import TableStudentsGroup from "./TableStudentsGroup";
import router from "next/router";
import InterfaceAlumno from "@/data/interfaces/alumno";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import DeleteButton from "../elements/Buttons/DeleteButton";
import ModifyButton from "../elements/Buttons/ModifyButton";
import Link from "next/link";

interface CardConsultGroupProps {
    group: InterfaceGrupo;
}

export const CardConsultGroup = ({ group }: CardConsultGroupProps) => {
    const handleModifyGroup = (gropoId: any) => {
        router.push(`/directive/actionsGroup/modifyGroup?id=${gropoId}`);
    };

    const [cookies, setCookie] = useCookies(["token", "idGrupo", "childs"]);
    const [alumnos, setAlumnos] = useState<InterfaceAlumno[]>([]);

    const fetchAlumnosInscritos = async () => {
        const api = new SIGEAPICollection();
        const token = cookies.token;
        const idGrupoSeleccionado = router.query.id + "";
        if (idGrupoSeleccionado === undefined) {
            return;
        } else {
            try {
                const response =
                    await api.sharedCollection.executeGetAlumnosGrupo(
                        token,
                        idGrupoSeleccionado
                    );
                if (response.ok) {
                    const data = await response.json();

                    let newAlumnos: InterfaceAlumno[] = [];
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        const sexo =
                            element.sexo === "M" ? "Masculino" : "Femenino";
                        const newAlumno: InterfaceAlumno = {
                            noBoleta: element.noBoleta,
                            curp: element.curp,
                            nombres: element.nombres,
                            apellidoPaterno: element.apellidoPaterno,
                            apellidoMaterno: element.apellidoMaterno,
                            fechaNacimiento: element.fechaNacimiento,
                            sexo: sexo,
                            estatus: element.estatus,
                            entidad: element.entidad,
                            paisOrigen: element.paisOrigen,
                            edad: element.edad,
                            aniosPreescolar: element.aniosPreescolar,
                            grado: element.grado,
                            grupo: element.grupo,
                            actualizarDatosMedicos:
                                element.actualizarDatosMedicos,
                        };
                        newAlumnos.push(newAlumno);
                    }
                    setAlumnos(newAlumnos);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchAlumnosInscritos();
    }, []);

    console.log(alumnos);

    return (
        <>
            <div className="rounded-lg bg-white">
                <div className="p-5 grid grid-cols-3 row-span-2 grid-rows-3 gap-4 items-center bg-white rounded-lg">
                    <div>
                        <label
                            htmlFor=""
                            className="text-xl block mb-2 text-sm font-medium text-gray-900"
                        >
                            Grado:
                        </label>
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            {group.grado}
                        </label>
                    </div>

                    <div>
                        <label
                            htmlFor=""
                            className="text-xl block mb-2 text-sm font-medium text-gray-900"
                        >
                            Grupo:
                        </label>
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            {group.subGrado}
                        </label>
                    </div>

                    <div>
                        <label
                            htmlFor=""
                            className="text-xl block mb-2 text-sm font-medium text-gray-900"
                        >
                            Turno:
                        </label>
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            {group.turno}
                        </label>
                    </div>

                    <div>
                        <label
                            htmlFor=""
                            className="text-xl block mb-2 text-sm font-medium text-gray-900"
                        >
                            Profesor Responsable:
                        </label>
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            {group.responsable}
                        </label>
                    </div>

                    <div>
                        <label
                            htmlFor=""
                            className="text-xl block mb-2 text-sm font-medium text-gray-900"
                        >
                            Cupos Disponibles:
                        </label>
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            {group.cupos}
                        </label>
                    </div>

                    <div>
                        <label
                            htmlFor=""
                            className="text-xl block mb-2 text-sm font-medium text-gray-900"
                        >
                            Salón:
                        </label>
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            {group.salon}
                        </label>
                    </div>

                    <div>
                        <label
                            htmlFor=""
                            className="text-xl block mb-2 text-sm font-medium text-gray-900"
                        >
                            Cantidad de alumnos inscritos:
                        </label>
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            {group.inscritos}
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 row-span-1 gap-4 items-center text-center">
                    <ModifyButton title="Modificar Grupo" onClick={() => handleModifyGroup(group.idGrupo)} />
                    <Link href={`/directive/actionsGroup/scheduleGroup?id=${group.idGrupo}`}>
                    <ButtonComponent title={"Asignar Horario"} color={"green"}>
                        <div className="flex gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                data-slot="icon"
                                className="w-4 h-4 my-auto"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                />
                            </svg>
                            Consultar Horario
                        </div>
                    </ButtonComponent>
                    </Link>
                    <DeleteButton onClick={() => {}} />
                    <div className="bg-red-700" />
                    <div className="bg-red-800" />
                </div>

                <TableStudentsGroup
                    titleBtn1={"Ver Datos del Alumno"}
                    titleBtn2={"Ver Datos Del Alumno"}
                    titleTable={"Listado de Alumnos inscritos"}
                    alumnosInscritos={alumnos}
                    evento={() => {}}
                ></TableStudentsGroup>
            </div>
        </>
    );
};

export default CardConsultGroup;
