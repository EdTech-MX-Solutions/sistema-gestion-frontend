import { ReactNode} from "react";

import PrincipalTitle from "@/components/directive/Principal.Title";
import FormDirective from "@/components/directive/FormDirective";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDirective(){

  const initialDirective = {
    idDirective: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    telefono: "",
  };

    return(
        <>
          <PrincipalTitle title = {"Registrar Directivo"}></PrincipalTitle>
          <FormDirective directive = {initialDirective}></FormDirective>
        </>
    );
}

export default registrerDirective;