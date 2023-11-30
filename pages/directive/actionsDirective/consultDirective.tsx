import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import CardConsultDirective from "@/components/directive/CardConsultDirective";

interface DefaultLayoutProps {
  children: ReactNode;
}


function consultDirective() {

  const directive = {
    "idDirective" : "1",
    "nombre" : "AbrahamD" ,
    "apellidoPaterno" : "RomeroD",
    "apellidoMaterno" : "AngelesD",
    "email" : "directivoCorreo@gmail.com",
    "telefono" : "5511223344"
  }

  const title = "Detalles directivo: [nombre_directivo]";

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>
      <CardConsultDirective directive = {directive}></CardConsultDirective>
    </>
  );
}

export default consultDirective;
