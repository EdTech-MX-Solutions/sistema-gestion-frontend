import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import FormGroup from "@/components/directive/FormGroup";
import TableStudentsGroup from "@/components/directive/TableStudentsGroup";
import ButtonComponent from "@/components/ButtonComponent";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyGroup() {
  const title = "Detalles grupo: [grado+grupo]";

  const grupo = [
    {
      idGrupo: Number,
      grado: String,
      subGrado: String,
      turno: String,
      responsable: String,
      idResponsable: Number,
      cupos: Number,
      salon: String,
      inscritos: Number,
      cicloEscolar: String,
    },
  ];

  const group = {
    idGrupo: 1,
    grado: "1",
    subGrado: "A",
    turno: "Matutino",
    responsable: "Profesor1",
    idResponsable: 1,
    cupos: 30,
    salon: "S-1",
    inscritos: 25,
    cicloEscolar: "2023A",
  };

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>

      <div className="grid grid-rows-12 gap-6 bg-white rounded-lg">
        <FormGroup group={group}></FormGroup>
        <TableStudentsGroup
          titleBtn1={"Ver Datos del Alumno"}
          titleBtn2={"Dar de Baja del Grupo"}
          titleTable={"Listado de Alumnos inscritos en el grupo"}
        ></TableStudentsGroup>
        <TableStudentsGroup
          titleBtn1={"Ver Datos del Alumno"}
          titleBtn2={"Inscribir al Grupo"}
          titleTable={"Listado de Alumnos disponibles para el grupo seleccionado"}
        ></TableStudentsGroup>
        <div className="grid grid-cols-2 row-span-2 gap-4 items-center text-center rounded-lg">
          <ButtonComponent 
            title={"Guardar"} 
            color={"blue"}
          ></ButtonComponent>
          <ButtonComponent
            title={"Dar de baja Grupo"}
            color={"red"}
          ></ButtonComponent>
        </div>
      </div>
    </>
  );
}

export default modifyGroup;
