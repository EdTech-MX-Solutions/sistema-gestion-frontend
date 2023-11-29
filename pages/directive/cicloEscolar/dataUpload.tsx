import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import CardCargaPorLote from "@/components/directive/CardCargaPorLote";

interface DefaultLayoutProps {
  children: ReactNode;
}

function dataUpload(){
    return(
        <>
            <PrincipalTitle title = {"Carga Por Lote"}></PrincipalTitle>
            <CardCargaPorLote title = {"Recuerda que en el CSV que subas debe tener 30 columnas y debe ser el que descargaste del formulario de google docs"}></CardCargaPorLote>
            
        </>
    );
}

export default dataUpload;
