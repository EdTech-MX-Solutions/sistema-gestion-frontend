import { ReactNode, useState } from "react";
import PrincipalTitle from "@/components/student/Principal.Title";
import TableGrades from "@/components/student/academics/Table.Grades";

interface DefaultLayoutProps {
  children: ReactNode;
}

function notes(){

    const calificacionM1 = {
        materia : "Español",
        trimestre1 : 10,
        trimestre2 : 10,  
        trimestre3 : 10,
        final : 10,
        alumnoBoleta : ""  
    }

    const calificacionM2 = {
        materia : "Matematicas",
        trimestre1 : 10,
        trimestre2 : 10,  
        trimestre3 : 10,
        final : 10,
        alumnoBoleta : ""  
    }

    const calificacionM3 = {
        materia : "Español",
        trimestre1 : 10,
        trimestre2 : 10,  
        trimestre3 : 10,
        final : 10,
        alumnoBoleta : ""  
    }

    const calificacionM4 = {
        materia : "Español",
        trimestre1 : 10,
        trimestre2 : 10,  
        trimestre3 : 10,
        final : 10,
        alumnoBoleta : ""  
    }

    const calificacionM5 = {
        materia : "Español",
        trimestre1 : 10,
        trimestre2 : 10,  
        trimestre3 : 10,
        final : 10,
        alumnoBoleta : ""  
    }

    const calificacionesAlumno = [calificacionM1, calificacionM2, calificacionM3, calificacionM4, calificacionM5];

    const title = "Calificaciones [Periodo_actual]"

    return (
        <>
            <PrincipalTitle title = {title} ></PrincipalTitle>

            <TableGrades></TableGrades>
        </>
    )
}

export default notes;