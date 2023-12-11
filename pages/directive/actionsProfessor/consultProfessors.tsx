import { ReactNode } from "react";
import TableProfessors from "@/components/directive/TableProfessors";
import InputSearch from "@/components/template/InputSearch";
import PrincipalTitle from "@/components/directive/Principal.Title";
import CardView from "@/components/CardView";
import { useProfesores } from "@/components/context/ProfesorProvider";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ConsultProfessor() {
  
  const {profesores} = useProfesores()
  console.log(profesores);

  const filtredProfesores = profesores.filter((profesor) => (profesor.diretivo === false));
  console.log(filtredProfesores);

  return (
    <>
    <CardView title = {"title"} customtitle = {true} description = {""}>
    <PrincipalTitle title={"Consultar Profesores"}></PrincipalTitle>
      <InputSearch
        searchDataAutomcomplete={[
          ...filtredProfesores.map((profesor) =>({
            key : profesor.idProfesor,
            value : profesor.idProfesor,
          })),
          ...filtredProfesores.map((profesor) =>({
            key : profesor.idProfesor,
            value : `${profesor.nombre} ${profesor.apellidoPaterno} ${profesor.apellidoMaterno}`
          }))
        ]}
        comment={
          "Recuerda que puedes buscar a un profesor por nombre, apellidos o No. de empleado."
        }
      ></InputSearch>
      <TableProfessors professors = {filtredProfesores}></TableProfessors>
    </CardView>
    </>
  );
}

export default ConsultProfessor;
