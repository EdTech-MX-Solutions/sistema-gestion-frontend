import { ReactNode, useEffect, useState } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import InputSearch from "@/components/template/InputSearch";
import TableStudets from "@/components/directive/TableStudets";
import CardView from "@/components/CardView";
import SIGEAPICollection from "@/api/apiHandler";
import { useCookies } from "react-cookie";
import InterfaceAlumno from "@/interfaces/alumno";

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
