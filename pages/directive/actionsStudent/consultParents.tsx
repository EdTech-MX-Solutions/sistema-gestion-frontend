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
                        sexo: sexo,
                        paisOrigen: element.paisOrigen,
                        estadoCivil: element.estadoCivil,
                        redesSociales: element.redesSociales,
                        tipoIdentificacion: element.tipoIdentificacion,
                        noIdentificacion: element.noIdentificacion,
                        esPrincipal: element.esPrincipal,
                        parentesco: element.parentesco,
                        estadoOrigen: element.estadoOrigen,
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
                            key: tutor.id,
                            value: tutor.id,
                        })),
                        ...tutores.map((tutor) => ({
                            key: tutor.id,
                            value: `${tutor.nombres} ${tutor.apellidoPaterno} ${tutor.apellidoMaterno}`,
                        })),
                        ...tutores.map((tutor) => ({
                            key: tutor.id,
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
