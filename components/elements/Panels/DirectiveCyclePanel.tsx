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
                route="/directive/actionsStudent"
            />
            <PanelCard
                category="Inicialización del Sistema"
                title="Carga de Archivo"
                bgColor="emerald-600"
                route="/directive/actionsStudent/consultParents"
            />
            <PanelCard
                category="Panel de Control"
                title="Materias"
                bgColor="emerald-600"
                route="/directive/cicloEscolar/subjects"
            />
            <PanelCard
                category="Panel de Control"
                title="Mensajes"
                bgColor="teal-700"
                route="/directive/cicloEscolar/suggestions"
            />
            <PanelCard
                category="Panel de Control"
                title="Reportes y Avisos"
                bgColor="teal-700"
                route="/directive/cicloEscolar/suggestions"
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
            <div className="flex flex-wrap items-center mt-10">
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

