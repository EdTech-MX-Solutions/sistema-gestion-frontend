import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import FormCicloEscolar from "@/components/directive/FormCicloEscolar";
import CardView from "@/components/CardView";
import FormCreateSubject from "@/components/directive/FormCreateSubject";

function createSubject() {
    const title = "Iniciar Ciclo Escolar";

    return (
        <>
            <CardView title={title} description={title} customtitle={true}>
                <PrincipalTitle title={title}></PrincipalTitle>
                <FormCreateSubject />
            </CardView>
        </>
    );
}

export default createSubject;
