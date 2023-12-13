import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode, useEffect, useState } from "react";
import FormDirective from "@/components/directive/FormDirective";
import { useRouter } from "next/router";
import { useProfesores } from "@/components/context/ProfesorProvider";
import InterfaceProfessor from "@/data/interfaces/professor";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ModifyDirective() {
  const router = useRouter();
  const {id} = router.query;
  const {profesores} = useProfesores();
  const [professorDetails, setProfessorDetails] = useState<InterfaceProfessor>({
    idProfesor : "cargando...",
    nombre : "cargando...",
    apellidoPaterno : "cargando...",
    apellidoMaterno : "cargando...",
    email : "cargando...",
    activo : false,
    diretivo : false,
    noCedulaProfesional : "",
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

  const title = "Detalles directivo: [nombre_directivo]";
  return (
    <>
      <PrincipalTitle title = {title}></PrincipalTitle>
      <FormDirective directive = {professorDetails} isNewUser = {false}></FormDirective>
    </>
  );
}

export default ModifyDirective;
