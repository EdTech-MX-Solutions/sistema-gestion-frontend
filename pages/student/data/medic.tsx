import CardView from "@/components/CardView";
import MedicCard from "@/components/Medic.Card";
import StudentCard from "@/components/Student.Card";
import { useAlumno } from "@/components/context/AlumnoProvider";

function medicData() {
    const { alumno } = useAlumno();
    const title = "Datos Médicos del Alumno";
    const description = `Datos registrados del alumno, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;

    return (
        <>
            <CardView title={title} description={description}>
                <StudentCard alumno={alumno}>
                    <MedicCard />
                </StudentCard>
            </CardView>
        </>
    );
}

export default medicData;
