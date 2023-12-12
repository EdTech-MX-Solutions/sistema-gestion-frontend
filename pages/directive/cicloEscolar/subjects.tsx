
import CardView from "@/components/CardView";
import { usePeriodo } from "@/components/context/PeriodoProvider";
import { BreadcrumbsDirective } from "@/components/elements/BreadCrumbs/BreadDirective";
import MateriasPanel from "@/components/elements/Panels/MateriasPanel";

function CreateCicloEscolar() {
    // const title = "Ciclo Escolar";
    const { periodo } = usePeriodo();
    const title =
        "Materias Escolares: Ciclo " + periodo.anioInicio + "-" + periodo.anioFin;

    return (
        <>
            <BreadcrumbsDirective ActualRoute={"Materias Escolares"} />
            <CardView title={title} description={"Panel de Materias Escolares"}>
                <MateriasPanel />
            </CardView>
        </>
    );
}

export default CreateCicloEscolar;
