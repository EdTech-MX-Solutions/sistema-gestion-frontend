import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode, useEffect, useState } from "react";
import CardConsultProfessor from "@/components/directive/CardConsultProfessor";
import { useRouter } from "next/router";
import { useProfesores } from "@/components/context/ProfesorProvider";
import InterfaceProfessor from "@/data/interfaces/professor";
import CardView from "@/components/CardView";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ConsultProfessor() {
  const router = useRouter();
  const { id } = router.query;
  
  const { profesores } = useProfesores();
  const [professorDetails, setProfessorDetails] = useState<InterfaceProfessor>({
    idProfesor: "cargando...",
    nombre: "cargando...",
    apellidoPaterno: "cargando...",
    apellidoMaterno: "cargando...",
    email: "cargando...",
    activo: false,
    diretivo: false,
    noCedulaProfesional: "",
    numero: [],
  });

  useEffect(() => {
    if (id && profesores && profesores.length > 0) {
      const foundProfesor = profesores.find(
        (profesor) => profesor.idProfesor == id
      );
      if (foundProfesor) {
        setProfessorDetails(foundProfesor);
      } else {
        console.error(`No se encontro un profesor con la ID: ${id}`);
      }
    }
  }, [id, profesores]);

  console.log(professorDetails);

  const title = `Detalles profesor: ${professorDetails.nombre + " " + professorDetails.apellidoPaterno + " " +professorDetails.apellidoMaterno}`;

  return (
    <>
      <CardView title={"title"} customtitle={true} description={""}>
        <PrincipalTitle title={title}></PrincipalTitle>
        <CardConsultProfessor
          professor={professorDetails}
        ></CardConsultProfessor>
      </CardView>
    </>
  );
}

export default ConsultProfessor;
