import CardView from "@/components/CardView";
import { useAlumno } from "@/components/context/AlumnoProvider";
import StudentDataCard from "@/components/student/StudentData.Card";
import PersonalData from "@/components/student/data/PersonalData";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import InterfaceAlumno from "@/data/interfaces/alumno";
import MedicCard from "@/components/Medic.Card";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ConsultDataPersonalStudent() {

    const router = useRouter();
    const { id } = router.query;
    const {alumnos} = useAlumno();
    const [alumnosDetails, setalumnosDetails] = useState<InterfaceAlumno>({
        noBoleta: "Cargando...",
        curp: "Cargando...",
        nombres: "Cargando...",
        apellidoPaterno: "Cargando...",
        apellidoMaterno: "Cargando...",
        aniosPreescolar: 0,
        fechaNacimiento: "Cargando...",
        edad: 0,
        paisOrigen: "Cargando...",
        sexo: "Cargando...",
        estatus: "Cargando...",
        entidad: "Cargando...",
        grado: "Cargando...",
        grupo: "Cargando...",
        actualizarDatosMedicos: false,
    });

    useEffect(() => {
    if (id && alumnos && alumnos.length > 0) {
      const foundAlumno = alumnos.find(
        (alumno) => alumno.noBoleta == id
      );
      if (foundAlumno) {
        setalumnosDetails(foundAlumno);
      } else {
        console.error(`No se encontro un profesor con la ID: ${id}`);
      }
    }
  }, [id, alumnos]);

  console.log(alumnosDetails);

    const title = "Datos Personales del Alumno";
    const description = `Datos del registrados del Alumno, ¿Algún dato no es correcto? puedes modificarlo en la pestaña correspondiente.`;

  return (
    <>
      <CardView title={title} description={description}>
        <StudentDataCard alumno={alumnosDetails}>
          <MedicCard />
        </StudentDataCard>
      </CardView>
    </>
  );
}

export default ConsultDataPersonalStudent;