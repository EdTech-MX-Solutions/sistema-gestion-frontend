import { ReactNode } from "react";
import InputSearch from "@/components/template/InputSearch";
import TableDirectives from "@/components/directive/TableDirectives";
import CardView from "@/components/CardView";
import PrincipalTitle from "@/components/directive/Principal.Title";
import { useProfesores } from "@/components/context/ProfesorProvider";
import Loader from "@/components/elements/Loader";

interface DefaultLayoutProps {
    children: ReactNode;
}

function ConsultDirective() {
    const { profesores, loading, hayProfesores } = useProfesores();
    console.log(profesores);

    const filtredDirectivos = profesores.filter(
        (profesor) => profesor.diretivo === true
    );
    console.log(filtredDirectivos);

    return (
        <>
            <CardView title={"title"} customtitle={true} description={""}>
                <PrincipalTitle title={"Consultar directivos"}></PrincipalTitle>
                <InputSearch
                    route="/directive/actionsProfessor/consultProfessor?id="
                    searchDataAutomcomplete={[
                        ...filtredDirectivos.map((professor) => ({
                            key: professor.idProfesor,
                            value: professor.idProfesor,
                        })),
                        ...filtredDirectivos.map((professor) => ({
                            key: professor.idProfesor,
                            value: `${professor.nombre} ${professor.apellidoPaterno} ${professor.apellidoMaterno}`,
                        })),
                    ]}
                    comment={
                        "Recuerda que puedes bucar por numero de empleado y nombre"
                    }
                ></InputSearch>
                {loading ? <Loader size="lg" /> : null}
                {hayProfesores && !loading ? (
                    <TableDirectives
                        directives={filtredDirectivos}
                    ></TableDirectives>
                ) : null}
            </CardView>
        </>
    );
}

export default ConsultDirective;
