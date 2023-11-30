import { ReactNode } from "react";
import TableProfessors from "@/components/directive/TableProfessors";
import InputSearch from "@/components/InputSearch";
import PrincipalTitle from "@/components/directive/Principal.Title";

interface DefaultLayoutProps {
  children: ReactNode;
}

function consultProfessor() {

  const professors = [
    {
      "idProfessor" : "1",
        "nombre" : "AbrahamP" ,
        "apellidoPaterno" : "RomeroP",
        "apellidoMaterno" : "AngelesP",
        "email" : "professorCorreo@gmail.com",
        "telefono" : "5511223344"
    },
  ]

  return (
    <>
      <PrincipalTitle title={"Consultar Profesores"}></PrincipalTitle>
      <InputSearch
        comment={
          "Recuerda que puedes buscar a un profesor por nombre, apellidos o No. de empleado."
        }
      ></InputSearch>
      <TableProfessors professors = {professors}></TableProfessors>
    </>
  );
}

export default consultProfessor;
