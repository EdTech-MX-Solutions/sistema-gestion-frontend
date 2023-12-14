import SIGEAPICollection from "@/data/calls/apiHandler";
import CardView from "@/components/CardView";
import ParentsDataComponent from "@/components/student/data/ParentsData";
import InterfaceParent from "@/data/interfaces/parent";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useAlumno } from "@/components/context/AlumnoProvider";
import StudentDataCard from "@/components/student/StudentData.Card";

function ParentsData() {
    const { alumnoActual } = useAlumno();
    const [cookies, setCookie] = useCookies(["token", "user"]);
    const [dataGetted, setDataGetted] = useState(false);
    const loadingMessage = "cargando...";
    const [parentList, setParents] = useState<InterfaceParent[]>([
        {
            id : 0,
            leerYescribir: loadingMessage,
            curp: loadingMessage,
            nombres: loadingMessage,
            apellidoPaterno: "",
            apellidoMaterno: "",
            correo: loadingMessage,
            fechaNacimiento: loadingMessage,
            sexo: loadingMessage,
            paisOrigen: loadingMessage,
            estadoCivil: loadingMessage,
            redesSociales: [],
            tipoIdentificacion: loadingMessage,
            noIdentificacion: loadingMessage,
            esPrincipal: loadingMessage,
            estadoOrigen: loadingMessage,
            gradoMaximoDeEstudios: loadingMessage,
            ocupacion: loadingMessage,
            parentesco: "padre",
            numeros: [],
        },
    ]);
    var tutor = "";


    const title = "Datos Personales del Tutor";
    let description = `Datos registrados del tutor.`;

    const fetchParents = async () => {
        try {
            tutor = cookies.user || "";
            console.log("tutor:", tutor);
        } catch (error) {
            console.log("error:", error);
        }
        description = `Datos registrados del tutor ${tutor}, ¿Algún dato no es correcto? contactar a la institución para cualquier modificación.`;

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
                    var list: InterfaceParent[] = [];
                    data.forEach((element: any) => {
                        list.push({
                            id: element.id,
                        curp: element.curp,
                        leerYescribir: element.leerYescribir,
                        gradoMaximoDeEstudios: element.gradoMaximoDeEstudios,
                        ocupacion: element.ocupacion,
                        nombres: element.nombre,
                        apellidoPaterno: element.apellidoPaterno,
                        apellidoMaterno: element.apellidoMaterno,
                        correo: element.email,
                        fechaNacimiento: element.fechaNacimiento,
                        sexo: element.sexo,
                        paisOrigen: element.paisOrigen,
                        estadoCivil: element.estadoCivil,
                        redesSociales: element.redesSociales,
                        tipoIdentificacion: element.tipoIdentificacion,
                        noIdentificacion: element.noIdentificacion,
                        esPrincipal: element.esPrincipal,
                        parentesco: element.parentesco,
                        estadoOrigen: element.estadoOrigen,
                        numeros: element.numeros,
                        });
                        // console.log("pushing parent:", dataParent);
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
    },[]);

    useEffect(()=>{

    },[alumnoActual])

    return (
        <>
            <CardView title={title} description={description}>
                <StudentDataCard alumno={alumnoActual}>
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

export default ParentsData;
