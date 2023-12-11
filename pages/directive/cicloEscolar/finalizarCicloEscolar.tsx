import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import FormCicloEscolar from "@/components/directive/FormCicloEscolar";
import CardView from "@/components/CardView";
import FormFinalizarCicloEscolar from "@/components/directive/FormFinalizarCicloEscolar";

interface DefaultLayoutProps {
    children: ReactNode;
}

function createCicloEscolar() {
    const title = "Finalizar Ciclo Escolar";

    return (
        <>
            <CardView title={title} description={title} customtitle={true}>
                <PrincipalTitle title={title}></PrincipalTitle>
                <FormFinalizarCicloEscolar autoStart/>
            </CardView>
        </>
    );
}

export default createCicloEscolar;
