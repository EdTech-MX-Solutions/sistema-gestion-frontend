import { ReactNode} from "react";

import PrincipalTitle from "@/components/directive/Principal.Title";
import FormDirective from "@/components/directive/FormDirective";

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
          <PrincipalTitle title = {"Registrar Directivo"}></PrincipalTitle>
          <FormDirective directive = {initialDirective} isNewUser = {true}></FormDirective>
        </>
    );
}

export default registrerDirective;