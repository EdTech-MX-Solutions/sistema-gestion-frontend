import CardView from "@/components/CardView";
import MedicCard from "@/components/Medic.Card";
import { useAlumno } from "@/components/context/AlumnoProvider";
import StudentDataCard from "@/components/student/StudentData.Card";

function medicData() {
    const { alumno } = useAlumno();
    const title = "Datos Médicos del Alumno";
    const description = `Datos registrados del alumno, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;

    return (
        <>
            <CardView title={title} description={description}>
                <StudentDataCard alumno={alumno}>
                    <MedicCard />
                </StudentDataCard>
            </CardView>
        </>
    );
}

export default medicData;
