import PrincipalTitle from "@/components/directive/Principal.Title";
import CardView from "@/components/CardView";
import FormCreateSubject from "@/components/directive/FormCreateSubject";
import { use, useEffect, useState } from "react";
import InterfaceMateria from "@/data/interfaces/materia";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

function ModifySubject() {
    const title = "Registro de Nueva Materia";
    const subtitle =
        "En esta sección puedes crear las materias que pueden ser asignadas a los alumnos";
    const [loading, setLoading] = useState<boolean>(true);
    const [hayMaterias, setHayMaterias] = useState<boolean>(false);
    const [clave_a_buscar, setClaveABuscar] = useState<string>("");
    const router = useRouter();
    const { clave } = router.query;
    console.log("router query: ", router.query);
    //cookies
    const [cookies] = useCookies(["token"]);
    const [subject, setSubject] = useState<InterfaceMateria>({
        clave: "Cargando...",
        nombre: "Cargando...",
        nivel: "Cargando...",
    });

    const fetchSubject = async () => {
        const api = new SIGEAPICollection();
        const token = cookies.token;
        console.log("Buscando: ", clave);

        if (clave) {
            try {
                const response =
                    await api.directivosCollection.executeGetMaterias(token);
                if (response.ok) {
                    // console.log("Generando Lista materias");
                    const data = await response.json();
                    // console.log(data);
                    if (!data || data.length == 0) {
                        setHayMaterias(false);
                        setLoading(false);
                        return;
                    } else {
                        setHayMaterias(true);
                    }
                    let newMaterias: InterfaceMateria[] = [];
                    // console.log("Entrando al for");

                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        const newMateria: InterfaceMateria = {
                            clave: element.clave,
                            nombre: element.nombre,
                            nivel: element.nivel,
                        };
                        if (newMateria.clave == (clave as string)) {
                            setSubject(newMateria);
                            console.log("Materia encontrada: ", newMateria);
                            setLoading(false);
                            setHayMaterias(true);
                            return;
                        } 
                    }
                    setLoading(false);
                } else {
                    console.error(
                        `Error en la solicitud. Código de estado: ${response.status}`
                    );
                }
            } catch (error) {
                console.error("Error de solicitud:", error);
            }
        }
    };

    useEffect(() => {
        fetchSubject();
    }, [clave]);

    return (
        <>
            <CardView title={title} description={subtitle}>
                <FormCreateSubject modifiyingSubject subbject={subject} />
            </CardView>
        </>
    );
}

export default ModifySubject;
