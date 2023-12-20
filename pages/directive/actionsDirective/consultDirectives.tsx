import { ReactNode } from "react";
import InputSearch from "@/components/template/InputSearch";
import TableDirectives from "@/components/directive/TableDirectives";
import CardView from "@/components/CardView";
import PrincipalTitle from "@/components/directive/Principal.Title";
import { useProfesores } from "@/components/context/ProfesorProvider";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ConsultDirective() {

  const {profesores} = useProfesores()
  const filtredDirectivos = profesores.filter((profesor) => (profesor.diretivo === true));
  console.log(filtredDirectivos);
  
  return (
    <>
      <CardView title = {"title"} customtitle = {true} description = {""}>
        <PrincipalTitle title = {"Consultar directivos"}></PrincipalTitle>
        <InputSearch
          route="/directive/actionsProfessor/consultProfessor?id="
          searchDataAutomcomplete={[
            ...filtredDirectivos.map((professor) => ({
              key: professor.idProfesor,
              value: professor.idProfesor,
            })),
            ...filtredDirectivos.map((professor) => ({
              key: professor.idProfesor,
              value: `${professor.nombre} ${professor.apellidoPaterno} ${professor.apellidoMaterno}`,
            })),
          ]}
          comment={"Recuerda que puedes bucar por numero de empleado y nombre"}
        ></InputSearch>
        <TableDirectives directives={filtredDirectivos}></TableDirectives>
        </CardView>
    </>
  );
}

export default ConsultDirective;
