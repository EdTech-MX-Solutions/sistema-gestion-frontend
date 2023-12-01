import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormStudent from "@/components/directive/FormStudent";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDataPersonalStudent() {
  const InitialStudent = {
    no_boleta: "",
    curp: "",
    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    aniosPreescolar: 0,
    edad: 0,
    fecha_nacimiento: "",
    sexo: "",
    estatus: "Activo",
    entidad_nacimiento: "",
    pais_origen: "",
    grado: "",
    grupo: "",
  };
  return (
    <>
      <PrincipalTitle title={"Registro Alumno"}></PrincipalTitle>
      <FormStudent student = {InitialStudent}></FormStudent>
    </>
  );
}

export default registrerDataPersonalStudent;
