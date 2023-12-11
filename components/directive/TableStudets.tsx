import React from "react";
import ButtonComponentBiColor from "../ButtonComponentBiColor";
import InterfaceAlumno from "@/data/interfaces/alumno";
import router from "next/router";

interface TableStudetsProps {
  students: InterfaceAlumno[];
}

export const TableStudets = ({ students }: TableStudetsProps) => {

  const handleConsultarAlumno = (idAlumno: any) => {
    router.push(`/directive/actionsStudent/consultDataPersonalStudent?id=${idAlumno}`);
  }

  return (
    <>
      <div className="justify-center dark:bg-slate-500 bg-white p-5 rounded-lg">
      <h4 className="font-bold text-gray-900 dark:text-gray-200 p-5"> Listado de alumnos </h4>
        <table className="table-fixed w-full text-sm dark:text-gray-200 text-center font-semibold">
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
                    onClick={() => handleConsultarAlumno(student.no_boleta)}
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
