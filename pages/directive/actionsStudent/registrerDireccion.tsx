import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormDirecciones from "@/components/directive/FormDirecciones";
import CardView from "@/components/CardView";
import InterfaceDireccion from "@/data/interfaces/direccion";

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


function registrerDireccion() {
  return (
    <>
      <CardView title={"title"} customtitle={true} description={""}>
        <PrincipalTitle title={"Registrar dirección"}></PrincipalTitle>
        <FormDirecciones direccion={initialDireccion} isNewUser = {true}></FormDirecciones>
      </CardView>
    </>
  );
}

export default registrerDireccion;
