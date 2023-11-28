import { ReactNode, useState } from "react";
import PrincipalTitle from "@/components/student/Principal.Title";
import TableGrades from "@/components/student/academics/TableGrades";

interface DefaultLayoutProps {
  children: ReactNode;
}

function notes(){

    const calificaciones = [
        {
            "Grado" : "1",
            "SubGrado" : "A",
            "materia" : "Matemáticas",
            "claveMateria" : "MAT-1",
            "primerTrimestre" : "10",
            "segundoTrimestre" : "10",
            "tercerTrimestre" : "10",
            "calificacionFinal" : "10"
        }
    ];

    const title = "Calificaciones [Periodo_actual]";

    return (
        <>
           <PrincipalTitle title = {title}></PrincipalTitle>
            <TableGrades calificaciones = {calificaciones}></TableGrades>
        </>
    )
}

export default notes;