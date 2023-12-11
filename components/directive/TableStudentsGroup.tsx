import React from "react";
import ButtonComponentBiColor from "../ButtonComponentBiColor";
import InterfaceAlumno from "@/data/interfaces/alumno";

interface TableStudentsGroupProps {
    titleBtn1 : string
    titleBtn2 : string
    titleTable : string
    alumnosInscritos : InterfaceAlumno[];
}

export const TableStudentsGroup = ({titleBtn1, titleBtn2, titleTable, alumnosInscritos}: TableStudentsGroupProps) => {
  return (
    <>
      <div className="justify-center row-span-4 px-5">
        <h4 className="font-bold pb-5">
          {titleTable}
        </h4>
        {alumnosInscritos.length === 0 ? (
          <div className="text-center text-gray-500 pb-5">
            No hay alumnos inscritos en este grupo
          </div>
        ) : (
          <table className="table-fixed w-full text-sm text-center font-semibold">
          <thead className="text-white uppercase bg-green-700">
            <tr className="">
              <th className="p-3" > Boleta </th>
              <th> Apellido Paterno Apellido Materno Nombres(s) </th>
              <th colSpan={2}> Acciones </th>
            </tr>
          </thead>
          <tbody>
            {alumnosInscritos.map((alumno) => (
              <tr key={alumno.no_boleta}>
                <td className="p-5"> {alumno.no_boleta} </td>
                <td> {`${alumno.apellido_paterno}  ${alumno.apellido_materno} ${alumno.nombre}`} </td>
                <td>
                  <ButtonComponentBiColor title = {titleBtn1} color1 = {"blue"} color2 = {"green"}></ButtonComponentBiColor>
                </td>
                <td>
                  <ButtonComponentBiColor title = {titleBtn2} color1 = {"red"} color2 = {"pink"}></ButtonComponentBiColor>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </div>
    </>
  );
};

export default TableStudentsGroup;
