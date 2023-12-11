import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import CardCargaPorLote from "@/components/directive/CardCargaPorLote";
import CardView from "@/components/CardView";

interface DefaultLayoutProps {
    children: ReactNode;
}

function dataUpload() {
    return (
        <>
            <CardView title={"title"} description={"title"} customtitle={true}>
                <PrincipalTitle title={"Carga Por Lote"}></PrincipalTitle>
                <CardCargaPorLote
                    title={
                        "Recuerda que en el CSV que subas debe tener 30 columnas y debe ser el que descargaste del formulario de google docs"
                    }
                ></CardCargaPorLote>
            </CardView>
        </>
    );
}

export default dataUpload;
