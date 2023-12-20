import { ReactNode } from "react";
import PrincipalTitle from "@/components/professor/Principal.Title";
import SubTitle from "@/components/SubTitle";
import { TextFieldCard } from "@/components/TextFieldCard";


interface DefaultLayoutProps {
  children: ReactNode;
}

function studentReport() {

  const title = "Reporte";

  return (
    <>
      <PrincipalTitle title = {title}></PrincipalTitle>
      <div className="justify-center bg-white p-5 rounded-lg">
        <SubTitle title = {"En este espacio puedes escribir cualquier conducta que crea importante reportar a direccion y tutores del alumno"} subtitle = {"Nombre del alumno: "}></SubTitle>
        <TextFieldCard comentario = "Mensaje directo a la directora"></TextFieldCard>
      </div>
    </>
  );
}

export default studentReport;

