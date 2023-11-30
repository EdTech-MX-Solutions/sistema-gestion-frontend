import React from "react";

interface TableScheduleprops { }

interface TableScheduleprops {
  horario : Array<{
    claveMateria: string;
    nombreMateria: string;
    horaLunes: string;
    horaMartes: string;
    horaMiercoles: string;
    horaJueves: string;
    horaViernes: string;
  }>;
}

const TableSchedule = ({ horario }: TableScheduleprops) => {
  return (
    <>
      <div className="flex mx-auto justify-center p-5 bg-white rounded-lg">
        <table className="table-fixed w-full text-sm text-center font-semibold ">
          <thead className="text-white uppercase bg-green-700">
            <tr className="p5">
              <th className="p-5"> Materia </th>
              <th> Lunes </th>
              <th> Martes</th>
              <th> Miércoles </th>
              <th> Jueves </th>
              <th> Viernes </th>
            </tr>
          </thead>
          <tbody>
            {horario.map((materia) => (
              <tr key={materia.claveMateria}>
                <td className="p-5"> {materia.nombreMateria} </td>
                <td> {materia.horaLunes} </td>
                <td> {materia.horaMartes} </td>
                <td> {materia.horaMiercoles} </td>
                <td> {materia.horaJueves} </td>
                <td> {materia.horaViernes} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableSchedule;
