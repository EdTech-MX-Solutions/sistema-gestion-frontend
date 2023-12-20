import { ReactNode } from "react";
import PrincipalTitle from "@/components/professor/Principal.Title";
import TableGrades from "@/components/professor/TableGrades";
import PanelGrades from "@/pages/professors/grades/panelGrades";
import {useAlumno} from "@/components/context/AlumnoProvider";
import CardView from "@/components/CardView";
import Loader from "@/components/elements/Loader";
import {usePeriodo} from "@/components/context/PeriodoProvider";


interface DefaultLayoutProps {
    children: ReactNode;
}

const ListData = () => {

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

    const {alumnos,hayalumnos,loading} =useAlumno();
    const {periodo} = usePeriodo();
    if(periodo.periodoCalificaciones){
        return (
            <>
                <CardView title={"title"} customtitle={true} description={""}>
                    <PrincipalTitle title={"Lista de Alumnos"}></PrincipalTitle>
                    {loading ? <Loader size="lg" /> : null}
                    {hayalumnos && !loading ? (
                        <>
                            <TableGrades alumnos={alumnos}></TableGrades>
                            <PanelGrades periodo={periodo}></PanelGrades>
                        </>
                    ) : <p>Nada Aun</p>}
                </CardView>
            </>
        );
    }else{
        return (
            <>
                <CardView title={"title"} customtitle={true} description={""}>
                    <PrincipalTitle title={"Lista de Alumnos"}></PrincipalTitle>
                    {loading ? <Loader size="lg" /> : null}
                    {hayalumnos && !loading? (
                        <>
                            <TableGrades alumnos={alumnos}></TableGrades>
                            <PanelGrades periodo={periodo}></PanelGrades>
                        </>
                    ) : <p>Nada Aun</p>}
                </CardView>
            </>
        );
    }

};

export default ListData;
