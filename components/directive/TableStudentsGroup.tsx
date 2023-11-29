import React from "react";
import ButtonComponentBiColor from "../ButtonComponentBiColor";

interface TableStudentsGroupProps {
    titleBtn1 : string
    titleBtn2 : string
    titleTable : string
}

export const TableStudentsGroup = ({titleBtn1, titleBtn2,titleTable}: TableStudentsGroupProps) => {
  return (
    <>
      <div className="justify-center row-span-4 px-5">
        <h4 className="font-bold pb-5">
          {titleTable}
        </h4>
        <table className="table-fixed w-full text-sm text-center font-semibold">
          <thead className="text-white uppercase bg-green-700">
            <tr className="">
              <th className="p-3"> Apellido Paterno </th>
              <th> Apellido Materno </th>
              <th> Nombres(s) </th>
              <th> Calificacion Grado Anterior </th>
              <th colSpan={2}> Acciones </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5"> Romero </td>
              <td> Angeles </td>
              <td> Abraham </td>
              <td> 10 </td>
              <td>
                <ButtonComponentBiColor title = {titleBtn1} color1 = {"blue"} color2 = {"green"}></ButtonComponentBiColor>
              </td>
              <td>
                <ButtonComponentBiColor title = {titleBtn2} color1 = {"red"} color2 = {"pink"}></ButtonComponentBiColor>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableStudentsGroup;
