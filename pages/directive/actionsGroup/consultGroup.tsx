import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import CardConsultGroup from "@/components/directive/CardConsultGroup";
import TableStudentsGroup from "@/components/directive/TableStudentsGroup";
import ButtonComponent from "@/components/ButtonComponent";

interface DefaultLayoutProps {
  children: ReactNode;
}

function consultGroup() {
  const title = "Detalles grupo: [grado+grupo]";

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>

      <div className="grid grid-rows-12 gap-6 bg-white rounded-lg">
        <CardConsultGroup></CardConsultGroup>
        <TableStudentsGroup titleBtn1 = {"Ver Datos del Alumno"} titleBtn2 = {""} titleTable = {"Listado de Alumnos disponibles para el grupo seleccionado"}></TableStudentsGroup>

        <div className = "grid grid-cols-2 row-span-1 gap-4 items-center text-center">
          <ButtonComponent
            title = {"Modificar Grupo"}
            color = {"blue"}
          ></ButtonComponent>
          <ButtonComponent 
            title = {"Eliminar"} 
            color = {"red"}
          ></ButtonComponent>
        </div>
      </div>
    </>
  );
}

export default consultGroup;
