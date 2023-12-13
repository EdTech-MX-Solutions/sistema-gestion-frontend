import TableSchedule from "@/components/student/academics/TableSchedule";
import CardView from "@/components/CardView";
import { useAlumno } from "@/components/context/AlumnoProvider";
import StudentAcacemicsCard from "@/components/student/StudentAcademicsCard";
import PrincipalTitle from "@/components/directive/Principal.Title";
import {useState} from "react";

function Schedule() {
    const { alumnos } = useAlumno();
    const title = "Horario";
    const [alumno,setAlumno] = useState(alumnos[0]);
    const horario = [
        {
            claveMateria: "ESP-2",
            nombreMateria: "Español",
            horaLunes: "08:00:00",
            horaMartes: "11:00:00",
            horaMiercoles: "12:00:00",
            horaJueves: "13:00:00",
            horaViernes: "14:00:00",
        },
        {
            claveMateria: "MAT-2",
            nombreMateria: "Matematicas",
            horaLunes: "10:00:00",
            horaMartes: "11:00:00",
            horaMiercoles: "12:00:00",
            horaJueves: "13:00:00",
            horaViernes: "14:00:00",
        },
    ];

    return (
        <>
            <CardView title={title} description={title} customtitle={true}>
                <PrincipalTitle title={title}></PrincipalTitle>
                <StudentAcacemicsCard alumno={alumno}>
                    <TableSchedule horarioId={alumno.no_boleta}></TableSchedule>
                </StudentAcacemicsCard>
            </CardView>
        </>
    );
}

export default Schedule;
