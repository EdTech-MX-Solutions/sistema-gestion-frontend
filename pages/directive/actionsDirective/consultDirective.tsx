import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import CardConsultDirective from "@/components/directive/CardConsultDirective";
import { useRouter } from "next/router";


interface DefaultLayoutProps {
  children: ReactNode;
}

function ConsultDirective() {
  const title = "Detalles directivo: [nombre_directivo]";

  const directive = {
    idProfesor : "string",
    nombre : "string",
    apellidoPaterno : "string",
    apellidoMaterno : "string",
    email : "string",
    activo : true,
    diretivo : true,
    noCedulaProfesional : 0,
    numero : []
  }

  const router = useRouter();
  const data = router.query;
  console.log(router.query.id)

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>
      <CardConsultDirective directive = {directive}></CardConsultDirective>
    </>
  );
}

export default ConsultDirective;
