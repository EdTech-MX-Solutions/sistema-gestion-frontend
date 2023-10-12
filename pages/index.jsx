import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

function GetGreetings() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const chatsRef = useRef();


    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/login");
        } else if (session && status === "authenticated") {
            const handleFetchChatTitles = async () => {
                try {
                    const chatTitles = await fetchChatTitles();
                    if (chatTitles.length !== chatsRef.length) {
                        setChats(chatTitles);
                    }
                } catch (error) {
                    console.error("Error fetching chat titles:", error);
                }
            };

            handleFetchChatTitles();
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
