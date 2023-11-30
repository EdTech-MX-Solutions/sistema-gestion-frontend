import { ReactNode, useState } from "react";
import PrincipalTitle from "@/components/professor/Principal.Title";
import TableGrades from "@/components/professor/TableGrades";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyGrades() {

  const title = "Modificacion de calificaciones [Periodo_actual]";

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>
      
      <TableGrades></TableGrades>
    </>
  );
}

export default modifyGrades;

