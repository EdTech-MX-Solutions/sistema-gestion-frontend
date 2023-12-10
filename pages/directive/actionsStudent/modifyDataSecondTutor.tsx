import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormTutor from "@/components/directive/FormTutor";
import InterfaceParent from "@/data/interfaces/parent";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyDataSecondTutor() {

  const tutor : InterfaceParent = {
    id_tutor: "1",
    curp: "curp",
    leerYescribir: "leerYescribir",
    gradoMaximoDeEstudios: "gradoMaximoDeEstudios",
    ocupacion: "ocupacion",
    nombres: "nombres",
    apellido_paterno: "apellido_paterno",
    apellido_materno: "apellido_materno",
    correo: "correo",
    fecha_nacimiento: "fecha_nacimiento",
    sexo: "sexo",
    pais_origen: "pais_origen",
    estado_civil: "estado_civil",
    red_social: "red_social",
    tipo_identificacion: "tipo_identificacion",
    no_identificacion: "no_identificacion",
    tutor_principal: "tutor_principal",
    parentesco: "parentesco",
    entidad_nacimiento: "entidad_nacimiento",
    numeros: [{id_tutor: "1", numero: "numero"}]
  }

  return (
    <>
      <PrincipalTitle title={"Modificar Datos de Tutor"}></PrincipalTitle>
      <FormTutor tutor = {tutor}></FormTutor>
    </>
  );
}

export default modifyDataSecondTutor;
