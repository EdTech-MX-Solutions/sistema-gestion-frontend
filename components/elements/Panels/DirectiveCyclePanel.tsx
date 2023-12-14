import { useCookies } from "react-cookie";
import PanelCard from "./CardPanel";
import React from "react";
import { ConfirmLogoutElement } from "../Confirms/ConfirmLogout";

export default function PanelCycleCards() {
    const [confirmationisopen, setConfirmationOpen] = React.useState(false);
    const [cookies, setCookie, removeCookie] = useCookies([
        "token",
        "user",
        "childs",
        "boleta",
    ]);

    const Panel = () => (
        <>
            <div className="bg-teal-700" />
            <PanelCard
                category="Panel de Control"
                title="Ciclo Escolar"
                bgColor="emerald-600"
                route="/directive/cicloEscolar/cycle"
            />
            <PanelCard
                category="Inicialización del Sistema"
                title="Carga de Archivo"
                bgColor="emerald-600"
                route="/directive/cicloEscolar/dataUpload"
            />
            <PanelCard
                category="Panel de Control"
                title="Materias"
                bgColor="emerald-600"
                route="/directive/cicloEscolar/subjects"
            />
            <div className="bg-emerald-800" />
            {/* <PanelCard
                category="Panel de Control"
                title="Mensajes"
                bgColor="emerald-800"
                route="/directive/cicloEscolar/suggestions"
            />
            <PanelCard
                category="Panel de Control"
                title="Reportes y Avisos"
                bgColor="emerald-800 bg-opacity-40"
                route="/directive/cicloEscolar/suggestions"
            /> */}
            <PanelCard
                category="Panel de Control"
                title="Regresar"
                bgColor="teal-700"
                route="/directive/"
            />
            <PanelCard
                category="Sistema"
                title="Cerrar Sesión"
                bgColor="red-800"
                onClick={() => setConfirmationOpen(true)}
            />
        </>
    );

    return (
        <>
            <div className="flex flex-wrap mt-10">
                <Panel />
            </div>
            <ConfirmLogoutElement
                open={confirmationisopen}
                text="¿Estás seguro que deseas cerrar sesión?"
                handler={() => setConfirmationOpen(false)}
            />
        </>
    );
}

