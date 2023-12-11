import { useSession, signIn, signOut } from "next-auth/react"

import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useCookies } from 'react-cookie';
import { jwtDecode } from "jwt-decode";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { PeriodoProvider } from "../context/PeriodoProvider";


const PrivateRoute = ({ children, allowedRoles }) => {
    if (allowedRoles == null)
        allowedRoles = ["DIRECTIVO"];
    const { data: session, status } = useSession();
    const [cookies, setCookie] = useCookies(['token', 'user', 'boleta', 'childs']);

    const router = useRouter();

    useEffect(() => {

        if (status === "unauthenticated") {
            router.push("/auth/login");
        } else if (session && status === "authenticated") {
            console.log("Usuario autenticado")
            if (cookies === undefined || cookies.token === undefined || cookies.token == "undefined") {
                console.log("No existe un token, generando nuevo token");
                const accessToken = session.accessToken;
                if (accessToken != null) {
                    console.log(session.accessToken);
                    const api = new SIGEAPICollection();
                    console.log("accessToken:", accessToken);
                    api.authCollection.executeGetGoogleAutentication(accessToken)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Respuesta no exitosa: ' + response.status);
                            }
                            return response.json(); // Analiza el cuerpo de la respuesta como JSON
                        })
                        .then(data => {
                            // console.log("Datos de respuesta:", data);
                            console.log("token:", data.token);
                            setCookie('token', data.token);
                            const decodedToken = jwtDecode(data.token);
                            console.log("decodedToken:", decodedToken);
                            setCookie('user', decodedToken.nombres);
                            // console.log("cookie token:", cookies.token);
                        })
                        .catch(error => {
                            console.error("Error de solicitud:", error);
                            signOut();
                        });
                }
            } else {
                console.log("ya existe un token:", cookies.token);
                console.log("token antes de decode: " + cookies.token)
                const decodedToken = jwtDecode(cookies.token);
                console.log("decodedToken:", decodedToken);
                const user_roles = decodedToken.roles;
                console.log("user_roles:", user_roles);
                const tienePermiso = user_roles.some(permiso => allowedRoles.includes(permiso));

                if (tienePermiso) {
                    console.log("Tiene permiso para acceder a esta página");
                    console.log("current roles:", user_roles);
                    console.log("allowed roles:", allowedRoles);
                    // router.push("/auth/login");
                } else {
                    console.log("No tienes permisos para acceder a esta página");
                    console.log("current roles:", user_roles);
                    console.log("allowed roles:", allowedRoles);
                }

                if (cookies.user == null) {
                    console.log("No existe un usuario, generando nuevo usuario");
                    const user = decodedToken;
                    setCookie('user', user);
                    console.log("cookie user:", cookies.user);
                } else {
                    console.log("ya existe un usuario:", cookies.user);
                }

                return;
            }
        }


    }, [session, status, router]);

    return <>
        <PeriodoProvider>
            {children}
        </PeriodoProvider>
    </>;
};

export default PrivateRoute;
