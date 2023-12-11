import React from "react";
import ButtonComponentBiColor from "../ButtonComponentBiColor";
import InterfaceProfessor from "@/data/interfaces/professor";
import router from "next/router";

interface TableProfessorsProps {
  professors : InterfaceProfessor[];
}

export const TableProfessors = ({ professors }: TableProfessorsProps) => {

  const handleConsultProfessor = (professorId: any) =>{
    router.push(`/directive/actionsProfessor/consultProfessor?id=${professorId}`)
  }

  return (
    <>
      <div className="p-5 bg-white rounded-lg">
        <h4 className="font-bold text-gray-900">Listado de profesores</h4>
        <div className="justify-center p-5">
          <table className="table-fixed w-full text-sm text-center font-semibold">
            <thead className="text-white uppercase bg-green-700">
              <tr className="">
                <th className="p-3">No. Empleado</th>
                <th colSpan={2}>
                  Nombres(s) Apellido Paterno Apellido Materno
                </th>
                <th> Email </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {professors.map((professor) => (
                <tr key = {professor.idProfesor}>
                  <td className="p-5"> {professor.idProfesor} </td>
                  <td colSpan={2}> {`${professor.nombre}  ${professor.apellidoPaterno}  ${professor.apellidoMaterno}`}</td>
                  <td> {professor.email} </td>
                  <td>
                    <ButtonComponentBiColor
                      title={"Consultar"}
                      color1={"blue"}
                      color2={"green"}
                      onClick={() => handleConsultProfessor(professor.idProfesor)}
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
