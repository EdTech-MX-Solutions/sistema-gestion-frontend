import CardView from "@/components/CardView";
import TutorLayout from "@/components/Layouts/TutorLayout";
import MedicCard from "@/components/Medic.Card";
import StudentCard from "@/components/Student.Card";
import InterfaceAlumno from "@/interfaces/alumno";

function medicData() {
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
        pais_origen: "México",
    };
    const title = "Datos Médicos del Alumno";
    const description = `Datos registrados del alumno, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;
    return (
        <>
            <TutorLayout>
                <CardView title={title} description={description}>
                    <StudentCard alumno={alumno}>
                        <MedicCard />
                    </StudentCard>
                </CardView>
            </TutorLayout>
        </>
    );
}

export default medicData;
