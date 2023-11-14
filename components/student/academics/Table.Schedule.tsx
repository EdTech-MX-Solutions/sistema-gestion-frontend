import React from "react";

interface TableScheduleprops {}

const TableSchedule = ({}: TableScheduleprops) => {
  return (
    <>
      <div className="mx-auto justify-center p-5 bg-white rounded-lg">
        <div className="p-3">
          <h5 className="font-semibold">Grupo: 1A </h5>
        </div>

        <table className="table-fixed w-full text-sm text-center font-semibold ">
          <thead className="text-white uppercase bg-green-700">
            <tr>
              <th className="p-3">Materia</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5"> Español </td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
            </tr>

            <tr>
              <td className="p-5">Matemáticas</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
            </tr>

            <tr>
              <td className="p-5">
                Exploración de la Naturaleza y la Sociedad
              </td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
            </tr>

            <tr>
              <td className="p-5">Formación Cívica y Ètica</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
            </tr>

            <tr>
              <td className="p-5">Educación Artística</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
              <td>7:00am - 8:00am</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableSchedule;
