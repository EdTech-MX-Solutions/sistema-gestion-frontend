import { ReactNode, useEffect, useState } from "react";
import TableProfessors from "@/components/directive/TableProfessors";
import InputSearch from "@/components/template/InputSearch";
import PrincipalTitle from "@/components/directive/Principal.Title";
import CardView from "@/components/CardView";
import { useProfesores } from "@/components/context/ProfesorProvider";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ConsultProfessor() {

  const {profesores} = useProfesores()
  console.log(profesores);
  return (
    <>
    <CardView title = {"title"} customtitle = {true} description = {""}>
    <PrincipalTitle title={"Consultar Profesores"}></PrincipalTitle>
      <InputSearch
        searchDataAutomcomplete={[
          ...profesores.map((professor) =>({
            key : professor.idProfesor,
            value : professor.idProfesor,
          })),
          ...profesores.map((professor) =>({
            key : professor.idProfesor,
            value : `${professor.nombre} ${professor.apellidoPaterno} ${professor.apellidoMaterno}`
          }))
        ]}
        comment={
          "Recuerda que puedes buscar a un profesor por nombre, apellidos o No. de empleado."
        }
      ></InputSearch>
      <TableProfessors professors = {profesores}></TableProfessors>
    </CardView>
    </>
  );
}

export default ConsultProfessor;
