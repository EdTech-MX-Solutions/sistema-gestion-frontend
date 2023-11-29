import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import FormProfessor from "@/components/directive/FormProfessor";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyProfessor() {

  const title = "Modificar datos profesor: [nombre_profesor]";

  const professor = {
    "idProfessor" : "1",
    "nombre" : "AbrahamP" ,
    "apellidoPaterno" : "RomeroP",
    "apellidoMaterno" : "AngelesP",
    "email" : "professorCorreo@gmail.com",
    "telefono" : "5511223344"
  }

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>
      <FormProfessor professor = {professor}></FormProfessor>
      
    </>
  );
}

export default modifyProfessor;

