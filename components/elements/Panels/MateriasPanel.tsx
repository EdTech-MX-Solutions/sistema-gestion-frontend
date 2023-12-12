import { useCookies } from "react-cookie";
import PanelCard from "./CardPanel";
import React from "react";
import { ConfirmLogoutElement } from "../Confirms/ConfirmLogout";

export default function MateriasPanel() {
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
                title="Consulta de Materias"
                bgColor="emerald-600"
                route="/directive/cicloEscolar/consultSubject"
            />
            <PanelCard
                category="Panel de Control"
                title="Registro de Materias"
                bgColor="emerald-600"
                route="/directive/cicloEscolar/createSubject"
            />
            <PanelCard
                category="Panel de Control"
                title="Ciclo Escolar"
                bgColor="emerald-600"
                route="/directive/cicloEscolar/cycle"
            />
            <PanelCard
                category="Sistema"
                title="Regresar"
                bgColor="teal-700"
                route="/directive/cicloEscolar/"
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
