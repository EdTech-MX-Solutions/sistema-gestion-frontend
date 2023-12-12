import { ReactNode, useState } from "react";
import PrincipalTitle from "@/components/student/Principal.Title";
import TableGrades from "@/components/student/academics/TableGrades";
import SelectComponent from "@/components/SelectComponent";
import StudentAcacemicsCard from "@/components/student/StudentAcademicsCard";
import CardView from "@/components/CardView";
import { useAlumno } from "@/components/context/AlumnoProvider";

interface DefaultLayoutProps {
    children: ReactNode;
}

function AcademicRecord() {
    const { alumnos } = useAlumno();
    const calificaciones = [
        {
            Grado: "1",
            SubGrado: "A",
            materia: "Matemáticas",
            claveMateria: "MAT-1",
            primerTrimestre: "10",
            segundoTrimestre: "10",
            tercerTrimestre: "10",
            calificacionFinal: "10",
        },
    ];

    const optionsSelectPeriodo = [
        { value: "primerAño", label: "Ver mensajes" },
        { value: "segundoAño", label: "Ver reportes" },
        { value: "tercerAño", label: "Ver archivos" },
    ];

    const title = "Historial academico";

    return (
        <>
            <CardView title={title} description={title} customtitle={true}>
                <PrincipalTitle title={title}></PrincipalTitle>
                <StudentAcacemicsCard alumno={alumnos[0]}>
                    <SelectComponent
                        options={optionsSelectPeriodo}
                        title="Selecciona.."
                    ></SelectComponent>

                    <div className="bg-white grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <div className="grid grid-rows-4 gap-">
                                <div className="row-span-3">
                                    <TableGrades
                                        calificaciones={calificaciones}
                                    ></TableGrades>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="grid grid-rows-6 gap-2">
                                <div className="p-4 row-span-3">Grafica 1</div>
                                <div className="p-4 row-span-3">Grafica 2</div>
                            </div>
                        </div>
                    </div>
                </StudentAcacemicsCard>
            </CardView>
        </>
    );
}

export default AcademicRecord;
