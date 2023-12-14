import { ReactNode, useEffect, useState } from "react";
import { usePeriodo } from "@/components/context/PeriodoProvider";
import { useCookies } from "react-cookie";
import { InterfaceCalificaciones } from "@/data/interfaces/calificaciones";
import { useAlumno } from "@/components/context/AlumnoProvider";
import PrincipalTitle from "@/components/student/Principal.Title";
import TableGrades from "@/components/student/academics/TableGrades";
import SIGEAPICollection from "@/data/calls/apiHandler";
import CardView from "@/components/CardView";
import StudentAcacemicsCard from "@/components/student/StudentAcademicsCard";
import Loader from "@/components/elements/Loader";

interface DefaultLayoutProps {
    children: ReactNode;
}

function Notes() {
    const [cookies, setCookie] = useCookies(["token", "boleta"]);
    const { periodo } = usePeriodo();
    const { alumnos, alumnoActual } = useAlumno();
    const [loading, setLoading] = useState<boolean>(true); // [true, setLoading
    const [hayCalificaciones, setHayCalificaciones] = useState<boolean>(false); // [false, setHayCalificaciones
    const [calificaciones, setCalificaciones] = useState<
        InterfaceCalificaciones[]
    >([]);

    const fetchNotes = async () => {
        setLoading(true);
        const api = new SIGEAPICollection();
        const token = cookies.token;
        try {
            const response =
                await api.sharedCollection.executeGetCalificaciones(
                    token,
                    alumnoActual.noBoleta
                );
            if (response.ok) {
                const data = await response.json();
                if (data.length === 0) {
                    setHayCalificaciones(false);
                    setLoading(false);
                    return;
                }
                let newCalificaciones: InterfaceCalificaciones[] = [];
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    const newCalificacion: InterfaceCalificaciones = {
                        Grado: element.grado,
                        SubGrado: element.subGrado,
                        materia: element.materia,
                        claveMateria: element.claveMateria,
                        primerTrimestre: element.primerTrimestre,
                        segundoTrimestre: element.segundoTrimestre,
                        tercerTrimestre: element.tercerTrimestre,
                        calificacionFinal: element.calificacionFinal,
                    };
                    newCalificaciones.push(newCalificacion);
                }

                setCalificaciones(newCalificaciones);
                setHayCalificaciones(true);
                setLoading(false);
                console.log("Calificaciones Actuales: ", newCalificaciones);
            } else {
                console.error(
                    `Error en la solicitud. Código de estado: ${response.status}`
                );
                setLoading(false);
            }
        } catch (error) {
            console.error("Error de solicitud:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    useEffect(() => {
        fetchNotes();
    }, [alumnoActual]);
    // const periodo = "Periodo_actual";
    const title =
        "Calificaciones " + periodo.anioInicio + "-" + periodo.anioFin;

    if (!hayCalificaciones && !loading) {
        return (
            <>
                <CardView title={title} description={title} customtitle={true}>
                    <PrincipalTitle title={title}></PrincipalTitle>
                    <StudentAcacemicsCard alumno={alumnoActual}>
                        <div className="flex justify-center items-center h-96">
                            <div className="text-3xl text-gray-400">
                                <h1 className="text-gray-800 dark:text-gray-200">
                                    No hay calificaciones disponibles, para este
                                    periodo.
                                </h1>
                                <p className="text-1xl">
                                    Favor de revisar más tarde.
                                </p>
                            </div>
                        </div>
                    </StudentAcacemicsCard>
                </CardView>
            </>
        );
    } else if (loading) {
        return (
            <>
                <CardView title={title} description={title} customtitle={true}>
                    <PrincipalTitle title={title}></PrincipalTitle>
                    <StudentAcacemicsCard alumno={alumnoActual}>
                        <div className="flex justify-center items-center h-96">
                            <h1 className="text-2xl text-gray-400">
                                Cargando...
                                <Loader />
                            </h1>
                        </div>
                    </StudentAcacemicsCard>
                </CardView>
            </>
        );
    } else {
        return (
            <>
                <CardView title={title} description={title} customtitle={true}>
                    <PrincipalTitle title={title}></PrincipalTitle>
                    <StudentAcacemicsCard alumno={alumnoActual}>
                        <TableGrades calificaciones={calificaciones} isKardex={false} />
                    </StudentAcacemicsCard>
                </CardView>
            </>
        );
    }
}

export default Notes;
