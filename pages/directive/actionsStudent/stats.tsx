import { ReactNode, useEffect, useState } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import CardView from "@/components/CardView";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import InterfaceAlumno from "@/data/interfaces/alumno";
import Loader from "@/components/elements/Loader";
import { PieChart } from "@/components/stats/pie";
import { Lines } from "@/components/stats/lines";

interface DefaultLayoutProps {
    children: ReactNode;
}

function ConsultStudents() {
    const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
    const [alumnos, setAlumnos] = useState<InterfaceAlumno[]>([]);
    const [hayAlumnos, setHayAlumnos] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAlumnos = async () => {
        const api = new SIGEAPICollection();
        const token = cookies.token;

        try {
            const response = await api.sharedCollection.executeGetAlumnos(
                token
            );
            if (response.ok) {
                console.log("Generando Lista de Alumnos");
                const data = await response.json();
                console.log(data);
                if (!data || data.length == 0) {
                    setHayAlumnos(false);
                    setLoading(false);
                    return;
                } else {
                    setHayAlumnos(true);
                }
                let newAlumnos: InterfaceAlumno[] = [];
                console.log("Entrando al for");

                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    const sexo =
                        element.sexo === "M" ? "Masculino" : "Femenino";
                    const newAlumno: InterfaceAlumno = {
                        no_boleta: element.noBoleta,
                        curp: element.curp,
                        nombre: element.nombres,
                        apellido_paterno: element.apellidoPaterno,
                        apellido_materno: element.apellidoMaterno,
                        aniosPreescolar: element.aniosPreescolar,
                        fecha_nacimiento: element.fechaNacimiento,
                        edad: element.edad,
                        pais_origen: element.paisOrigen,
                        sexo: sexo,
                        estatus: element.estatus,
                        entidad_nacimiento: element.entidad,
                        grado: element.grado || "Sin asignar",
                        grupo: element.grupo || "",
                        actualizarDatosMedicos: element.actualizarDatosMedicos,
                    };
                    newAlumnos.push(newAlumno);
                }
                console.log("Alumnos obtenidos ");
                setAlumnos(newAlumnos);
                setHayAlumnos(true);
                setLoading(false);
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
        fetchAlumnos();
    }, []);

    return (
        <>
            <CardView title={"title"} customtitle={true} description={""}>
                <PrincipalTitle title={"Estadisticas Alumnos"}></PrincipalTitle>
                <StatsPanel />
            </CardView>
        </>
    );
}

const StatsPanel = () => {
    return (
        <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white dark:bg-slate-300 text-gray-700 border border-blue-gray-100 shadow-sm">
                <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white dark:bg-slate-300 text-gray-700">
                    <div className="p-3">
                        <h1 className="text-2xl">Stats de Alumnos</h1>
                        <p>Descripción de la estadistica</p>
                        <div className="flex ">
                            <div className="w-1/2">
                                <PieChart />
                            </div>
                            <div className="w-1/2">
                                Acciones: <br />
                                <ul>
                                    <li>Acción 1</li>
                                    <li>Acción 2</li>
                                    <li>Acción 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 border-t border-blue-gray-50 px-6 py-5">
                    <p className="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            strokeWidth="2"
                            className="h-4 w-4 text-blue-gray-400"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        &nbsp;Actualizado hace 1 min(s).
                    </p>
                </div>
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white dark:bg-slate-300 text-gray-700 border border-blue-gray-100 shadow-sm">
                <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white dark:bg-slate-300 text-gray-700">
                    <div className="p-3">
                        <h1 className="text-2xl">Stats de Alumnos</h1>
                        <p>Descripción de la estadistica</p>
                        <div className="w-full">
                            <Lines />
                        </div>
                    </div>
                </div>
                <div className="p-6 border-t border-blue-gray-50 px-6 py-5">
                    <p className="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            strokeWidth="2"
                            className="h-4 w-4 text-blue-gray-400"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        &nbsp;Actualizado hace 1 min(s).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConsultStudents;
