import { ReactNode, useState } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormTutor from "@/components/directive/FormTutor";

interface DefaultLayoutProps {
  children: ReactNode;
}

function  registrerDataSecondTutor(){

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


    return(
        <>
           <PrincipalTitle title={"Registrar Segundo Tutor"}></PrincipalTitle>
           <FormTutor tutor = {InitialTutor}></FormTutor>
        </>
    );
}

export default registrerDataSecondTutor;