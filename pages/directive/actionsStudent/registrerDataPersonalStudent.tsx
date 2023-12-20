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
    noBoleta: "cargando...",
    curp: "",
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "",
    sexo: "",
    estatus: "",
    entidad: "",
    paisOrigen: "",
    edad: null,
    aniosPreescolar: 0,
    grado: null,
    grupo: null,
    actualizarDatosMedicos: null,
  };

  return (
    <>
      <CardView title = {""} description = {""} customtitle>
        <PrincipalTitle title={"Registro Alumno"}></PrincipalTitle>
        <FormStudent student={student} isNewUser = {true}></FormStudent>
      </CardView>
    </>
  );
}

export default registrerDataPersonalStudent;
