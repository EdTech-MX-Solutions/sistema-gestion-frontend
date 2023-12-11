import { ReactNode } from "react";
import PrincipalTitle from "@/components/professor/Principal.Title";
import TableGrades from "@/components/professor/TableGrades";


interface DefaultLayoutProps {
    children: ReactNode;
}

const listData = () => {

    const title = "Registro de calificaciones [Periodo_actual]"

    const  calificaciones  = [
        {
            "grado" : "1",
            "grupo" : "A",
            "materia" : "Matematicas",
            "claveMateria" : "Math-1",
            "primerTrimestre" : 10,
            "segundoTrimestre" : 10,
            "tercerTrimestre" : 10,
            "calificacionFinal" : 10
        },
        {
            "grado" : "1",
            "grupo" : "A",
            "materia" : "Español",
            "claveMateria" : "Esp-1",
            "primerTrimestre" : 10,
            "segundoTrimestre" : 10,
            "tercerTrimestre" : 10,
            "calificacionFinal" : 10
        }
    ]
       
    
    return (
        <>
            <PrincipalTitle title={title}></PrincipalTitle>
            <TableGrades calificaciones = {calificaciones}></TableGrades>
        </>
    );
};

export default listData;
