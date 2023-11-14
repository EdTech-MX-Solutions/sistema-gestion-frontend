import CardView from "@/components/CardView";
import PersonalCard from "@/components/Personal.Card";
import StudentCard from "@/components/Student.Card";
import InterfaceAlumno from "@/interfaces/alumno";
import { ReactNode, useState } from "react";

interface DefaultLayoutProps {
    children: ReactNode;
}

const StudentData = ({ children }: DefaultLayoutProps) => {
    // create alumno from interface
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
        pais_origen: "Mexicana",
    };
    const alumno2: InterfaceAlumno = {
        no_boleta: "2019630523",
        curp: "RUHR920101HDFRBR00",
        nombre: "Juan",
        apellido_paterno: "Perez",
        apellido_materno: "Hernández",
        aniosPreescolar: 3,
        edad: 12,
        fecha_nacimiento: "01/01/2002",
        sexo: "Hombre",
        estatus: "Activo",
        entidad_nacimiento: "Ciudad de México",
        pais_origen: "México",
    };

    const title = "Datos Personales del Alumno";
    const description = `Datos registrados del alumno, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;
    return (
        <>
            <CardView title={title} description={description}>
                <StudentCard alumno={alumno}>
                    <PersonalCard />
                </StudentCard>
            </CardView>
        </>
    );
};

export default StudentData;
