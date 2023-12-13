import PrincipalTitle from "@/components/directive/Principal.Title";
import CardView from "@/components/CardView";
import FormCreateSubject from "@/components/directive/FormCreateSubject";
import ConsultSubject from "./consultSubject";

function createSubject() {
    const title = "Registro de Nueva Materia";
    const subtitle = "En esta sección puedes crear las materias que pueden ser asignadas a los alumnos"

    return (
        <>
            <CardView title={title} description={subtitle}>
                {/* <PrincipalTitle title={title}></PrincipalTitle> */}
                <FormCreateSubject />
                <ConsultSubject />
            </CardView>
        </>
    );
}

export default createSubject;
