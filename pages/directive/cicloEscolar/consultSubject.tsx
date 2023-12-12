import { ReactNode, useEffect, useState } from "react";
import CardView from "@/components/CardView";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import Loader from "@/components/elements/Loader";
import InterfaceMateria from "@/data/interfaces/materia";
import { SubjectAccordion } from "@/components/elements/Accordion/SubjectAccordion";
import { BreadcrumbsDirective } from "@/components/elements/BreadCrumbs/BreadDirective";

function ConsultSubject() {
    const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
    const [materias, setMaterias] = useState<InterfaceMateria[]>([]);
    const [hayMaterias, setHayMaterias] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAlumnos = async () => {
        const api = new SIGEAPICollection();
        const token = cookies.token;

        try {
            const response = await api.directivosCollection.executeGetMaterias(
                token
            );
            if (response.ok) {
                console.log("Generando Lista materias");
                const data = await response.json();
                console.log(data);
                if (!data || data.length == 0) {
                    setHayMaterias(false);
                    setLoading(false);
                    return;
                } else {
                    setHayMaterias(true);
                }
                let newMaterias: InterfaceMateria[] = [];
                console.log("Entrando al for");

                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    const newMateria: InterfaceMateria = {
                        clave: element.clave,
                        nombre: element.nombre,
                        nivel: element.nivel,
                    };
                    newMaterias.push(newMateria);
                }
                setMaterias(newMaterias);
                console.log("Materias obtenidos ");
                setHayMaterias(true);
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
            <BreadcrumbsDirective ActualRoute={"Materias Escolares"} />
            <CardView
                title={"Consulta de Materias"}
                description={
                    "En esta sección puedes consultar las materias que pueden ser asignadas a los alumnos"
                }
            >
                <>
                    {loading ? <Loader /> : null}
                    {hayMaterias && !loading ? (
                        <>
                            <SubjectAccordion subjects={materias} />
                        </>
                    ) : null}
                </>
            </CardView>
        </>
    );
}

export default ConsultSubject;
