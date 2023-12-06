import { ReactNode, useEffect, useState } from "react";
import { usePeriodo } from "@/components/context/PeriodoProvider";
import { useCookies } from "react-cookie";
import { InterfaceCalificaciones } from "@/interfaces/calificaciones";
import { useAlumno } from "@/components/context/AlumnoProvider";
import PrincipalTitle from "@/components/student/Principal.Title";
import TableGrades from "@/components/student/academics/TableGrades";
import SIGEAPICollection from "@/src/apiHandler";
import CardView from "@/components/CardView";
import StudentAcacemicsCard from "@/components/student/StudentAcademicsCard";

interface DefaultLayoutProps {
    children: ReactNode;
}

function Notes() {
    const [cookies, setCookie] = useCookies(["token", "boleta"]);
    const { periodo } = usePeriodo();
    const { alumno } = useAlumno();
    const [loading, setLoading] = useState<boolean>(false); // [true, setLoading
    const [hayCalificaciones, setHayCalificaciones] = useState<boolean>(false); // [false, setHayCalificaciones
    const [calificaciones, setCalificaciones] = useState<
        InterfaceCalificaciones[]
    >([
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
    ]);

    const fetchNotes = async () => {
        setLoading(true);
        const api = new SIGEAPICollection();
        const token = cookies.token;
        const boleta = cookies.boleta;
        try {
            const response =
                await api.sharedCollection.executeGetCalificaciones(
                    token,
                    boleta
                );
            if (response.ok) {
                const data = await response.json();
                if (data.length == 0) {
                    setHayCalificaciones(false);
                    setLoading(false);
                    return;
                }
                let newCalificaciones: InterfaceCalificaciones[] = [];
                for (let i = 0; i < data.calificaciones.length; i++) {
                    const element = data.calificaciones[i];
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

    // const periodo = "Periodo_actual";
    const title =
        "Calificaciones " + periodo.anioInicio + "-" + periodo.anioFin;

    if (!hayCalificaciones && !loading) {
        return (
            <>
                <CardView title={title} description={title} customtitle={true}>
                    <PrincipalTitle title={title}></PrincipalTitle>
                    <StudentAcacemicsCard alumno={alumno}>
                        <div className="flex justify-center items-center h-96">
                            <div className="text-3xl text-gray-400">
                                <h1 className="text-gray-800">
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
                    <StudentAcacemicsCard alumno={alumno}>
                        <div className="flex justify-center items-center h-96">
                            <h1 className="text-2xl text-gray-400">
                                Cargando...
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
                    <StudentAcacemicsCard alumno={alumno}>
                        <TableGrades calificaciones={calificaciones} />
                    </StudentAcacemicsCard>
                </CardView>
            </>
        );
    }
}

export default Notes;
