import SIGEAPICollection from "@/api/apiHandler";
import CardView from "@/components/CardView";
import StudentCard from "@/components/Student.Card";
import PersonalData from "@/components/student/data/PersonalData";
import InterfaceAlumno from "@/interfaces/alumno";
import { useState } from "react";
import { useCookies } from "react-cookie";

function Personal() {
    const [cookies, setCookie] = useCookies(["token"]);
    const [alumnoGetted, setAlumnoGetted] = useState(false);
    const [alumno, setAlumno] = useState<InterfaceAlumno>({
        no_boleta: "cargando...",
        curp: "cargando...",
        nombre: "cargando...",
        apellido_paterno: "",
        apellido_materno: "",
        fecha_nacimiento: "cargando...",
        sexo: "cargando...",
        estatus: "cargando...",
        entidad_nacimiento: "cargando...",
        pais_origen: "cargando...",
        edad: 0,
        aniosPreescolar: 0,
    });

    const tutor = "Rodrigo Rubio";
    const title = "Datos Personales del Alumno";
    const description = `Datos del Alumno registrados del tutor,  ${tutor}, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;

    const api = new SIGEAPICollection();
    const token = cookies.token;
    if (alumnoGetted == false) {
        api.sharedCollection.executeGetAlumnos(token).then((response) => {
            return response.ok ? response.json() : Promise.reject(new Error(`Error en la solicitud. Código de estado: ${response.status}`));
        })
        .then((data) => {
            console.log("Datos de respuesta:", data);
            const sexo = data[0].sexo == "M" ? "Masculino" : "Femenino";
            const newAlumno: InterfaceAlumno = {
                no_boleta: data[0].noBoleta,
                curp: data[0].curp,
                nombre: data[0].nombres,
                apellido_paterno: data[0].apellidoPaterno,
                apellido_materno: data[0].apellidoMaterno,
                fecha_nacimiento: data[0].fechaNacimiento,
                sexo: sexo,
                estatus: data[0].estatus,
                entidad_nacimiento: data[0].entidad,
                pais_origen: data[0].paisOrigen,
                edad: data[0].edad,
                aniosPreescolar: data[0].aniosPreescolar,
            };
            setAlumno(newAlumno);
            console.log("Datos de alumno:", newAlumno);
        })
        .catch((error) => {
            console.error("Error de solicitud:", error);
        });
        setAlumnoGetted(true);
    }

    return (
        <>
            <CardView title={title} description={description}>
                <StudentCard alumno={alumno}>
                    <PersonalData alumno={alumno} />
                </StudentCard>
            </CardView>
        </>
    );
}

export default Personal;
