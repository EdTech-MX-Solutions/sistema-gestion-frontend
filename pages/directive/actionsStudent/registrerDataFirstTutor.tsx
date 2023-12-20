import { ReactNode, useState } from "react";
import FormTutor from "@/components/directive/FormTutor";
import PrincipalTitle from "@/components/directive/Principal.Title";
import InterfaceParent from "@/data/interfaces/parent";
import CardView from "@/components/CardView";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDataFirstTutor() {
  const tutor: InterfaceParent = {
    id: 1,
    curp: "",
    leerYescribir: "",
    gradoMaximoDeEstudios: "",
    ocupacion: "",
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    correo: "",
    fechaNacimiento: "",
    sexo: "",
    paisOrigen: "",
    estadoCivil: "",
    redesSociales: [],
    tipoIdentificacion: "",
    noIdentificacion: "",
    esPrincipal: "",
    parentesco: "",
    estadoOrigen: "",
    numeros: [],
  };

  return (
    <>
      <CardView title={""} description={""} customtitle>
        <PrincipalTitle title={"Registro de Tutor Principal"}></PrincipalTitle>
        <FormTutor tutor={tutor} isNewUsuario></FormTutor>
      </CardView>
    </>
  );
}

export default registrerDataFirstTutor;
