import CardView from "@/components/CardView";
import PrivateRoute from "@/components/auth/PrivateRoute";
import { useGreet } from "@/components/context/GreetProvider";
import PanelDirectiveStudents from "@/components/directive/Students";
import PanelCards from "@/components/elements/Panels/DirectivePanel";
import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Index() {
    let greetingProvider = useGreet();
    const [cookies, setCookie, removeCookie] = useCookies(["token", "user", "childs", "boleta"]);
    const [name, setName] = useState("Cargando...");

    function getUserName() {
        if (cookies.user) {
            setName(cookies.user);
        }
    }

    useEffect(() => {
        getUserName();
    }, []);

    return (
        <>
            <PrivateRoute allowedRoles={["SUPERUSER", "DIRECTIVE"]}>
                <BreadcrumbsWithIcon />
                <CardView
                    title={"Hola, " + greetingProvider.greet + " " + name}
                    description="Este es tu panel de control para gestionar a los alumnos."
                >
                    <PanelDirectiveStudents />
                </CardView>
            </PrivateRoute>
        </>
    );
}

function BreadcrumbsWithIcon() {
    return (
        <Breadcrumbs className="text-black dark:text-gray-200">
            <Link href="/directive" className="opacity-60 hover:opacity-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            </Link>
            <a href="#">Panel Alumnos</a>
        </Breadcrumbs>
    );
}