import React from "react";
import ButtonComponentBiColor from "../ButtonComponentBiColor";
import InterfaceAlumno from "@/interfaces/alumno";

interface TableStudetsProps {
  students: InterfaceAlumno[];
}

export const TableStudets = ({ students }: TableStudetsProps) => {
  return (
    <>
      
      <div className="justify-center bg-white p-5 rounded-lg">
      <h4 className="font-bold text-gray-900 p-5"> Listado de alumnos </h4>
        <table className="table-fixed w-full text-sm text-center font-semibold">
          <thead className="text-white uppercase bg-green-700">
            <tr>
              <th className="p-3"> Boleta </th>
              <th colSpan={2}>  Nombres(s) Apellido Paterno Apellido Materno</th>
              <th> Grado y Grupo </th>
              <th> Acciones </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key = {student.no_boleta}>
                <td className="p-5"> {student.no_boleta} </td>
                <td colSpan={2}> {`${student.nombre}  ${student.apellido_paterno}  ${student.apellido_materno}`} </td>
                <td> {`${student.grado} ${student.grupo}`} </td>
                <td>
                  <ButtonComponentBiColor
                    title={"Ver Detalles"}
                    color1={"blue"}
                    color2={"green"}
                  ></ButtonComponentBiColor>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableStudets;
