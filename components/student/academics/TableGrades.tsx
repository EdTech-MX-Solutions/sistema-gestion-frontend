import React from "react";

interface TableGradesprops {
  calificaciones : Array<{
    Grado: string;
    SubGrado: string;
    materia: string;
    claveMateria: string;
    primerTrimestre: string;
    segundoTrimestre: string;
    tercerTrimestre: string;
    calificacionFinal: string;
  }>
}

const TableGrades = ({ calificaciones }: TableGradesprops) => {
  return (
    <>
      <div className="flex mx-auto justify-center bg-white p-5 rounded-lg">
        <table className="table-fixed w-full text-sm text-center font-semibold">
          <thead className="text-white uppercase bg-green-700">
            <tr className="">
              <th className="p-3"> Materia</th>
              <th> 1er Trimestre </th>
              <th> 2do Trimestre </th>
              <th> 3er Trimestre </th>
              <th> Final </th>
            </tr>
          </thead>
          <tbody>
            {calificaciones.map((calificacion) => (
              <tr key={calificacion.claveMateria}>
                <td className="p-5"> {calificacion.materia} </td>
                <td> {calificacion.primerTrimestre} </td>
                <td> {calificacion.segundoTrimestre} </td>
                <td> {calificacion.tercerTrimestre} </td>
                <td> {calificacion.calificacionFinal} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableGrades;
