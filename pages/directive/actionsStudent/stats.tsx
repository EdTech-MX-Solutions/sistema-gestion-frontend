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
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
                <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700">
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
            </div>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 border border-blue-gray-100 shadow-sm">
                <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700">
                    <div className="p-3">
                        <h1 className="text-2xl">Stats de Alumnos</h1>
                        <p>Descripción de la estadistica</p>
                        <div className="w-full">
                            <Lines />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultStudents;
