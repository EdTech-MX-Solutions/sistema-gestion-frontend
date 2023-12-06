import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormProfessor from "@/components/directive/FormProfessor";
interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerProfessor() {
  const InitialProfessor = {
    idProfessor: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    cedulaProfesional : "",
    email: "",
    telefono: "",
  };

  return (
    <>
      <PrincipalTitle title={"Registrar Profesor"}></PrincipalTitle>
      <FormProfessor professor={InitialProfessor}></FormProfessor>
    </>
  );
}

export default registrerProfessor;
