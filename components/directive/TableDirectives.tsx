import InterfaceProfessor from "@/data/interfaces/professor";
import React from "react";
import ButtonComponentBiColor from "../elements/Buttons/ButtonComponentBiColor";
import router from "next/router";
import TableContainer from "./Tables/TableContainter";
import TableCopyButton from "./Tables/TableButton";
import TableEmailButton from "./Tables/TableEmail";

interface TableDirectivesProps {
    directives: InterfaceProfessor[];
}

export const TableDirectives = ({ directives }: TableDirectivesProps) => {
    const handleConsultDirective = (directiveId: any) => {
        router.push(
            `/directive/actionsDirective/consultDirective?id=${directiveId}`
        );
    };

    return (
        <>
            <TableContainer title={"Listado de Tutores"}>
                <thead className="text-white uppercase bg-green-700 text-left">
                    <tr className="">
                        <th className="p-3 text-center">No. Empleado</th>
                        <th >
                            Nombre Completo
                        </th>
                        <th> Email </th>
                        <th> Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    {directives.map((directive) => (
                        <tr key={directive.idProfesor}>
                            <td className="p-5 text-center">
                                {" "}
                                {directive.idProfesor}{" "}
                            </td>
                            <td  className="text-left">
                                {`${directive.nombre}  ${directive.apellidoPaterno}  ${directive.apellidoMaterno}`}{" "}
                            </td>
                            <td
                                className="group hidden lg:table-cell text-left"
                            >
                                {" "}
                                {`${directive.email}`}
                                {directive.email !== null &&
                                directive.email !== "" ? (
                                    <span className="opacity-0 group-hover:opacity-100">
                                        <TableCopyButton
                                            text={directive.email}
                                        />
                                        <TableEmailButton
                                            text={directive.email}
                                        />
                                    </span>
                                ) : (
                                    "No tiene correo"
                                )}
                            </td>
                            <td className="text-left">
                                <ButtonComponentBiColor
                                    title={"Consultar"}
                                    color1={"blue"}
                                    color2={"green"}
                                    onClick={() =>
                                        handleConsultDirective(
                                            directive.idProfesor
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

export default TableDirectives;
