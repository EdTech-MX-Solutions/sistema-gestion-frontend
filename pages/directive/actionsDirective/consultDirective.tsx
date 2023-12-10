import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode, useEffect } from "react";
import CardConsultDirective from "@/components/directive/CardConsultDirective";
import { useRouter } from "next/router";
import { useProfesores } from "@/components/context/ProfesorProvider";
import { useState } from "react";
import CardView from "@/components/CardView";
import InterfaceProfessor from "@/data/interfaces/professor";
interface DefaultLayoutProps {
  children: ReactNode;
}

function ConsultDirective() {
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
    noCedulaProfesional: 0,
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

  const title = "Detalles directivo: [nombre_directivo]";

  return (
    <>
      <CardView title={"title"} customtitle={true} description={""}>
        <PrincipalTitle title={title}></PrincipalTitle>
        <CardConsultDirective
          directive={professorDetails}
        ></CardConsultDirective>
      </CardView>
    </>
  );
}

export default ConsultDirective;
