import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode, use, useEffect, useState } from "react";
import FormProfessor from "@/components/directive/FormProfessor";
import { useRouter } from "next/router";
import { useProfesores } from "@/components/context/ProfesorProvider";
import InterfaceProfessor from "@/interfaces/professor";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ModifyProfessor() {

  const router = useRouter();
  const {id} =  router.query;
  const title = "Modificar datos profesor: [nombre_profesor]";
  const {profesores} = useProfesores();
  const [professorDetails, setProfessorDetails] = useState<InterfaceProfessor>({
    idProfesor : "cargando...",
    nombre : "cargando...",
    apellidoPaterno : "cargando...",
    apellidoMaterno : "cargando...",
    email : "cargando...",
    activo : false,
    diretivo : false,
    noCedulaProfesional : 0,
    numero : []
});
  
  useEffect(() => {
    if(id && profesores && profesores.length > 0){
      const foundProfesor = profesores.find((profesor) => (profesor.idProfesor == id));
      if(foundProfesor){
          setProfessorDetails(foundProfesor);
      }
      else{
          console.error(`No se encontro un profesor con la ID: ${id}`);
      }
  }
},[id, profesores])

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>
      <FormProfessor professor = {professorDetails}></FormProfessor>
    </>
  );
}

export default ModifyProfessor;

