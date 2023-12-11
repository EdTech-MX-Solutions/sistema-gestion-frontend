import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormDirecciones from "@/components/directive/FormDirecciones";
import CardView from "@/components/CardView";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDireccion() {
  return (
    <>
      <CardView title={"title"} customtitle={true} description={""}>
        <PrincipalTitle title={"Registrar dirección"}></PrincipalTitle>
        <FormDirecciones></FormDirecciones>
      </CardView>
    </>
  );
}

export default registrerDireccion;
