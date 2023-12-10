import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import FormCicloEscolar from "@/components/directive/FormCicloEscolar";
import CardView from "@/components/CardView";
import { usePeriodo } from "@/components/context/PeriodoProvider";
import CardPeriodos from "@/components/directive/Periodos/CardPeriodos";

interface DefaultLayoutProps {
    children: ReactNode;
}

function createCicloEscolar() {
    // const title = "Ciclo Escolar";
    const { periodo } = usePeriodo();
    const title =
    "Periodo Actual: " + periodo.anioInicio + "-" + periodo.anioFin;

    return (
        <>
            <CardView title={title} description={title} customtitle={true}>
                <PrincipalTitle title={title}></PrincipalTitle>
                <CardPeriodos/>
            </CardView>
        </>
    );
}

export default createCicloEscolar;
