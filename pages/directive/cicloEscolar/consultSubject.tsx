import { ReactNode, useEffect, useState } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import InputSearch from "@/components/template/InputSearch";
import TableStudets from "@/components/directive/TableStudets";
import CardView from "@/components/CardView";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import InterfaceAlumno from "@/data/interfaces/alumno";
import Loader from "@/components/elements/Loader";
import InterfaceMateria from "@/data/interfaces/materia";
import TileCard from "@/components/elements/TileCards/TileCard";
import Image from "next/image";
import Card from "@/components/Card";
import { AccordionCustomIcon } from "@/components/elements/Accordion/Accordion";
import { SubjectAccordion } from "@/components/elements/Accordion/SubjectAccordion";

function ConsultSubject() {
    const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
    const [materias, setMaterias] = useState<InterfaceAlumno[]>([]);
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
            <CardView
                title={"Consulta de Materias"}
                description={
                    "En esta sección puedes consultar las materias que pueden ser asignadas a los alumnos"
                }
            >
                <Card>
                    <>
                        {loading ? <Loader /> : null}
                        {hayMaterias && !loading ? (
                            <>
                                <div>
                                    <div
                                        id="Card3"
                                        className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6"
                                    >
                                       NIVEL 1
                                    </div>
                                    <SubjectAccordion />
                                </div>
                            </>
                        ) : null}
                    </>
                </Card>
            </CardView>
        </>
    );
}

export default ConsultSubject;
