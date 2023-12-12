import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormStudent from "@/components/directive/FormStudent";
import InterfaceAlumno from "@/data/interfaces/alumno";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyDataPersonalStudent() {
  const student : InterfaceAlumno = {
    no_boleta: "cargando...",
    curp: "cargando...",
    nombre: "cargando...",
    apellido_paterno: "",
    apellido_materno: "",
    fecha_nacimiento: "cargando...",
    sexo: "cargando...",
    estatus: "cargando...",
    entidad_nacimiento: "cargando...",
    pais_origen: "cargando...",
    edad: 0,
    aniosPreescolar: 0,
    grado: null,
    grupo: null,
    actualizarDatosMedicos: null,
  }
  return (
    <>
      <PrincipalTitle title={"Registro Alumno"}></PrincipalTitle>
      <FormStudent isNewUser student = {student}></FormStudent>
    </>
  );
}

export default modifyDataPersonalStudent;
