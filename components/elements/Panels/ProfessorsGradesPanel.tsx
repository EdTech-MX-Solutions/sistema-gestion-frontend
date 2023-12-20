import { useCookies } from "react-cookie";
import PanelCard from "./CardPanel";
import React from "react";
import { ConfirmLogoutElement } from "../Confirms/ConfirmLogout";

export default function ProfessorsPanel() {
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
                category="Panel de Calificaciones"
                title="Calificaciones del Grupo"
                bgColor="emerald-600"
                route="/professors/actionsStudent/list"
            />
            <PanelCard
                category="Panel de Calificaciones"
                title="Horario de Grupo"
                bgColor="emerald-600"
                route="/professors/actionsStudent/professorSchedule"
            />
            <PanelCard
                category="Panel de Control"
                title="Panel de Calificaciones"
                bgColor="emerald-600"
                route="/professor/othersOptions/suggestions"
            />
            <PanelCard
                category="Panel de Control"
                title="Otras Opciones"
                bgColor="cyan-600"
                route="/directive/actionsDirective"
            />
            {/* <PanelCard
                category="Panel de Control"
                title="Reportes y Avisos"
                bgColor="teal-700"
                route="/directive/othersOptions/suggestions"
            /> */}
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

