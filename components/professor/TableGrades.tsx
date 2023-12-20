import React from "react";
import ButtonComponent from "../elements/Buttons/ButtonComponent";
import InterfaceAlumno from "@/data/interfaces/alumno";

interface TableGradesProps {
  alumnos: InterfaceAlumno[];
}

const TableGrades = ({alumnos}: TableGradesProps) => {

  return (
    <>
      <div className="justify-center bg-white p-5 rounded-lg">
        <table className="table-fixed w-full text-sm text-center font-semibold">
          <thead className="text-white uppercase bg-green-700">
            <tr className="">
              <th className="p-3"> No. Lista </th>
              <th colSpan={2}> Apellido Paterno Apellido Materno Nombres(s) </th>
            </tr>
          </thead>
          <tbody>
          {alumnos.map((alumno, index) => (
              <tr key={index}>
                <td className="p-5"> {index + 1} </td>
                <td colSpan={2}> {`${alumno.nombres} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno}`} </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableGrades;
