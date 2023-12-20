import { useCookies } from "react-cookie";
import React from "react";
import PanelCard from "../CardPanel";
import { ConfirmLogoutElement } from "../../Confirms/ConfirmLogout";

export default function CardHorariosGrupos({ grupo }: { grupo: string }) {
    const [confirmationisopen, setConfirmationOpen] = React.useState(false);

    const Panel = () => (
        <>
            <div className="bg-teal-700" />
            {grupo ? (
                <PanelCard
                    category="Panel de Horarios"
                    title="Regresar a Detalles del Grupo"
                    bgColor="emerald-600"
                    route={`/directive/actionsGroup/consultGroup?id=${grupo}`}
                />
            ) : null}

            <PanelCard
                category="Panel de Horarios"
                title="Consulta de Grupos"
                bgColor="emerald-600"
                route="/directive/actionsGroup/consultGroups"
            />
            <PanelCard
                category="Panel de Horarios"
                title="Modificar Horarios"
                bgColor="emerald-600"
                route="/directive/actionsGroup/ModifyScheduleGroup"
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
