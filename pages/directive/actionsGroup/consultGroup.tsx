import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode, useEffect, useState } from "react";
import CardConsultGroup from "@/components/directive/CardConsultGroup";
import TableStudentsGroup from "@/components/directive/TableStudentsGroup";
import ButtonComponent from "@/components/ButtonComponent";
import CardView from "@/components/CardView";
import { useRouter } from "next/router";
import { useGrupos } from "@/components/context/GruposProvides";
import InterfaceGrupo from "@/data/interfaces/grupos";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ConsultGroup() {
  const router = useRouter();
  const { id } = router.query;
  const { grupos } = useGrupos();
  const [groupDetails, setGroupDetails] = useState<InterfaceGrupo>({
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
        setGroupDetails(foundGroup);
      } else {
        console.error(`No se encontro un grupo con la ID: ${id}`);
      }
    }
  }, [id, grupos]);

  const title = "Detalles grupo: [grado+grupo]";

  return (
    <>
      <CardView title={"title"} customtitle={true} description={""}>
        <PrincipalTitle title={title}></PrincipalTitle>
        <CardConsultGroup 
          group={groupDetails}
        ></CardConsultGroup>
      </CardView>
    </>
  );
}

export default ConsultGroup;
