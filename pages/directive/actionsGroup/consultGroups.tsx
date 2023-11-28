import { ReactNode } from "react";
import InputSearch from "@/components/InputSearch";
import TableGroups from "@/components/directive/TableGroups";
import PrincipalTitle from "@/components/directive/Principal.Title";

interface DefaultLayoutProps {
  children: ReactNode;
}

function consultGroup() {
  return (
    <>
     <PrincipalTitle
      title = {"Consultar Grupos"}
     ></PrincipalTitle>

      <div className="bg-white">
        <InputSearch
          comment = {"Recuerda que puedes buscar a un directivo por nombre, apellidos o No. de empleado."}
        ></InputSearch>
        <TableGroups></TableGroups>
      </div>
    </>
  );
}

export default consultGroup;
