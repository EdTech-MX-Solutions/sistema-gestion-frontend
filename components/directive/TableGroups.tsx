import InterfaceGrupo from "@/interfaces/grupos";
import React from "react";

interface TableGroupsProps {
  groups : InterfaceGrupo[];
}

export const TableGroups = ({groups}: TableGroupsProps) => {
  return (
    <>
      <div className="p-5">
        <h4 className="font-bold text-gray-900">Listado de Grupos</h4>
        <div className="justify-center bg-white p-5 rounded-lg">
          <table className="table-fixed w-full text-sm text-center font-semibold">
            <thead className="text-white uppercase bg-green-700">
              <tr>
                <th className="p-3"> Grado </th>
                <th> Grupo </th>
                <th> Profesor titular </th>
                <th> Salon </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) =>(
                <tr key={group.idGrupo}>
                <td className="p-3"> {group.grado} </td>
                <td> {group.subGrado} </td>
                <td> {group.responsable} </td>
                <td> {group.salon} </td>
                <td>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <span className="relative px-1 py-0.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                      Consultar
                    </span>
                  </button>
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

export default TableGroups;
