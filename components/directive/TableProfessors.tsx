import React from "react";
import ButtonComponentBiColor from "../elements/Buttons/ButtonComponentBiColor";
import InterfaceProfessor from "@/data/interfaces/professor";
import router from "next/router";
import TableContainer from "./Tables/TableContainter";
import TableCopyButton from "./Tables/TableButton";
import { Tooltip } from "@material-tailwind/react";
import TableEmailButton from "./Tables/TableEmail";

interface TableProfessorsProps {
    professors: InterfaceProfessor[];
}

export const TableProfessors = ({ professors }: TableProfessorsProps) => {
    const handleConsultProfessor = (professorId: any) => {
        router.push(
            `/directive/actionsProfessor/consultProfessor?id=${professorId}`
        );
    };

    return (
        <>
            <TableContainer title={"Listado de Profesores"}>
                <thead className="text-white uppercase bg-green-700">
                    <tr className="">
                        <th className="p-3">No. Empleado</th>
                        <th colSpan={2} className="text-left">
                            Nombres(s) Apellido Paterno y Materno
                        </th>
                        <th
                            colSpan={2}
                            className="hidden lg:table-cell text-left"
                        >
                            {" "}
                            Email{" "}
                        </th>
                        <th> Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    {professors.map((professor) => (
                        <tr key={professor.idProfesor}>
                            <td className="p-5"> {professor.idProfesor} </td>
                            <td colSpan={2} className="text-left">
                                {" "}
                                {`${professor.nombre}  ${professor.apellidoPaterno}  ${professor.apellidoMaterno}`}
                            </td>
                            <td
                                colSpan={2}
                                className="group text-ellipsis hidden lg:table-cell text-left"
                            >
                                {professor.email}
                                {professor.email !== null && professor.email !== "" ? (
                                    <span className="opacity-0 group-hover:opacity-100">
                                        <TableCopyButton
                                            text={professor.email}
                                        />
                                        <TableEmailButton
                                            text={professor.email}
                                        />
                                    </span>
                                ) : null}
                            </td>
                            <td>
                                <ButtonComponentBiColor
                                    title={"Consultar"}
                                    color1={"blue"}
                                    color2={"green"}
                                    onClick={() =>
                                        handleConsultProfessor(
                                            professor.idProfesor
                                        )
                                    }
                                ></ButtonComponentBiColor>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </TableContainer>
        </>
    );
};

export default TableProfessors;
