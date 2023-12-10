import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode, use, useEffect, useState } from "react";
import FormGroup from "@/components/directive/FormGroup";
import TableStudentsGroup from "@/components/directive/TableStudentsGroup";
import ButtonComponent from "@/components/ButtonComponent";
import { useRouter } from "next/router";
import { useGrupos } from "@/components/context/GruposProvides";
import InterfaceGrupo from "@/data/interfaces/grupos";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ModifyGroup() {

  const router = useRouter();
  const { id } = router.query;
  const {grupos} = useGrupos();
  const [gruposDetails, setGruposDetails] = useState<InterfaceGrupo>({
    idGrupo: "cargando...",
    grado: "cargando...",
    subGrado: "cargando...",
    turno: "cargando...",
    responsable: "cargando...",
    idResponsable: 0,
    cupos: 0,
    salon: "cargando...",
    inscritos: 0,
    cicloEscolar: "cargando...",
  });

  useEffect(() => {
    if (id && grupos && grupos.length > 0) {
      const foundGroup = grupos.find((grupo) => grupo.idGrupo == id);
      if (foundGroup) {
        setGruposDetails(foundGroup);
      } else {
        console.error(`No se encontro un grupo con la ID: ${id}`);
      }
    }
  }, [id, grupos])


  const title = `Detalles grupo: ${gruposDetails.grado} ${gruposDetails.subGrado}`;

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>
      <div className="grid grid-rows-12 gap-6 bg-white rounded-lg">
        <FormGroup grupo = {gruposDetails} isNewGroup = {false}></FormGroup>
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

export default ModifyGroup;
