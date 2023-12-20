import InterfaceProfessor from "@/data/interfaces/professor";
import React from "react";
import ButtonComponentBiColor from "../ButtonComponentBiColor";
import router from "next/router";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import { useProfesores } from "../context/ProfesorProvider";

interface TableDirectivesProps {
  directives: InterfaceProfessor[];
}

export const TableDirectives = ({ directives }: TableDirectivesProps) => {
  const handleConsultDirective = (directiveId: any) => {
    router.push(
      `/directive/actionsDirective/consultDirective?id=${directiveId}`
    );
  };
  const { updateProfesor } = useProfesores();
  const [cookies, setCookie] = useCookies(["token", "idProfesor", "childs"]);
  const handleDegradarADirectivo = async (id: string) => {
    const api = new SIGEAPICollection();
    const accion = "false"
    const token = cookies.token;
    const response = await api.directivosCollection.executePatchAscenderProfesorADirectivo(
        token,
        accion,
        id
    );
    if(response.status === 200){
        const response2 = await api.directivosCollection.executeGetProfessors(
            token
        )

        if(response2.ok){
          const data = await response2.json();
          console.log("Profesor ascendido con exito!");
          updateProfesor(data);
        }
    }
  } 
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
                <th colSpan={2}> Acciones </th>
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
                  <td>
                <ButtonComponentBiColor
                  title={"Convertir a Profesor"}
                  color1={"red"}
                  color2={"pink"}
                  onClick={() => {
                    handleDegradarADirectivo(directive.idProfesor)
                  }}
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
