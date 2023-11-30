import React from "react";
import ButtonComponentBiColor from "../ButtonComponentBiColor";

interface TableProfessorsProps {
  professors: Array<{
    idProfessor: string;
    nombre: String;
    apellidoPaterno: String;
    apellidoMaterno: String;
    email: String;
    telefono: String;
  }>;
}

export const TableProfessors = ({ professors }: TableProfessorsProps) => {
  return (
    <>
      <div className="p-5 bg-white rounded-lg">
        <h4 className="font-bold text-gray-900">Listado de profesores</h4>
        <div className="justify-center bg-white p-5">
          <table className="table-fixed w-full text-sm text-center font-semibold">
            <thead className="text-white uppercase bg-green-700">
              <tr className="">
                <th className="p-3">No. Empleado</th>
                <th colSpan={2}>
                  Apellido Paterno Apellido Materno Nombres (s)
                </th>
                <th> Grupo asignado </th>
                <th> Email </th>
                <th> Telefono </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {professors.map((professor) => (
                <tr key = {professor.idProfessor}>
                  <td className="p-5"> {professor.idProfessor} </td>
                  <td colSpan={2}> {`${professor.nombre}  ${professor.apellidoPaterno}  ${professor.apellidoMaterno}`}</td>
                  <td> *1A* </td>
                  <td> {professor.email} </td>
                  <td> {professor.telefono} </td>
                  <td>
                    <ButtonComponentBiColor
                      title={"Consultar"}
                      color1={"blue"}
                      color2={"green"}
                    ></ButtonComponentBiColor>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableProfessors;
