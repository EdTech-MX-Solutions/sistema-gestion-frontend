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
    curp: "curp",
    leerYescribir: "leerYescribir",
    gradoMaximoDeEstudios: "gradoMaximoDeEstudios",
    ocupacion: "ocupacion",
    nombres: "nombres",
    apellidoPaterno: "apellido_paterno",
    apellidoMaterno: "apellido_materno",
    correo: "correo",
    fechaNacimiento: "fecha_nacimiento",
    sexo: "sexo",
    paisOrigen: "pais_origen",
    estadoCivil: "estado_civil",
    redesSociales: [],
    tipoIdentificacion: "tipo_identificacion",
    noIdentificacion: "no_identificacion",
    esPrincipal: "tutor_principal",
    parentesco: "parentesco",
    estadoOrigen: "entidad_nacimiento",
    numeros: [],
  };

  return (
    <>
      <CardView title={""} description={""}>
        <PrincipalTitle title={"Registro de Tutor Principal"}></PrincipalTitle>
        <FormTutor tutor={tutor}></FormTutor>
      </CardView>
    </>
  );
}

export default registrerDataFirstTutor;
