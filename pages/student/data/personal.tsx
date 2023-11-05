import CardView from "@/components/CardView";
import TutorLayout from "@/components/Layouts/TutorLayout";
import StudentCard from "@/components/Student.Card";
import PersonalData from "@/components/student/data/PersonalData";
import InterfaceAlumno from "@/interfaces/alumno";
import { useState } from "react";
import { useCookies } from "react-cookie";

function Personal() {
    const [cookies, setCookie] = useCookies(["token"]);
    const [alumnoGetted, setAlumnoGetted] = useState(false);
    const [alumno, setAlumno] = useState<InterfaceAlumno>({
        no_boleta: "202301U001",
        curp: "URHE020101HDMRBRXX",
        nombre: "Ricardo",
        apellido_paterno: "Urbina",
        apellido_materno: "Hernández",
        fecha_nacimiento: "01/01/2017",
        sexo: "Hombre",
        estatus: "Activo",
        entidad_nacimiento: "Ciudad de México",
        pais_origen: "México",
        edad: 6,
        aniosPreescolar: 2,
    });

    const tutor = "Rodrigo Rubio";
    const title = "Datos Personales del Alumno";
    const description = `Datos del Alumno registrados del tutor,  ${tutor}, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;

    const base_rute = "https://sige-octavio-paz.azurewebsites.net";
    const version = "v1";
    const route = "/alumnos";
    const token = cookies.token;
    if (alumnoGetted == false) {
        fetch(`${base_rute}/${version}/${route}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json(); // Convierte la respuesta a JSON
                } else {
                    throw new Error("Error en la solicitud");
                }
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
            <TutorLayout>
                <CardView title={title} description={description}>
                    <StudentCard alumno={alumno}>
                        <PersonalData alumno={alumno} />
                    </StudentCard>
                </CardView>
            </TutorLayout>
        </>
    );
}

export default Personal;
