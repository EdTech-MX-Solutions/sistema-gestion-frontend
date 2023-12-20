import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormStudent from "@/components/directive/FormStudent";
import InterfaceAlumno from "@/data/interfaces/alumno";
import CardView from "@/components/CardView";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyDataPersonalStudent() {
  const student: InterfaceAlumno = {
    noBoleta: "cargando...",
    curp: "cargando...",
    nombres: "cargando...",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "cargando...",
    sexo: "cargando...",
    estatus: "cargando...",
    entidad: "cargando...",
    paisOrigen: "cargando...",
    edad: 0,
    aniosPreescolar: 0,
    grado: null,
    grupo: null,
    actualizarDatosMedicos: null,
  };
  return (
    <>
      <CardView title={""} description={""} customtitle>
        <PrincipalTitle title={"Registro Alumno"}></PrincipalTitle>
        <FormStudent isNewUser student={student}></FormStudent>
      </CardView>
    </>
  );
}

export default modifyDataPersonalStudent;
