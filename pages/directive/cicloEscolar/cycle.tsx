import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";
import CardView from "@/components/CardView";
import { usePeriodo } from "@/components/context/PeriodoProvider";
import CardPeriodos from "@/components/directive/Periodos/CardPeriodos";
import { BreadcrumbsWithIcon } from "@/components/elements/BreadCrumbs/BreadcrumbsWithIcon";
import { BreadcrumbsDirective } from "@/components/elements/BreadCrumbs/BreadDirective";

function CreateCicloEscolar() {
    // const title = "Ciclo Escolar";
    const { periodo } = usePeriodo();
    const title =
        "Periodo Actual: " + periodo.anioInicio + "-" + periodo.anioFin;

    return (
        <>
            <BreadcrumbsDirective ActualRoute={"Ciclo Escolar"} />
            <CardView title={title} description={title}>
                <CardPeriodos />
            </CardView>
        </>
    );
}

export default CreateCicloEscolar;
