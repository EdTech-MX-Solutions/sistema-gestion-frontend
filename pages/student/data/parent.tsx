import CardView from "@/components/CardView";
import PersonalCard from "@/components/Personal.Card";
import StudentCard from "@/components/Student.Card";
import ParentsDataComponent from "@/components/student/data/ParentsData";
import InterfaceAlumno from "@/interfaces/alumno";
import { Alumni_Sans_Collegiate_One } from "next/font/google";

function ParentsData() {
  const tutor = "Rodrigo Rubio";
  const title = "Datos Personales del Tutor";
  const description = `Datos registrados del tutor ${tutor}, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;
  const alumno: InterfaceAlumno = {
    no_boleta: "2019630523",
    curp: "RUHR920101HDFRBR00",
    nombre: "Ricardo",
    apellido_paterno: "Urbina",
    apellido_materno: "Hernández",
    aniosPreescolar: 3,
    edad: 12,
    fecha_nacimiento: "01/01/2002",
    sexo: "Hombre",
    estatus: "Activo",
    entidad_nacimiento: "Ciudad de México",
    pais_origen: "Mexicana",
  };
  return (
    <>
      <CardView title={title} description={description}>
        <StudentCard alumno={alumno}>
          <ParentsDataComponent alumno={alumno}  />
        </StudentCard>
      </CardView>
    </>
  );
}

export default ParentsData;
