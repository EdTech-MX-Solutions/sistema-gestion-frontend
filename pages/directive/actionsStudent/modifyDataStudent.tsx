import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormStudent from "@/components/directive/FormStudent";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyDataPersonalStudent() {
  const student = {
    no_boleta: "2019630523",
    curp: "RUHR920101HDFRBR00",
    nombre: "Ricardo",
    apellido_paterno: "Urbina",
    apellido_materno: "Hernández",
    aniosPreescolar: 3,
    edad: 12,
    fecha_nacimiento: "01/01/2002",
    sexo: "Hombre",
    estatus: "Activo",
    entidad_nacimiento: "Ciudad de México",
    pais_origen: "México",
    grado: "1",
    grupo: "A",
  };

  return (
    <>
      <PrincipalTitle title={"Registro Alumno"}></PrincipalTitle>
      <FormStudent student = {student}></FormStudent>
    </>
  );
}

export default modifyDataPersonalStudent;
