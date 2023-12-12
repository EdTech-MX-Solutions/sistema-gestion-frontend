import CardView from "@/components/CardView";
import StudentCard from "@/components/student/Student.Card";
import { useAlumno } from "@/components/context/AlumnoProvider";
import PersonalData from "@/components/student/data/PersonalData";
import StudentDataCard from "@/components/student/StudentData.Card";

function Personal() {
    const { alumnos } = useAlumno();
    const title = "Datos Personales del Alumno";
    const description = `Datos del registrados del Alumno, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;

    return (
        <>
            <CardView title={title} description={description}>
                <StudentDataCard alumno={alumnos[0]}>
                    <PersonalData alumno={alumnos[0]} />
                </StudentDataCard>
            </CardView>
        </>
    );
}

export default Personal;
