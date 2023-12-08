import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import FormCicloEscolar from "@/components/directive/FormCicloEscolar";
import CardView from "@/components/CardView";

interface DefaultLayoutProps {
    children: ReactNode;
}

function createCicloEscolar() {
    const title = "Iniciar Ciclo Escolar";

    return (
        <>
            <CardView title={title} description={title} customtitle={true}>
                <PrincipalTitle title={title}></PrincipalTitle>
                <FormCicloEscolar/>
            </CardView>
        </>
    );
}

export default createCicloEscolar;
