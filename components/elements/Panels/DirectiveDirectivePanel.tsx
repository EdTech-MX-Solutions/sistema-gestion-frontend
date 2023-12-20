import { useCookies } from "react-cookie";
import PanelCard from "./CardPanel";
import React from "react";
import { ConfirmLogoutElement } from "../Confirms/ConfirmLogout";

export default function PanelDirectiveCards() {
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
                title="Consultar Directivos"
                bgColor="teal-700"
                route="/directive/actionsDirective/consultDirectives"
            />
            <PanelCard
                category="Panel de Control"
                title="Registrar Directivo"
                bgColor="teal-700"
                route="/directive/actionsDirective/registrerDirective"
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

