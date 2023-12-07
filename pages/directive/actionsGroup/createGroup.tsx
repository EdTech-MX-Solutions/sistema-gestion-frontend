import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormGroup from "@/components/directive/FormGroup";
import TableStudentsGroup from "@/components/directive/TableStudentsGroup";

interface DefaultLayoutProps {
  children: ReactNode;
}

function createGroup() {
  const title = "Crear Grupo";

  const Initialgroup = {
    idGrupo: 0,
    grado: "",
    subGrado: "",
    turno: "",
    responsable: "",
    idResponsable: 0,
    cupos: 0,
    salon: "",
    inscritos: 0,
    cicloEscolar: "",
  };

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>
      <div className="justify-center bg-white p-5 rounded-lg">
        <h4 className="font-bold">Elementos del grupo: </h4>
        <FormGroup grupo={Initialgroup}></FormGroup>
        <TableStudentsGroup
          titleBtn1={"Ver Datos del Alumno"}
          titleBtn2={"Dar de Baja del Grupo"}
          titleTable={"Listado de Alumnos inscritos en el grupo"}
        ></TableStudentsGroup>
        <TableStudentsGroup
          titleBtn1={"Ver Datos del Alumno"}
          titleBtn2={"Inscribir al Grupo"}
          titleTable={
            "Listado de Alumnos disponibles para el grupo seleccionado"
          }
        ></TableStudentsGroup>
      </div>
    </>
  );
}

export default createGroup;
