import CardView from "@/components/CardView";
import StudentCard from "@/components/Student.Card";
import PersonalData from "@/components/student/data/PersonalData";
import InterfaceAlumno from "@/interfaces/alumno";

function Personal() {
  const tutor = "Rodrigo Rubio";
  const title = "Datos Personales del Alumno";
  const description = `Datos del Alumno registrados del tutor,  ${tutor}, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;
  const alumno: InterfaceAlumno = {
    no_boleta: "202301U001",
    curp: "URHE020101HDMRBRXX",
    nombre: "Ricardo",
    apellido_paterno: "Urbina",
    apellido_materno: "Hernández",
    fecha_nacimiento: "01/01/2017",
    sexo: "Hombre",
    estatus: "Activo",
    entidad_nacimiento: "Ciudad de México",
    pais_origen: "México",
    edad: 6,
    aniosPreescolar: 2
  };
  return (
    <>
      <CardView title={title} description={description}>
        <StudentCard alumno={alumno}>
          <PersonalData alumno={alumno} />
        </StudentCard>
      </CardView>
    </>
  );
}

export default Personal;
