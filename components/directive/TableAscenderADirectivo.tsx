import InterfaceProfessor from "@/data/interfaces/professor";
import React, { useEffect, useState } from "react";
import TableContainer from "./Tables/TableContainter";
import TableCopyButton from "./Tables/TableButton";
import TableEmailButton from "./Tables/TableEmail";
import ButtonComponentBiColor from "../ButtonComponentBiColor";
import router from "next/router";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import { useProfesores } from "../context/ProfesorProvider";

interface TableAscenderADirectivoProps {
  professors: InterfaceProfessor[];
}

export const TableAscenderADirectivo = ({
  professors,
}: TableAscenderADirectivoProps) => {

    const [cookies, setCookie] = useCookies(["token", "idProfesor", "childs"]);

  const handleConsultProfessor = (professorId: any) => {
    router.push(
      `/directive/actionsProfessor/consultProfessor?id=${professorId}`
    );
  };

  const { updateProfesor } = useProfesores();

  const handleAscenderADirectivo = async (id: string) => {
    const api = new SIGEAPICollection();
    const accion = "true"
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
      <TableContainer title={"Listado de Tutores"}>
        <thead className="text-white uppercase bg-green-700">
          <tr className="">
            <th className="p-3">No. Empleado</th>
            <th colSpan={2} className="text-left">
              Nombres(s) Apellido Paterno y Materno
            </th>
            <th colSpan={2} className="hidden lg:table-cell text-left">
              Email
            </th>
            <th colSpan={2}> Acciones </th>
          </tr>
        </thead>
        <tbody>
          {professors.map((professor) => (
            <tr key={professor.idProfesor}>
              <td className="p-5"> {professor.idProfesor} </td>
              <td colSpan={2} className="text-left">
                {`${professor.nombre}  ${professor.apellidoPaterno}  ${professor.apellidoMaterno}`}
              </td>
              <td
                colSpan={2}
                className="group text-ellipsis hidden lg:table-cell text-left"
              >
                {professor.email}
                {professor.email !== null && professor.email !== "" ? (
                  <span className="opacity-0 group-hover:opacity-100">
                    <TableCopyButton text={professor.email} />
                    <TableEmailButton text={professor.email} />
                  </span>
                ) : null}
              </td>
              <td>
                <ButtonComponentBiColor
                  title={"Consultar"}
                  color1={"blue"}
                  color2={"green"}
                  onClick={() => handleConsultProfessor(professor.idProfesor)}
                ></ButtonComponentBiColor>
              </td>

              <td>
                <ButtonComponentBiColor
                  title={"Ascender a Directivo"}
                  color1={"blue"}
                  color2={"green"}
                  onClick={() => {
                    handleAscenderADirectivo(professor.idProfesor)
                  }}
                ></ButtonComponentBiColor>
              </td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
    </>
  );
};
