import { ReactNode, useState } from "react";
import FormTutor from "@/components/directive/FormTutor";
import PrincipalTitle from "@/components/directive/Principal.Title";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDataFirstTutor() {

    const InitialTutor = {
        "nombre" : "",
        "apellidoPaterno" : "",
        "apellidoMaterno" : "",
        "email" : "",
        "CURP" : "",
        "leerYEscribir" : true,
        "gradoMaximoDeEstudios" : "",
        "ocupacion" : "",
        "fechaNacimiento" : "",
        "edad" : 0,
        "sexo" : "",
        "paisOrigen" : "",
        "estadoOrigen" : "",
        "estadoCivil" : "",
        "redesSociales" : [],
        "tipoIdentificacion" : "",
        "noIdentificacion" : "",
        "esPrincipal" : true,
        "parentesto" : "",
        "numeros" : []
    }

  return (
    <>
      <PrincipalTitle title={"Registro de Tutor"}></PrincipalTitle>
      <FormTutor tutor={InitialTutor}></FormTutor>
    </>
  );
}

export default registrerDataFirstTutor;
