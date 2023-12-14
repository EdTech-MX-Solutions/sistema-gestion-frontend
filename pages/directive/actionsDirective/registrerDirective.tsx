import { ReactNode} from "react";

import PrincipalTitle from "@/components/directive/Principal.Title";
import CardView from "@/components/CardView";
import FormProfessor from "@/components/directive/FormProfessor";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDirective(){

  const initialDirective = {
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

    return(
        <>
        <CardView title = {""} description = {""}>
          <PrincipalTitle title = {"Registrar Directivo"}></PrincipalTitle>
          <FormProfessor professor = {initialDirective} isNewUser = {true}></FormProfessor>
        </CardView>
        </>
    );
}

export default registrerDirective;