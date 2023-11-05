import { useSession, signIn, signOut } from "next-auth/react"

import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useCookies } from 'react-cookie';
import { jwtDecode } from "jwt-decode";


const PrivateRoute = ({ children, allowedRoles }) => {
    if (allowedRoles == null)
        allowedRoles = ["DIRECTIVO", "TUTOR"];
    const { data: session, status } = useSession();
    const [cookies, setCookie] = useCookies(['token', 'user']);

    const router = useRouter();

    useEffect(() => {

        if (status === "unauthenticated") {
            router.push("/auth/login");
        } else if (session && status === "authenticated") {
            console.log("Usuario autenticado")
            if (cookies.token != null) {
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
            } else {
                console.log("No existe un token, generando nuevo token");
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
                                signOut()
                                throw new Error("Error en la solicitud");
                            }
                        })
                        .then(data => {
                            console.log("Datos de respuesta:", data);
                            if (cookies.token == null) {
                                setCookie('token', data.token);
                                const decodedToken = jwtDecode(data.token);
                                console.log("decodedToken:", decodedToken);
                            }
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
        }


    }, [session, status, router]);

    return <>{children}</>;
};

export default PrivateRoute;
