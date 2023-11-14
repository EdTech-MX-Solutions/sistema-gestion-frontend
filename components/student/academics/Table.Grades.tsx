import React from "react";

interface TableGradesprops {}

const TableGrades = ({}: TableGradesprops) => {
  return (
    <>
      <div className="justify-center bg-white p-5 rounded-lg">
        <table className="table-fixed w-full text-sm text-center font-semibold">
          <thead className="text-white uppercase bg-green-700">
            <tr className="">
              <th className="p-3">Materia</th>
              <th>1er Trimestre</th>
              <th>2do Trimestre</th>
              <th>3er Trimestre</th>
              <th>Final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5"> Español </td>
              <td> 10 </td>
              <td> 10 </td>
              <td> 10 </td>
              <td> 10 </td>
            </tr>

            <tr>
              <td className="p-5">Matemáticas</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>

            <tr>
              <td className="p-5">
                Exploración de la Naturaleza y la Sociedad
              </td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>

            <tr>
              <td className="p-5">Formación Cívica y Ètica</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>

            <tr>
              <td className="p-5">Educación Artística</td>
              <td>8</td>
              <td>10</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableGrades;
