import InterfaceGrupo from "@/data/interfaces/grupos";
import React from "react";
import router from "next/router";
import ButtonComponentBiColor from "../ButtonComponentBiColor";

interface TableGroupsProps {
  groups : InterfaceGrupo[];
}

export const TableGroups = ({groups}: TableGroupsProps) => {
  
  const handleConsultGroup = (groupId : any) =>{
    router.push(`/directive/actionsGroup/consultGroup?id=${groupId}`);
  }
  
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
                  <ButtonComponentBiColor 
                    title={"Consultar"}
                    color1={"blue"}
                    color2={"green"}
                    onClick={() => handleConsultGroup(group.idGrupo)}
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

export default TableGroups;
