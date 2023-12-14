import React from "react";
import ButtonComponentBiColor from "../ButtonComponentBiColor";
import InterfaceAlumno from "@/data/interfaces/alumno";
import router from "next/router";
import InterfaceParent from "@/data/interfaces/parent";
import TableContainer from "./Tables/TableContainter";
import TableCopyButton from "./Tables/TableButton";
import TableEmailButton from "./Tables/TableEmail";

interface TableParentsProps {
    parents: InterfaceParent[];
}

export const TableParents = ({ parents }: TableParentsProps) => {
    const handleConsultar = (id: any) => {
        router.push(`/directive/actionsStudent/personal?id=${id}`);
    };

    return (
        <>
            <TableContainer title={"Listado de Tutores"}>
                <thead className="text-white uppercase bg-green-700 text-left">
                    <tr>
                        <th className="lg:hidden text-center p-3"> Id </th>
                        <th className="hidden lg:block p-3"> Identificador </th>
                        <th colSpan={2} className="text-left	">
                            {" "}
                            Nombre Completo
                        </th>
                        <th className="hidden lg:table-cell" colSpan={2}>
                            {" "}
                            Correo{" "}
                        </th>
                        <th className="hidden lg:table-cell" colSpan={2}>
                            {" "}
                            CURP{" "}
                        </th>
                        <th> Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    {parents.map((student) => (
                        <tr key={student.id_tutor} className="text-left">
                            <td className="p-5 text-center">
                                {" "}
                                {student.id_tutor}{" "}
                            </td>
                            <td colSpan={2} className="text-left	">
                                {" "}
                                {`${student.nombres}  ${student.apellido_paterno}  ${student.apellido_materno}`}{" "}
                            </td>
                            <td className="group hidden lg:table-cell" colSpan={2}>
                                {" "}
                                {`${student.correo}`}
                                {student.correo !== null && student.correo !== "" ? (
                                    <span className="opacity-0 group-hover:opacity-100">
                                        <TableCopyButton
                                            text={student.correo}
                                        />
                                        <TableEmailButton
                                            text={student.correo}
                                        />
                                    </span>
                                ) : "No tiene correo"}
                            </td>
                            <td className="hidden lg:table-cell" colSpan={2}>
                                {" "}
                                {`${student.curp}`}{" "}
                            </td>
                            <td>
                                <ButtonComponentBiColor
                                    title={"Ver Detalles"}
                                    color1={"blue"}
                                    color2={"green"}
                                    onClick={() =>
                                        handleConsultar(student.id_tutor)
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

export default TableParents;
