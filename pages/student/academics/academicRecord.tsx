import {ReactNode, useEffect, useState} from "react";
import PrincipalTitle from "@/components/student/Principal.Title";
import TableGrades from "@/components/student/academics/TableGrades";
import SelectComponent from "@/components/SelectComponent";
import StudentAcacemicsCard from "@/components/student/StudentAcademicsCard";
import CardView from "@/components/CardView";
import {useAlumno} from "@/components/context/AlumnoProvider";
import Loader from "@/components/elements/Loader";
import {InterfaceCalificaciones} from "@/data/interfaces/calificaciones";
import SIGEAPICollection from "@/data/calls/apiHandler";
import {useCookies} from "react-cookie";

function AcademicRecord() {
    const [cookies, setCookie] = useCookies(["token", "boleta"]);
    const {alumnoActual} = useAlumno();
    const [loading, setLoading] = useState<boolean>(true); // [true, setLoading
    const [hayCalificaciones, setHayCalificaciones] = useState<boolean>(false);
    const [calificaciones, setCalificaciones] = useState<
        InterfaceCalificaciones[]
    >([]);
    const [periodo, setPeriodo] = useState<string>("Todos"); // [true, setLoading
    const [calificacionesFiltradas, setCalificacionesFiltradas] = useState<InterfaceCalificaciones[]>([]);

    const fetchKardex = async () => {
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
                        SubGrado: element.grupo,
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
                setCalificacionesFiltradas(newCalificaciones);
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

    const handleFilter = (e: { target: { value: string; }; }) => {
        setPeriodo(e.target.value);
    }

    const optionsSelectPeriodo = [
        {value: "Todos", label: "Todos"},
        {value: "Primero", label: "Primero"},
        {value: "Segundo", label: "Segundo"},
        {value: "Tercero", label: "Tercero"},
        {value: "Cuarto", label: "Cuarto"},
        {value: "Quinto", label: "Quinto"},
        {value: "Sexto", label: "Sexto"},
    ];

    const title = "Historial academico";

    useEffect(
        () => {
            fetchKardex();
        },
        []);
    useEffect(
        () => {
            fetchKardex();
        },
        [alumnoActual]);
    useEffect(
        ()=>{
            if(periodo === "Todos"){
                calificaciones.length > 0 ? setHayCalificaciones(true) : setHayCalificaciones(false);
                setCalificacionesFiltradas(calificaciones);
            }else{
                const filtro = calificaciones
                    .filter(calificacion=>calificacion.Grado === periodo)
                setCalificacionesFiltradas(filtro);
                filtro.length > 0 ? setHayCalificaciones(true) : setHayCalificaciones(false);
            }
        },
        [periodo]
    )

    if (!hayCalificaciones && !loading) {
        return (
            <>
                <CardView title={title} description={title} customtitle={true}>
                    <PrincipalTitle title={title}></PrincipalTitle>
                    <StudentAcacemicsCard alumno={alumnoActual}>
                        <SelectComponent
                            options={optionsSelectPeriodo}
                            title={"Periodo"}
                            onChange={handleFilter}
                        />
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
                        <SelectComponent
                            options={optionsSelectPeriodo}
                            title={"Periodo"}
                            onChange={handleFilter}
                        />
                        <TableGrades calificaciones={calificacionesFiltradas} isKardex={true}/>
                    </StudentAcacemicsCard>
                </CardView>
            </>
        );
    }
}

export default AcademicRecord;
