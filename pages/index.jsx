import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useCookies } from 'react-cookie';


function GetGreetings() {
    const [cookies, setCookie] = useCookies(['token']);

    const { data: session, status } = useSession();
    const router = useRouter();
    const chatsRef = useRef();


    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/login");
        } else if (session && status === "authenticated") {
            console.log("Usuario autenticado")
            if (cookies.token != null) {
                console.log("ya existe un token:", cookies.token);
                return;
            } else {
                console.log("No existe un token:");
            }
            const accessToken = session.accessToken;
            if (accessToken != null) {
                console.log(session.accessToken);

                const base_rute = "https://sige-octavio-paz.azurewebsites.net";
                const version = "v1";
                const route = "auth/login/google";
                fetch(`${base_rute}/${version}/${route}?accessToken=${accessToken}`, {
                    method: "GET",
                })
                    .then(response => {
                        if (response.ok) {
                            return response.json(); // Convierte la respuesta a JSON
                        } else {
                            throw new Error("Error en la solicitud");
                        }
                    })
                    .then(data => {
                        console.log("Datos de respuesta:", data);
                        if (cookies.token == null)
                            setCookie('token', data.token);
                        else {
                            console.log("ya existe un token:", cookies.token);
                        }

                        console.log("cookie token:", cookies.token);
                    })
                    .catch(error => {
                        console.error("Error de solicitud:", error);
                    });
            }
        }
    }, [session, status, router, chatsRef]);

    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
        return 'Buenos días';
    } else if (curHr < 18) {
        return 'Buenas tardes';
    } else {
        return 'Buenas noches';
    }
}

export default function Index() {
    const { data: session } = useSession()
    const greeting = GetGreetings();
    const name = session?.user?.name;
    return (
        <>
            <div className="m-10 p-10">
                <div className="text-4xl font-semibold">
                    <h1>
                        Menu Principal del Alumno
                    </h1>
                </div>
                <div className="text-2xl font-semibold">
                    <h1>
                        {greeting}, {name}
                    </h1>
                </div>

            </div>
        </>
    );
}
