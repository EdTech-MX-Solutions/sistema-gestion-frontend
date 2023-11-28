import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import FormCicloEscolar from "@/components/directive/FormCicloEscolar";

interface DefaultLayoutProps {
  children: ReactNode;
}

function createCicloEscolar() {
  const title = "Crear Ciclo Escolar";

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>
      <FormCicloEscolar></FormCicloEscolar>
    </>
  );
}

export default createCicloEscolar;
