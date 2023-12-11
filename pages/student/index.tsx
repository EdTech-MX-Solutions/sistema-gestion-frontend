import Card from "@/components/Card";
import CardView from "@/components/CardView";
import PrivateRoute from "@/components/auth/PrivateRoute";
import { ConfirmLogoutElement } from "@/components/elements/Confirms/ConfirmLogout";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function GetGreetings() {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
        return "Buenos días";
    } else if (curHr < 18) {
        return "Buenas tardes";
    } else {
        return "Buenas noches";
    }
}

export default function Index() {
    let greeting = GetGreetings();
    const [cookies, setCookie, removeCookie] = useCookies([
        "token",
        "user",
        "childs",
        "boleta",
    ]);
    const [confirmationisopen, setConfirmationOpen] = React.useState(false);
    const [name, setName] = useState("Cargando...");

    function getUserName() {
        if (cookies.user) {
            setName(cookies.user);
        }
    }

    useEffect(() => {
        getUserName();
    }, []);

    type PanelCardProps = {
        category: string;
        title: string;
        bgColor: string;
        onClick?: () => void;
        route?: string;
    };

    const PanelCard = ({
        category,
        title,
        bgColor,
        onClick,
        route,
    }: PanelCardProps): JSX.Element => (
        <Link
            href={route || "#"}
            onClick={onClick}
            className={`flex-shrink-0 my-2 mr-4 relative overflow-hidden bg-${bgColor} rounded-lg w-full lg:w-1/4 sm:w-auto shadow-xl group`}
        >
            <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
                viewBox="0 0 375 283"
                fill="none"
                style={{ opacity: 0.1 }}
            >
                <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                />
                <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <h1
                    className={`relative w-full sm:w-auto font-semibold text-3xl text-white`}
                >
                    {title}
                </h1>
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 -mb-1">{category}</span>
            </div>
        </Link>
    );

    const PanelCards = () => (
        <>
            <div className="flex flex-wrap items-center mt-10">
                <PanelCard
                    category="Datos Académicos"
                    title="Calificaciones"
                    bgColor="emerald-600"
                    route="/student/academics/notes"
                />
                <PanelCard
                    category="Alumno"
                    title="Horario"
                    bgColor="emerald-600"
                    route="/student/academics/schedule"
                />
                <PanelCard
                    category="Otras Opciones"
                    title="Reportes"
                    bgColor="emerald-600"
                    route="/student/othersOptions/suggestions"
                />
                <PanelCard
                    category="Sistema"
                    title="Cerrar Sesión"
                    bgColor="gray-600"
                    onClick={() => setConfirmationOpen(true)}
                />
                {/* Agregar más componentes PanelCard según sea necesario */}
            </div>
            <ConfirmLogoutElement
                open={confirmationisopen}
                text="¿Estás seguro que deseas cerrar sesión?"
                handler={() => setConfirmationOpen(false)}
            />
        </>
    );

    return (
        <>
            <PrivateRoute allowedRoles={["SUPERUSER", "TUTOR"]}>
                <CardView
                    title={"Hola, " + greeting + " " + name}
                    description="Este es tu panel de control"
                >
                    <PanelCards />
                </CardView>
            </PrivateRoute>
        </>
    );
}
function removeCookie(arg0: string, arg1: { path: string }) {
    throw new Error("Function not implemented.");
}
