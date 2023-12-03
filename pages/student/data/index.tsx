import CardView from "@/components/CardView";
import StudentCard from "@/components/Student.Card";
import { useAlumno } from "@/components/context/AlumnoProvider";
import PersonalData from "@/components/student/data/PersonalData";

function Personal() {
    const { alumno } = useAlumno();
    const tutor = "Rodrigo Rubio";
    const title = "Datos Personales del Alumno";
    const description = `Datos del Alumno registrados del tutor,  ${tutor}, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;

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
