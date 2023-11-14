import { ReactNode, useState } from "react";
import PrincipalTitle from "@/components/student/Principal.Title";
import TableSchedule from "@/components/student/academics/Table.Schedule";

interface DefaultLayoutProps {
  children: ReactNode;
}

function schedule(){

    const materia1 = {
        claveMateria : "1",
        nombreMateria : "Español",
        nivel : 1
    }

    const materia2 = {
        claveMateria : "2",
        nombreMateria : "Matemáticas",
        nivel : 1
    }

    const materia3 = {
        claveMateria : "3",
        nombreMateria : "Exploración de la Naturaleza y la Sociedad",
        nivel : 1
    }

    const materia4 = {
        claveMateria : "4",
        nombreMateria : "Formación Cívica y Ètica<",
        nivel : 1
    }

    const materia5 = {
        claveMateria : "5",
        nombreMateria : "Educación Artística",
        nivel : 1
    }

    const materiasArray = [materia1,materia2,materia3, materia4, materia5];


    const horario = {
        grupo : "1A",
        materias : [materiasArray],
        horaLunes : "",
        horaMartes: "",
        horaMiercoles : "",
        horaJueves: "",
        horaViernes : ""
    }


    const title = "Horario"

    return (
        <>  
            <div className="">
                <PrincipalTitle title = {title}></PrincipalTitle>
                <TableSchedule></TableSchedule>
            </div>
        </>
    )
}

export default schedule;