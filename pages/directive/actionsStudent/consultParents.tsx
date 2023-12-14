import { ReactNode, useEffect, useState } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import InputSearch from "@/components/template/InputSearch";
import CardView from "@/components/CardView";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import Loader from "@/components/elements/Loader";
import InterfaceParent from "@/data/interfaces/parent";
import TableParents from "@/components/directive/TableParents";

interface DefaultLayoutProps {
    children: ReactNode;
}

function ConsultStudents() {
    const [cookies, setCookie] = useCookies(["token"]);
    const [tutores, setTutores] = useState<InterfaceParent[]>([]);
    const [hayTutores, setHayTutores] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchTutores = async () => {
        const api = new SIGEAPICollection();
        const token = cookies.token;

        try {
            const response = await api.sharedCollection.executeGetTutores(
                token
            );
            if (response.ok) {
                console.log("Generando Lista de Tutores");
                const data = await response.json();
                console.log(data);
                if (!data || data.length == 0) {
                    setHayTutores(false);
                    setLoading(false);
                    return;
                } else {
                    setHayTutores(true);
                }
                let newTutores: InterfaceParent[] = [];
                console.log("Entrando al for");

                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    const sexo =
                        element.sexo === "M" ? "Masculino" : "Femenino";
                    const newAlumno: InterfaceParent = {
                        id_tutor: element.id,
                        curp: element.curp,
                        leerYescribir: element.leerYescribir,
                        gradoMaximoDeEstudios: element.gradoMaximoDeEstudios,
                        ocupacion: element.ocupacion,
                        nombres: element.nombre,
                        apellido_paterno: element.apellidoPaterno,
                        apellido_materno: element.apellidoMaterno,
                        correo: element.email,
                        fecha_nacimiento: element.fecha_nacimiento,
                        sexo: sexo,
                        pais_origen: element.pais_origen,
                        estado_civil: element.estado_civil,
                        red_social: element.red_social,
                        tipo_identificacion: element.tipo_identificacion,
                        no_identificacion: element.no_identificacion,
                        tutor_principal: element.tutor_principal,
                        parentesco: element.parentesco,
                        entidad_nacimiento: element.entidad_nacimiento,
                        numeros: element.numeros,
                    };
                    newTutores.push(newAlumno);
                }
                console.log("Tutores obtenidos ");
                setTutores(newTutores);
                setHayTutores(true);
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
        fetchTutores();
    }, []);

    return (
        <>
            <CardView title={"title"} customtitle={true} description={""}>
                <PrincipalTitle title={"Consultar Tutores"}></PrincipalTitle>

                <InputSearch
                    route="/directive/actionsStudent/tutores?id="
                    searchDataAutomcomplete={[
                        ...tutores.map((tutor) => ({
                            key: tutor.id_tutor,
                            value: tutor.id_tutor,
                        })),
                        ...tutores.map((tutor) => ({
                            key: tutor.id_tutor,
                            value: `${tutor.nombres} ${tutor.apellido_paterno} ${tutor.apellido_materno}`,
                        })),
                        ...tutores.map((tutor) => ({
                            key: tutor.id_tutor,
                            value: `${tutor.correo}`,
                        })),
                    ]}
                    comment={
                        "Recuerda que puedes buscar a un tutor por apellido parterno o id"
                    }
                ></InputSearch>
                {loading ? <Loader size="lg" /> : null}
                {hayTutores && !loading ? (
                    <TableParents parents={tutores}></TableParents>
                ) : null}
            </CardView>
        </>
    );
}

export default ConsultStudents;
