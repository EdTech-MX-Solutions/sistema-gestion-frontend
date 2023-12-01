import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormTutor from "@/components/directive/FormTutor";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyDataFirstTutor(){
  const tutor = {
    "nombre" : "Abraham",
    "apellidoPaterno" : "Romero",
    "apellidoMaterno" : "Angeles",
    "email" : "alguien@gmail.com",
    "CURP" : "RUHR920101HDFRBR00",
    "leerYEscribir" : true,
    "gradoMaximoDeEstudios" : "C",
    "ocupacion" : "Trabajador",
    "fechaNacimiento" : "01/12/2000",
    "edad" : 20,
    "sexo" : "M",
    "paisOrigen" : "MX",
    "estadoOrigen" : "México",
    "estadoCivil" : "Casado",
    "redesSociales" : ["Facebook"],
    "tipoIdentificacion" : "INE",
    "noIdentificacion" : "16198481194",
    "esPrincipal" : true,
    "parentesto" : "1",
    "numeros" : [5511223344]
  }

  return (
    <>
      <PrincipalTitle title={"Modificar Datos de Tutor"}></PrincipalTitle>
      <FormTutor tutor = {tutor}></FormTutor>
    </>
  );
}

export default modifyDataFirstTutor;
