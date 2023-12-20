import InterfaceGrupo from "@/data/interfaces/grupos";
import React from "react";
import router from "next/router";
import ButtonComponentBiColor from "../ButtonComponentBiColor";
import TableContainer from "./Tables/TableContainter";

interface TableGroupsProps {
    groups: InterfaceGrupo[];
}

export const TableGroups = ({ groups }: TableGroupsProps) => {
    const handleConsultGroup = (groupId: any) => {
        router.push(`/directive/actionsGroup/consultGroup?id=${groupId}`);
    };

    return (
        <>
            <TableContainer title={"Listado de Grupos"}>
                <thead className="text-white uppercase bg-green-700">
                    <tr>
                        <th className="p-3"> Grado </th>
                        <th> Grupo </th>
                        <th> Profesor titular </th>
                        <th> Salón </th>
                        <th> Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    {groups.map((group) => (
                        <tr key={group.idGrupo}>
                            <td className="p-3"> {group.grado} </td>
                            <td> {group.subGrado} </td>
                            <td> {group.responsable} </td>
                            <td> {group.salon || "No Asignado"} </td>
                            <td>
                                <ButtonComponentBiColor
                                    title={"Consultar"}
                                    color1={"blue"}
                                    color2={"green"}
                                    onClick={() =>
                                        handleConsultGroup(group.idGrupo)
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

export default TableGroups;
