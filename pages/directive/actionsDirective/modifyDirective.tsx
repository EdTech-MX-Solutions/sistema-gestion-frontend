import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import FormDirective from "@/components/directive/FormDirective";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyDirective() {
  const directive = {
    idDirective: "1",
    nombre: "AbrahamD",
    apellidoPaterno: "RomeroD",
    apellidoMaterno: "AngelesD",
    email: "directivoCorreo@gmail.com",
    telefono: "5511223344",
  };

  const title = "Detalles directivo: [nombre_directivo]";
  return (
    <>
      <PrincipalTitle title = {title}></PrincipalTitle>
      <FormDirective directive = {directive}></FormDirective>
    </>
  );
}

export default modifyDirective;
