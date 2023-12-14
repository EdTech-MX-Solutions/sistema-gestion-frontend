import { ReactNode } from "react";
import TableProfessors from "@/components/directive/TableProfessors";
import InputSearch from "@/components/template/InputSearch";
import PrincipalTitle from "@/components/directive/Principal.Title";
import CardView from "@/components/CardView";
import { useProfesores } from "@/components/context/ProfesorProvider";
import Loader from "@/components/elements/Loader";

interface DefaultLayoutProps {
    children: ReactNode;
}

function ConsultProfessor() {
    const { profesores, loading, hayProfesores } = useProfesores();
    console.log(profesores);

    const filtredProfesores = profesores.filter(
        (profesor) => profesor.diretivo === false
    );
    console.log(filtredProfesores);

    return (
        <>
            <CardView title={"title"} customtitle={true} description={""}>
                <PrincipalTitle title={"Consultar Profesores"}></PrincipalTitle>
                <InputSearch
                    route="/directive/actionsProfessor/consultProfessor?id="
                    searchDataAutomcomplete={[
                        ...filtredProfesores.map((profesor) => ({
                            key: profesor.idProfesor,
                            value: profesor.idProfesor,
                        })),
                        ...filtredProfesores.map((profesor) => ({
                            key: profesor.idProfesor,
                            value: `${profesor.nombre} ${profesor.apellidoPaterno} ${profesor.apellidoMaterno}`,
                        })),
                        ...filtredProfesores.map((profesor) => ({
                            key: profesor.idProfesor,
                            value: `${profesor.email} `,
                        })),
                    ]}
                    comment={
                        "Recuerda que puedes buscar a un profesor por nombre, apellidos o No. de empleado."
                    }
                ></InputSearch>
                {loading ? <Loader size="lg" /> : null}
                {hayProfesores && !loading ? (
                    <TableProfessors
                        professors={filtredProfesores}
                    ></TableProfessors>
                ) : null}
            </CardView>
        </>
    );
}

export default ConsultProfessor;
