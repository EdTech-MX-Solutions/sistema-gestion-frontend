import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import InputSearch from "@/components/InputSearch";
import TableStudets from "@/components/directive/TableStudets";

interface DefaultLayoutProps {
  children: ReactNode;
}

function consultStudents() {
  const students = [
    {
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
    },
  ];

  return (
    <>
      <PrincipalTitle title={"Consultar Alumnos"}></PrincipalTitle>
        <InputSearch
          comment={
            "Recuerda que puedes buscar a un alumno por nombre, apellidos o boleta"
          }
        ></InputSearch>
        <TableStudets students={students}></TableStudets>
    </>
  );
}

export default consultStudents;
