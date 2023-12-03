import SIGEAPICollection from "@/api/apiHandler";
import CardView from "@/components/CardView";
import StudentCard from "@/components/Student.Card";
import ParentsDataComponent from "@/components/student/data/ParentsData";
import InterfaceAlumno from "@/interfaces/alumno";
import InterfaceParent from "@/interfaces/parent";
import { useState } from "react";
import { useCookies } from "react-cookie";
import PersonalData from "@/components/student/data/PersonalData";
import { useAlumno } from "@/components/context/AlumnoProvider";

function ParentsData() {
    const { alumno } = useAlumno();
    const [cookies, setCookie] = useCookies(["token"]);
    const [dataGetted, setDataGetted] = useState(false);
    const loadingMessage = "cargando...";
    const [parentList, setParents] = useState<InterfaceParent[]>([
        {
            id_tutor: loadingMessage,
            leerYescribir: loadingMessage,
            curp: loadingMessage,
            nombres: loadingMessage,
            apellido_paterno: "",
            apellido_materno: "",
            correo: loadingMessage,
            fecha_nacimiento: loadingMessage,
            sexo: loadingMessage,
            pais_origen: loadingMessage,
            estado_civil: loadingMessage,
            red_social: loadingMessage,
            tipo_identificacion: loadingMessage,
            no_identificacion: loadingMessage,
            tutor_principal: loadingMessage,
            entidad_nacimiento: loadingMessage,
            gradoMaximoDeEstudios: loadingMessage,
            ocupacion: loadingMessage,
            parentesco: "padre",
            numeros: undefined,
        },
    ]);

    const tutor = "Rodrigo Rubio";
    const title = "Datos Personales del Tutor";
    const description = `Datos registrados del tutor ${tutor}, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;

    const api = new SIGEAPICollection();
    const token = cookies.token;
    if (dataGetted == false) {
        api.sharedCollection
            .executeGetTutores(token)
            .then((response) => {
                return response.ok
                    ? response.json()
                    : Promise.reject(
                          new Error(
                              `Error en la solicitud. Código de estado: ${response.status}`
                          )
                      );
            })
            .then((data) => {
                console.log("Datos de respuesta:", data);
                var list:InterfaceParent[] = [];
                data.forEach((dataParent: any) => {
                    list.push({
                        id_tutor: dataParent.idTutor,
                        leerYescribir: dataParent.leerYescribir,
                        curp: dataParent.curp,
                        nombres: dataParent.nombre,
                        apellido_paterno: dataParent.apellidoPaterno,
                        apellido_materno: dataParent.apellidoMaterno,
                        correo: dataParent.correo,
                        fecha_nacimiento: dataParent.fechaNacimiento,
                        sexo: dataParent.sexo,
                        pais_origen: dataParent.paisOrigen,
                        estado_civil: dataParent.estadoCivil,
                        red_social: dataParent.redSocial,
                        tipo_identificacion: dataParent.tipoIdentificacion,
                        no_identificacion: dataParent.noIdentificacion,
                        tutor_principal: dataParent.tutorPrincipal,
                        entidad_nacimiento: dataParent.entidad,
                        gradoMaximoDeEstudios: dataParent.gradoMaximoDeEstudios,
                        ocupacion: dataParent.ocupacion,
                        parentesco: dataParent.parentescto,
                        numeros: dataParent.numeros,
                    });
                    console.log("pushing parent:", dataParent);
                });
                setParents(list);
                console.log("lista tutores:", parentList);
                console.log("lista tutores inst:", list);
            })
            .catch((error) => {
                console.error("Error de solicitud:", error);
            });
        setDataGetted(true);
    }

    return (
        <>
            {/* <PrivateRoute> */}
            <CardView title={title} description={description}>
                <StudentCard alumno={alumno}>
                    <ParentsDataComponent
                        parents={parentList}
                    />
                </StudentCard>
            </CardView>
            {/* </PrivateRoute> */}
        </>
    );
}

export default ParentsData;
