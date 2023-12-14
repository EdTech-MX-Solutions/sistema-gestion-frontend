import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormDirecciones from "@/components/directive/FormDirecciones";
import CardView from "@/components/CardView";
import InterfaceDireccion from "@/data/interfaces/direccion";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyDireccion() {
  const initialDireccion : InterfaceDireccion = {
    id: null,
    calle: "",
    numeroExterior: "",
    numeroInterior: "",
    entreCalle1: "",
    entreCalle2: "",
    referenciaExtra: "",
    colonia: null,
    estado : null,
  };
  return (
    <>
      <CardView title={""} description={""}>
        <PrincipalTitle title={"Modificar dirección"}></PrincipalTitle>
        <FormDirecciones direccion={initialDireccion} isNewUser = {false}></FormDirecciones>
      </CardView>
    </>
  );
}

export default modifyDireccion;
