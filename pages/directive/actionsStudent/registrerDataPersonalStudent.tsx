import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormStudent from "@/components/directive/FormStudent";
import InterfaceAlumno from "@/data/interfaces/alumno";
import CardView from "@/components/CardView";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDataPersonalStudent() {
  const student: InterfaceAlumno = {
    no_boleta: "cargando...",
    curp: "",
    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    fecha_nacimiento: "",
    sexo: "",
    estatus: "",
    entidad_nacimiento: "",
    pais_origen: "",
    edad: null,
    aniosPreescolar: null,
    grado: null,
    grupo: null,
    actualizarDatosMedicos: null,
  };

  return (
    <>
      <CardView>
        <PrincipalTitle title={"Registro Alumno"}></PrincipalTitle>
        <FormStudent student={student} isNewUser = {true}></FormStudent>
      </CardView>
    </>
  );
}

export default registrerDataPersonalStudent;
