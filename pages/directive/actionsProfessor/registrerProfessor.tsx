import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormProfessor from "@/components/directive/FormProfessor";
interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerProfessor() {
  const InitialProfessor = {
    idProfesor : "",
    nombre : "",
    apellidoPaterno : "",
    apellidoMaterno : "",
    email : "",
    activo : true,
    diretivo : true,
    noCedulaProfesional : "",
    numero : []
  };

  return (
    <>
      <PrincipalTitle title={"Registrar Profesor"}></PrincipalTitle>
      <FormProfessor professor={InitialProfessor} isNewUser = {true}></FormProfessor>
    </>
  );
}

export default registrerProfessor;
