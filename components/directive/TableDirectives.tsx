import InterfaceProfessor from "@/interfaces/professor";
import React from "react";
import ButtonComponentBiColor from "../ButtonComponentBiColor";
import router from "next/router";

interface TableDirectivesProps {
  directives: InterfaceProfessor[];
}

export const TableDirectives = ({ directives }: TableDirectivesProps) => {
  const handleConsultDirective = (directiveId: any) => {
    router.push(
      `/directive/actionsDirective/consultDirective?id=${directiveId}`
    );
  };

  return (
    <>
      <div className="p-5 bg-white rounded-lg">
        <h4 className="font-bold text-gray-900">Listado de directivos</h4>
        <div className="justify-center p-5 ">
          <table className="table-fixed w-full text-sm text-center font-semibold">
            <thead className="text-white uppercase bg-green-700">
              <tr className="">
                <th className="p-3">No. Empleado</th>
                <th colSpan={2}>
                  Apellido Paterno Apellido Materno Nombres (s)
                </th>
                <th> Email </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {directives.map((directive) => (
                <tr key={directive.idProfesor}>
                  <td className="p-5"> {directive.idProfesor} </td>
                  <td colSpan={2}>
                    {`${directive.nombre}  ${directive.apellidoPaterno}  ${directive.apellidoMaterno}`}{" "}
                  </td>
                  <td> {directive.email} </td>
                  <td>
                    <ButtonComponentBiColor
                      title={"Consultar"}
                      color1={"blue"}
                      color2={"green"}
                      onClick={() =>
                        handleConsultDirective(directive.idProfesor)
                      }
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

export default TableDirectives;
