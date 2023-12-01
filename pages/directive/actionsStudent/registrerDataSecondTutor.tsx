import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormTutor from "@/components/directive/FormTutor";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDataSecondTutor() {

  const InitialTutor = {
    "nombre" : "",
    "apellidoPaterno" : "",
    "apellidoMaterno" : "",
    "email" : "alguien@.com",
    "CURP" : "",
    "leerYEscribir" : true,
    "gradoMaximoDeEstudios" : "",
    "ocupacion" : "",
    "fechaNacimiento" : "01/12/2000",
    "edad" : 0,
    "sexo" : "",
    "paisOrigen" : "",
    "estadoOrigen" : "",
    "estadoCivil" : "",
    "redesSociales" : [""],
    "tipoIdentificacion" : "",
    "noIdentificacion" : "",
    "esPrincipal" : true,
    "parentesto" : "",
    "numeros" : []
  }

  return (
    <>
      <PrincipalTitle title={"Registro Tutor"}></PrincipalTitle>
      <FormTutor tutor={InitialTutor}></FormTutor>
    </>
  );
}

export default registrerDataSecondTutor;