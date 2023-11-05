import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useCookies } from 'react-cookie';


const PrivateRoute = ({ children }) => {
    const { data: session, status } = useSession();
    const [cookies, setCookie] = useCookies(['token']);
    const router = useRouter();

    useEffect(() => {

        if (status === "unauthenticated") {
            router.push("/auth/login");
        } else if (session && status === "authenticated") {
            console.log("Usuario autenticado")
            if (cookies.token != null) {
                console.log("ya existe un token:", cookies.token);
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
        }

        
    }, [session, status, router]);

    return <>{children}</>;
};

export default PrivateRoute;
