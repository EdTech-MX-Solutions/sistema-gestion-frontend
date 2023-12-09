import { useCookies } from 'react-cookie';
import PrivateRoute from '../components/auth/PrivateRoute';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
function GetGreetings() {

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
    const [cookies] = useCookies(['token']);
    const router = useRouter();
    let token = ""
    let user_roles = ""
    

    useEffect(() => {
        console.log("Index useEffect");
        console.log("cookies:", cookies);
        console.log("token:", cookies.token);
        if (cookies.token != undefined) {
            token = cookies.token
            const decodedToken = jwtDecode(token);
            user_roles = decodedToken.roles;
            user_roles.includes("DIRECTIVO") ? router.push('/directive/') : (user_roles.includes("TUTOR") ? router.push('/student/') : router.push('/professors/'))
        }
    })



    let greeting = GetGreetings();
    let name = "test"

    return (
        <>
            <PrivateRoute>

                <div className="m-10 p-10 text-gray-800 dark:text-gray-200">
                    <div className="text-4xl font-semibold">
                        <h1>
                            Hola, bienvenido
                        </h1>
                    </div>
                    <div className="text-2xl font-semibold">
                        <h1>
                            {greeting}, {name}
                        </h1>
                        <p>
                            Redirigiendo al index del perfil...
                        </p>
                    </div>
                </div>

            </PrivateRoute>
        </>
    );
}
