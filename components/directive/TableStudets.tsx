import React from "react";
import ButtonComponentBiColor from "../ButtonComponentBiColor";
import InterfaceAlumno from "@/data/interfaces/alumno";
import router from "next/router";
import TableContainer from "./Tables/TableContainter";

interface TableStudetsProps {
  students: InterfaceAlumno[];
}

export const TableStudets = ({ students }: TableStudetsProps) => {

  const handleConsultarAlumno = (idAlumno: any) => {
    router.push(`/directive/actionsStudent/personal?id=${idAlumno}`);
  }

  return (
    <>
    <TableContainer title={"Listado de Tutores"}>
    <thead className="text-white uppercase bg-green-700 text-left">
            <tr>
              <th className="p-3 text-center"> Boleta </th>
              <th colSpan={2}>  Nombres(s) Apellido Paterno y Materno</th>
              <th> Grado y Grupo </th>
              <th> Acciones </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => ( 
              <tr key = {student.no_boleta} className="text-left">
                <td className="p-5 text-center"> {student.no_boleta} </td>
                <td colSpan={2}> {`${student.nombre}  ${student.apellido_paterno}  ${student.apellido_materno}`} </td>
                <td> {`${student.grado} ${student.grupo}`} </td>
                <td>
                  <ButtonComponentBiColor
                    title={"Ver Detalles"}
                    color1={"blue"}
                    color2={"green"}
                    onClick={() => handleConsultarAlumno(student.no_boleta)}
                  ></ButtonComponentBiColor>
                </td>
              </tr>
            ))}
          </tbody>
    </TableContainer>
    </>
  );
};

export default TableStudets;
