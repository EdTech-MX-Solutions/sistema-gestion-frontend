import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormTutor from "@/components/directive/FormTutor";
import InterfaceParent from "@/data/interfaces/parent";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyDataSecondTutor() {

  const tutor : InterfaceParent = {
    id: 1,
    curp: "curp",
    leerYescribir: "leerYescribir",
    gradoMaximoDeEstudios: "",
    ocupacion: "ocupacion",
    nombres: "nombres",
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
  }

  return (
    <>
      <PrincipalTitle title={"Modificar Datos de Tutor"}></PrincipalTitle>
      <FormTutor tutor = {tutor} isNewUsuario={false}></FormTutor>
    </>
  );
}

export default modifyDataSecondTutor;
