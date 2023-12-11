import { ReactNode } from "react";
import CardView from "@/components/CardView";
import { FormTelefonos } from "@/components/directive/FormTelefonos";
import PrincipalTitle from "@/components/directive/Principal.Title";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyTelefonos() {
  return (
    <>
      <CardView title={"title"} customtitle={true} description={""}>
        <PrincipalTitle title={"Registro celulares"}></PrincipalTitle>
        <FormTelefonos telefonos = {[]}></FormTelefonos>
      </CardView>
    </>
  );
}

export default modifyTelefonos;
