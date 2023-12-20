import CardView from "@/components/CardView";
import PrivateRoute from "@/components/auth/PrivateRoute";
import { useGreet } from "@/components/context/GreetProvider";
import PanelCards from "@/components/elements/Panels/DirectivePanel";
import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";



export default function Index() {
    let greeting = useGreet().greet;
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
            <PrivateRoute allowedRoles={["SUPERUSER", "DIRECTIVO"]}>
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