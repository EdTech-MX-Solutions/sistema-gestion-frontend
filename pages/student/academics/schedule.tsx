import { ReactNode, useState } from "react";
import PrincipalTitle from "@/components/student/Principal.Title";
import TableSchedule from "@/components/student/academics/TableSchedule";

interface DefaultLayoutProps {
    children: ReactNode;
}

function schedule() {

    const title = "Horario"

    const horario =
        [
            {
                "claveMateria": "ESP-2",
                "nombreMateria": "Español",
                "horaLunes": "08:00:00",
                "horaMartes": "11:00:00",
                "horaMiercoles": "12:00:00",
                "horaJueves": "13:00:00",
                "horaViernes": "14:00:00"
            },
            {
                "claveMateria": "MAT-2",
                "nombreMateria": "Matematicas",
                "horaLunes": "10:00:00",
                "horaMartes": "11:00:00",
                "horaMiercoles": "12:00:00",
                "horaJueves": "13:00:00",
                "horaViernes": "14:00:00"
            }
        ];

    return (
        <>
            <PrincipalTitle title = {title}></PrincipalTitle>
           <TableSchedule horario = {horario}></TableSchedule>
        </>
    )
}

export default schedule;