import CardView from "@/components/CardView";
import { ReactNode, useEffect } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import { TableAscenderADirectivo } from "@/components/directive/TableAscenderADirectivo";
import { useProfesores } from "@/components/context/ProfesorProvider";
interface DefaultLayoutProps {
  children: ReactNode;
}

const title = "Ascender a directivo";

function AscenderADirectivo() {
  const { profesores } = useProfesores();
  const filtredProfesores = profesores.filter(
    (profesor) => profesor.diretivo === false
  );

  return (
    <>
      <CardView title={"title"} description={""} customtitle>
        <PrincipalTitle title={title}></PrincipalTitle>
        <TableAscenderADirectivo
          professors={filtredProfesores}
        ></TableAscenderADirectivo>
      </CardView>
    </>
  );
}

export default AscenderADirectivo;
