import { ReactNode, useEffect, useState } from "react";
import InputSearch from "@/components/template/InputSearch";
import TableGroups from "@/components/directive/TableGroups";
import PrincipalTitle from "@/components/directive/Principal.Title";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import InterfaceGrupo from "@/data/interfaces/grupos";
import { useGrupos } from "@/components/context/GruposProvides";


interface DefaultLayoutProps {
  children: ReactNode;
}

function ConsultGroup() {

  const {grupos} = useGrupos();
  console.log(grupos);

  return (
    <>
     <PrincipalTitle
      title = {"Consultar Grupos"}
     ></PrincipalTitle>
      <div className="bg-white">
        <InputSearch
         searchDataAutomcomplete={[
          ...grupos.map((grupo) => ({
            key : grupo.idGrupo,
            value : grupo.idGrupo,
          })),
          ...grupos.map((grupo) => ({
            key : grupo.idGrupo,
            value : `${grupo.grado} ${grupo.subGrado}`
          }))
         ]}

          comment = {"Recuerda que puedes buscar a un grupo por grado y grupo"}
        ></InputSearch>
        <TableGroups groups = {grupos}></TableGroups>
      </div>
    </>
  );
}

export default ConsultGroup;
