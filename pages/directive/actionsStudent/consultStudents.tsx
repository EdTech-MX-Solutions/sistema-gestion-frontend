import { ReactNode, useEffect, useState } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import InputSearch from "@/components/template/InputSearch";
import TableStudets from "@/components/directive/TableStudets";
import CardView from "@/components/CardView";
import Loader from "@/components/elements/Loader";
import { useAlumno } from "@/components/context/AlumnoProvider";

interface DefaultLayoutProps {
    children: ReactNode;
}

function ConsultStudents() {
    const {alumnos} = useAlumno();

    return (
        <>
            <CardView title={"title"} customtitle={true} description={""}>
                <PrincipalTitle title={"Consultar Alumnos"}></PrincipalTitle>

                <InputSearch
                    searchDataAutomcomplete={[
                        ...alumnos.map((alumno) => ({
                            key: alumno.no_boleta,
                            value: alumno.no_boleta,
                        })),
                        ...alumnos.map((alumno) => ({
                            key: alumno.no_boleta,
                            value: `${alumno.nombre} ${alumno.apellido_paterno} ${alumno.apellido_materno}`,
                        })),
                    ]}
                    comment={
                        "Recuerda que puedes buscar a un alumno por nombre, apellidos o boleta"
                    }
                ></InputSearch>
                <TableStudets students={alumnos}></TableStudets>
            </CardView>
        </>
    );
}

export default ConsultStudents;