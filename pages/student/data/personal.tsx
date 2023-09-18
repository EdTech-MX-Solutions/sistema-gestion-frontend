import CardView from "@/components/CardView";
import StudentCard from "@/components/Student.Card";
import PersonalData from "@/components/student/data/PersonalData";
import InterfaceAlumno from "@/interfaces/alumno";

function Personal() {
  const tutor = "Rodrigo Rubio";
  const title = "Datos Personales del Tutor";
  const description = `Datos registrados del tutor ${tutor}, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;
  const alumno: InterfaceAlumno = {
    no_boleta: "2019630523",
    curp: "RUHR920101HDFRBR00",
    nombre: "Ricardo",
    apellido_paterno: "Urbina",
    apellido_materno: "Hernández",
    fecha_nacimiento: "01/01/2002",
    sexo: "Hombre",
    estatus: "Activo",
    entidad_nacimiento: "Ciudad de México",
    nacionalidad: "Mexicana",
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
