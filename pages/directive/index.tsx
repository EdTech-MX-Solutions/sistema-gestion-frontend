import CardView from "@/components/CardView";
import PrivateRoute from "@/components/auth/PrivateRoute";
import PanelCards from "@/components/elements/Panels/DirectivePanel";
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