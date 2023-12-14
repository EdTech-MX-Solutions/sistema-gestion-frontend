import SIGEAPICollection from "@/data/calls/apiHandler";
import CardView from "@/components/CardView";
import ParentsDataComponent from "@/components/student/data/ParentsData";
import InterfaceParent from "@/data/interfaces/parent";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useAlumno } from "@/components/context/AlumnoProvider";
import StudentDataCard from "@/components/student/StudentData.Card";
import { useRouter } from "next/router";

function ParentsDataDetails() {
    const { alumnos } = useAlumno();
    const [cookies, setCookie] = useCookies(["token", "user"]);
    const [dataGetted, setDataGetted] = useState(false);
    const loadingMessage = "cargando...";
    const router = useRouter();
    const boleta = router.query.id + "";
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
    var tutor = "";

    try {
        tutor = cookies.user || "";
        console.log("tutor:", tutor);
    } catch (error) {
        console.log("error:", error);
    }

    const title = "Datos Personales del Tutor";
    const description = `Datos registrados del tutor ${tutor}, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;

    const fetchParents = async () => {
        const api = new SIGEAPICollection();
        const token = cookies.token;
        if (dataGetted == false) {
            api.sharedCollection
                .executeGetParentByAlumno(token, boleta)
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
                    var list: InterfaceParent[] = [];
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
                            gradoMaximoDeEstudios:
                                dataParent.gradoMaximoDeEstudios,
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
    };

    useEffect(() => {
        fetchParents();
    });

    return (
        <>
            <CardView title={title} description={description}>
                <StudentDataCard alumno={alumnos[0]}>
                    {dataGetted ? (
                        <ParentsDataComponent parents={parentList} />
                    ) : (
                        <p>{loadingMessage}</p>
                    )}
                </StudentDataCard>
            </CardView>
        </>
    );
}

export default ParentsDataDetails;
