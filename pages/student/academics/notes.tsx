import { ReactNode, useEffect, useState } from "react";
import PrincipalTitle from "@/components/student/Principal.Title";
import TableGrades from "@/components/student/academics/TableGrades";
import { usePeriodo } from "@/components/context/PeriodoProvider";
import SIGEAPICollection from "@/api/apiHandler";
import { useCookies } from "react-cookie";
import { InterfaceCalificaciones } from "@/interfaces/calificaciones";

interface DefaultLayoutProps {
    children: ReactNode;
}

function notes() {
    const [cookies, setCookie] = useCookies(["token", "boleta"]);
    const { periodo } = usePeriodo();
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
                console.log("Calificaciones Actuales: ", newCalificaciones);
            } else {
                console.error(
                    `Error en la solicitud. Código de estado: ${response.status}`
                );
            }
        } catch (error) {
            console.error("Error de solicitud:", error);
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
                <PrincipalTitle title={title}></PrincipalTitle>
                <div className="flex justify-center items-center h-96">
                    <div className="text-3xl text-gray-400">
                        <h1 className="text-gray-800">
                            No hay calificaciones disponibles, para este
                            periodo.
                        </h1>
                        <p className="text-1xl">Favor de revisar más tarde.</p>
                    </div>
                </div>
            </>
        );
    } else if (loading) {
        return (
            <>
                <PrincipalTitle title={title}></PrincipalTitle>
                <div className="flex justify-center items-center h-96">
                    <h1 className="text-2xl text-gray-400">Cargando...</h1>
                </div>
            </>
        );
    } else {
        return (
            <>
                <PrincipalTitle title={title}></PrincipalTitle>
                <TableGrades calificaciones={calificaciones}></TableGrades>
            </>
        );
    }
}

export default notes;
