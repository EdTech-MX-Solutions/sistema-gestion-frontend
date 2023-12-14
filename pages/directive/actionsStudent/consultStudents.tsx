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
    const {alumnos, loading, hayalumnos} = useAlumno();

    return (
        <>
            <CardView title={"title"} customtitle={true} description={""}>
                <PrincipalTitle title={"Consultar Alumnos"}></PrincipalTitle>

                <InputSearch
                    route="/directive/actionsStudent/personal?id="
                    searchDataAutomcomplete={[
                        ...alumnos.map((alumno) => ({
                            key: alumno.noBoleta,
                            value: alumno.noBoleta,
                        })),
                        ...alumnos.map((alumno) => ({
                            key: alumno.noBoleta,
                            value: `${alumno.nombres} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno}`,
                        })),
                    ]}
                    comment={
                        "Recuerda que puedes buscar a un alumno por apellido paterno o boleta"
                    }
                ></InputSearch>
                {loading ? <Loader /> : null}
                {hayalumnos && !loading ? (
                <TableStudets students={alumnos}></TableStudets>
                ) : null}
            </CardView>
        </>
    );
}

export default ConsultStudents;