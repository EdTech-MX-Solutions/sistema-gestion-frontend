import { ReactNode, useEffect, useState } from "react";
import InputSearch from "@/components/template/InputSearch";
import TableDirectives from "@/components/directive/TableDirectives";
import InterfaceProfessor from "@/interfaces/professor";
import { useCookies } from "react-cookie";
import CardView from "@/components/CardView";
import PrincipalTitle from "@/components/directive/Principal.Title";
import { useNavigate } from "react-router-dom";
import SIGEAPICollection from "@/backend-calls/apiHandler";
import { useProfesores } from "@/components/context/ProfesorProvider";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ConsultDirective() {

  const {profesores} = useProfesores()
  console.log(profesores);

  return (
    <>
      <CardView title = {"title"} customtitle = {true} description = {""}>
        <PrincipalTitle title = {"Consultar directivos"}></PrincipalTitle>
        <InputSearch
          searchDataAutomcomplete={[
            ...profesores.map((professor) => ({
              key: professor.idProfesor,
              value: professor.idProfesor,
            })),
            ...profesores.map((professor) => ({
              key: professor.idProfesor,
              value: `${professor.nombre} ${professor.apellidoPaterno} ${professor.apellidoMaterno}`,
            })),
          ]}
          comment={"Recuerda que puedes bucar por numero de empleado y nombre"}
        ></InputSearch>
        <TableDirectives directives={profesores}></TableDirectives>
        </CardView>
    </>
  );
}

export default ConsultDirective;
